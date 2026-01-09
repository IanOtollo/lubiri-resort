'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Room, BookingFormData } from '@/types';
import toast from 'react-hot-toast';
import { Calendar, Users, CreditCard, Sparkles, Check } from 'lucide-react';
import { differenceInDays, parseISO } from 'date-fns';
import { motion } from 'framer-motion';

export default function BookingPage() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get('room');

  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [numberOfNights, setNumberOfNights] = useState(0);

  const [formData, setFormData] = useState<BookingFormData>({
    room_id: roomId || '',
    guest_name: '',
    guest_email: '',
    guest_phone: '',
    check_in: '',
    check_out: '',
    number_of_guests: 1,
    special_requests: '',
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    if (roomId && rooms.length > 0) {
      const room = rooms.find(r => r.id === roomId);
      if (room) {
        setSelectedRoom(room);
        setFormData(prev => ({ ...prev, room_id: roomId }));
      }
    }
  }, [roomId, rooms]);

  useEffect(() => {
    if (formData.check_in && formData.check_out && selectedRoom) {
      const checkIn = parseISO(formData.check_in);
      const checkOut = parseISO(formData.check_out);
      const nights = differenceInDays(checkOut, checkIn);
      
      if (nights > 0) {
        setNumberOfNights(nights);
        setTotalAmount(nights * selectedRoom.price_per_night);
      } else {
        setNumberOfNights(0);
        setTotalAmount(0);
      }
    }
  }, [formData.check_in, formData.check_out, selectedRoom]);

  const fetchRooms = async () => {
    try {
      const { data, error } = await supabase
        .from('rooms')
        .select('*')
        .eq('is_available', true)
        .order('name');

      if (error) throw error;
      setRooms(data || []);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      toast.error('Failed to load rooms');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const checkIn = parseISO(formData.check_in);
      const checkOut = parseISO(formData.check_out);
      const nights = differenceInDays(checkOut, checkIn);

      if (nights <= 0) {
        toast.error('Check-out date must be after check-in date');
        setLoading(false);
        return;
      }

      if (!selectedRoom) {
        toast.error('Please select a room');
        setLoading(false);
        return;
      }

      // Insert booking into database
      const { data: newBooking, error } = await supabase.from('bookings').insert([
        {
          ...formData,
          total_amount: totalAmount,
          status: 'pending',
          payment_status: 'pending',
        },
      ]).select().single();

      if (error) throw error;

      // Send confirmation emails (customer + admin)
      try {
        console.log('Calling email API with booking:', newBooking);
        const emailResponse = await fetch('/api/send-booking-emails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...newBooking,
            room_name: selectedRoom.name,
          }),
        });

        console.log('Email API response status:', emailResponse.status);
        
        if (!emailResponse.ok) {
          const errorData = await emailResponse.json();
          console.error('Failed to send emails:', errorData);
        } else {
          console.log('Emails sent successfully!');
        }
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
      }

      // Initiate payment
      const [firstName, ...lastNameParts] = formData.guest_name.split(' ');
      const lastName = lastNameParts.join(' ') || firstName;

      console.log('Initiating payment for booking:', newBooking.id);

      const paymentResponse = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingId: newBooking.id,
          amount: totalAmount,
          email: formData.guest_email,
          firstName: firstName,
          lastName: lastName,
          phone: formData.guest_phone,
        }),
      });

      const paymentData = await paymentResponse.json();

      if (paymentData.success && paymentData.redirect_url) {
        // Redirect to Pesapal payment page
        console.log('Redirecting to payment page...');
        window.location.href = paymentData.redirect_url;
      } else {
        throw new Error('Failed to initiate payment');
      }

    } catch (error) {
      console.error('Error creating booking:', error);
      toast.error('Failed to submit booking. Please try again.');
      setLoading(false);
    }
  };

  const handleRoomChange = (roomId: string) => {
    const room = rooms.find(r => r.id === roomId);
    setSelectedRoom(room || null);
    setFormData(prev => ({ ...prev, room_id: roomId }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <section className="luxury-gradient text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        </div>
        <motion.div 
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-amber-300 mb-6"
          >
            <Sparkles size={18} />
            <span className="font-medium">Secure Your Stay</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Book Your <span className="gold-accent">Perfect Stay</span>
          </h1>
          <p className="text-xl text-gray-200">Reserve your room at Lubiri Resort today</p>
        </motion.div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <motion.div 
                className="bg-white rounded-3xl shadow-2xl p-10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Calendar className="text-amber-600" />
                  Booking Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Room Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Your Room *
                    </label>
                    <select
                      required
                      value={formData.room_id}
                      onChange={(e) => handleRoomChange(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-lg"
                    >
                      <option value="">Choose a room...</option>
                      {rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name} - KES {room.price_per_night.toLocaleString()}/night
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guest Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.guest_name}
                        onChange={(e) => setFormData({ ...formData, guest_name: e.target.value })}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.guest_email}
                        onChange={(e) => setFormData({ ...formData, guest_email: e.target.value })}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.guest_phone}
                      onChange={(e) => setFormData({ ...formData, guest_phone: e.target.value })}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Calendar size={18} className="text-amber-600" />
                        Check-in Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={today}
                        value={formData.check_in}
                        onChange={(e) => setFormData({ ...formData, check_in: e.target.value })}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Calendar size={18} className="text-amber-600" />
                        Check-out Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={formData.check_in || today}
                        value={formData.check_out}
                        onChange={(e) => setFormData({ ...formData, check_out: e.target.value })}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Users size={18} className="text-amber-600" />
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      max={selectedRoom?.capacity || 10}
                      value={formData.number_of_guests}
                      onChange={(e) => setFormData({ ...formData, number_of_guests: parseInt(e.target.value) })}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                    {selectedRoom && (
                      <p className="text-sm text-gray-500 mt-2">
                        Maximum capacity: {selectedRoom.capacity} guests
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Special Requests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.special_requests}
                      onChange={(e) => setFormData({ ...formData, special_requests: e.target.value })}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Any special requests or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !selectedRoom}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed text-lg"
                  >
                    {loading ? 'Processing Your Booking...' : 'Confirm Booking'}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <motion.div 
                className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl shadow-2xl p-8 sticky top-40"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="text-amber-400" />
                  Booking Summary
                </h3>
                
                {selectedRoom ? (
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-white/20">
                      <h4 className="font-bold text-xl mb-2">{selectedRoom.name}</h4>
                      <p className="text-sm text-gray-300">{selectedRoom.type}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Price per night:</span>
                        <span className="font-semibold text-amber-400">KES {selectedRoom.price_per_night.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Number of nights:</span>
                        <span className="font-semibold">{numberOfNights || '-'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Number of guests:</span>
                        <span className="font-semibold">{formData.number_of_guests}</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-bold">Total Amount:</span>
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                          KES {totalAmount.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">All taxes included</p>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl">
                      <div className="flex items-start gap-3">
                        <CreditCard className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <div className="text-sm">
                          <p className="font-semibold mb-2 text-amber-400">Payment Information</p>
                          <p className="text-gray-300 leading-relaxed">Secure payment via Pesapal - M-Pesa, Airtel Money, Visa, Mastercard, PayPal accepted.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check size={16} className="text-amber-400" />
                        <span>Free cancellation up to 24 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check size={16} className="text-amber-400" />
                        <span>No hidden fees</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check size={16} className="text-amber-400" />
                        <span>Instant confirmation</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-300">
                      Please select a room to see booking summary
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}