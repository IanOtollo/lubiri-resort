/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Star, Phone, Mail, Wifi, Coffee, Car, Utensils } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-slate-900 to-slate-700"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Lubiri Resort
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Where Luxury Meets Comfort
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Experience exceptional hospitality in the heart of Busia, Kenya
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/booking">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all">
                  Book Your Stay
                </button>
              </Link>
              <Link href="/rooms">
                <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all">
                  View Rooms
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Welcome to Lubiri Resort
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nestled in the heart of Busia, Kenya, Lubiri Resort offers an unparalleled blend of luxury, 
              comfort, and authentic Kenyan hospitality. Our resort is designed to provide you with a serene 
              escape while keeping you connected to the vibrant culture of the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Comfort</h3>
              <p className="text-gray-600">
                Luxurious rooms and suites designed for your ultimate relaxation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
              <p className="text-gray-600">
                Exceptional cuisine prepared by expert chefs using fresh ingredients
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">
                Conveniently located in Busia with easy access to key attractions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Our Accommodations
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose from our selection of beautifully appointed rooms and suites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Room Card 1 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Deluxe Room</h3>
                <p className="text-gray-600 mb-4">
                  Spacious and elegantly furnished with modern amenities
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">KES 8,000</span>
                  <span className="text-gray-500">/night</span>
                </div>
              </div>
            </div>

            {/* Room Card 2 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Executive Suite</h3>
                <p className="text-gray-600 mb-4">
                  Premium suite with separate living area and luxury furnishings
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">KES 15,000</span>
                  <span className="text-gray-500">/night</span>
                </div>
              </div>
            </div>

            {/* Room Card 3 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Family Cottage</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for families with spacious rooms and garden views
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">KES 12,000</span>
                  <span className="text-gray-500">/night</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/rooms">
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold transition-all">
                View All Rooms
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Resort Amenities
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Everything you need for a comfortable and memorable stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 hover:border-amber-600 transition-colors">
              <Wifi className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Wi-Fi</h3>
              <p className="text-gray-600">High-speed internet throughout the resort</p>
            </div>

            <div className="text-center p-6 border border-gray-200 hover:border-amber-600 transition-colors">
              <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Restaurant & Bar</h3>
              <p className="text-gray-600">Exceptional dining and refreshments</p>
            </div>

            <div className="text-center p-6 border border-gray-200 hover:border-amber-600 transition-colors">
              <Car className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Parking</h3>
              <p className="text-gray-600">Secure parking for all guests</p>
            </div>

            <div className="text-center p-6 border border-gray-200 hover:border-amber-600 transition-colors">
              <Calendar className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Event Spaces</h3>
              <p className="text-gray-600">Conference and wedding facilities</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/amenities">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all">
                View All Amenities
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                Exceptional service and beautiful accommodations. The staff went above and beyond 
                to make our stay memorable. Highly recommended!
              </p>
              <p className="font-semibold">- Sarah Johnson</p>
              <p className="text-sm text-gray-400">Business Traveler</p>
            </div>

            <div className="bg-slate-800 p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                The perfect place for a relaxing getaway. The rooms were spotless, the food was 
                amazing, and the location is ideal. We will definitely be back!
              </p>
              <p className="font-semibold">- David Kimani</p>
              <p className="text-sm text-gray-400">Family Vacation</p>
            </div>

            <div className="bg-slate-800 p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                Outstanding resort with top-notch facilities. The conference room was perfect 
                for our corporate event. Professional and accommodating staff.
              </p>
              <p className="font-semibold">- Grace Achieng</p>
              <p className="text-sm text-gray-400">Corporate Event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-amber-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience Lubiri Resort?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your stay today and discover the perfect blend of luxury and comfort
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/booking">
              <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all">
                Book Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 text-lg font-semibold transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-5 h-5" />
                Location
              </h3>
              <p className="text-gray-300">
                Busia, Kenya<br />
                Western Province
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-5 h-5" />
                Contact
              </h3>
              <p className="text-gray-300">
                +254 733 510 377<br />
                +254 712 345 678
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-5 h-5" />
                Email
              </h3>
              <p className="text-gray-300">
                info@lubiriresort.co.ke<br />
                bookings@lubiriresort.co.ke
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}