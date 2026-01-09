'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Room } from '@/types';
import Link from 'next/link';
import { Users, Bed, Wifi, Coffee, Tv, Wind, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const { data, error } = await supabase
        .from('rooms')
        .select('*')
        .eq('is_available', true)
        .order('price_per_night');

      if (error) throw error;
      setRooms(data || []);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredRooms = filter === 'all' 
    ? rooms 
    : rooms.filter(room => room.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-32 px-4">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Rooms & Suites
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover our collection of beautifully appointed accommodations, 
              each designed to provide you with the ultimate comfort and luxury
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Rooms
            </button>
            <button
              onClick={() => setFilter('deluxe')}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === 'deluxe'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Deluxe Rooms
            </button>
            <button
              onClick={() => setFilter('suite')}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === 'suite'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Suites
            </button>
            <button
              onClick={() => setFilter('cottage')}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === 'cottage'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Cottages
            </button>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading rooms...</p>
            </div>
          ) : filteredRooms.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No rooms found in this category</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Room Image */}
                    <div className="h-80 md:h-96 bg-gradient-to-br from-slate-200 to-slate-300 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Bed className="w-20 h-20 text-slate-400" />
                      </div>
                    </div>

                    {/* Room Details */}
                    <div className="p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-3xl font-serif font-bold text-slate-900">
                            {room.name}
                          </h2>
                          <span className={`px-3 py-1 text-sm font-semibold ${
                            room.is_available 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {room.is_available ? 'Available' : 'Booked'}
                          </span>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {room.description}
                        </p>

                        {/* Room Features */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Users className="w-5 h-5 text-amber-600" />
                            <span>Up to {room.capacity} guests</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Bed className="w-5 h-5 text-amber-600" />
                            <span>{room.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Wifi className="w-5 h-5 text-amber-600" />
                            <span>Free Wi-Fi</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Tv className="w-5 h-5 text-amber-600" />
                            <span>Flat Screen TV</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Wind className="w-5 h-5 text-amber-600" />
                            <span>Air Conditioning</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Coffee className="w-5 h-5 text-amber-600" />
                            <span>Mini Bar</span>
                          </div>
                        </div>

                        {/* Amenities List */}
                        <div className="border-t border-gray-200 pt-6 mb-6">
                          <h3 className="font-semibold text-slate-900 mb-3">Included Amenities:</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Free Wi-Fi</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Air Conditioning</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Flat Screen TV</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Mini Bar</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Room Service</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Safe Deposit Box</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price and Booking */}
                      <div>
                        <div className="flex items-end justify-between mb-6 pb-6 border-t border-gray-200 pt-6">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Starting from</p>
                            <div className="flex items-baseline gap-2">
                              <span className="text-4xl font-bold text-amber-600">
                                KES {room.price_per_night.toLocaleString()}
                              </span>
                              <span className="text-gray-500">/night</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Link href={`/booking?room=${room.id}`} className="flex-1">
                            <button 
                              disabled={!room.is_available}
                              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 font-semibold text-lg transition-all"
                            >
                              {room.is_available ? 'Book Now' : 'Not Available'}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Why Choose Lubiri Resort?
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">
                Book directly with us for the best rates available
              </p>
            </div>

            <div className="bg-white p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Cancellation</h3>
              <p className="text-gray-600">
                Cancel up to 24 hours before check-in for a full refund
              </p>
            </div>

            <div className="bg-white p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our team is always available to assist you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our reservations team for personalized recommendations
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-semibold transition-all">
                Contact Us
              </button>
            </Link>
            <Link href="/booking">
              <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 font-semibold transition-all">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}