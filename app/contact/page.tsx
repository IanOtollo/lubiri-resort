'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      toast.success('Message sent successfully! We will get back to you soon.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with us for reservations, inquiries, or any assistance you may need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">
                      Busia, Kenya<br />
                      Western Province
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+254733510377" className="hover:text-amber-600 transition-colors">
                        +254 733 510 377
                      </a>
                      <br />
                      <a href="tel:+254712345678" className="hover:text-amber-600 transition-colors">
                        +254 712 345 678
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@lubiriresort.co.ke" className="hover:text-amber-600 transition-colors">
                        info@lubiriresort.co.ke
                      </a>
                      <br />
                      <a href="mailto:bookings@lubiriresort.co.ke" className="hover:text-amber-600 transition-colors">
                        bookings@lubiriresort.co.ke
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Reception Hours</h3>
                    <p className="text-gray-600">
                      Monday - Sunday<br />
                      24/7 Service
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center border border-gray-200">
                <MapPin className="w-16 h-16 text-slate-400" />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all"
                    placeholder="Reservation Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white py-4 font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Quick Links
            </h2>
            <p className="text-gray-600">
              Looking for something specific? Check out these helpful links
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/booking" className="bg-white border border-gray-200 p-6 text-center hover:border-amber-600 transition-colors group">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                Make a Reservation
              </h3>
              <p className="text-gray-600 text-sm">
                Book your stay online quickly and easily
              </p>
            </a>

            <a href="/rooms" className="bg-white border border-gray-200 p-6 text-center hover:border-amber-600 transition-colors group">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                View Our Rooms
              </h3>
              <p className="text-gray-600 text-sm">
                Explore our accommodations and amenities
              </p>
            </a>

            <a href="/amenities" className="bg-white border border-gray-200 p-6 text-center hover:border-amber-600 transition-colors group">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                Resort Facilities
              </h3>
              <p className="text-gray-600 text-sm">
                Discover all we have to offer
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}