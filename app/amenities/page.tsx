'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Wifi, 
  Car, 
  Coffee, 
  Dumbbell, 
  Waves, 
  Wind, 
  Tv, 
  Utensils,
  Shield,
  Users,
  Calendar,
  Sparkles,
  Lock,
  Phone
} from 'lucide-react';

export default function AmenitiesPage() {
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
              Resort Amenities
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Everything you need for an exceptional stay at Lubiri Resort
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Amenities Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              World-Class Facilities
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Designed to make your stay comfortable, productive, and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amenity Card 1 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Wifi className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High-Speed Wi-Fi</h3>
              <p className="text-gray-600">
                Complimentary high-speed internet access throughout the resort, perfect for business and leisure
              </p>
            </div>

            {/* Amenity Card 2 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Car className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Parking</h3>
              <p className="text-gray-600">
                Secure, spacious parking facilities available for all guests at no additional charge
              </p>
            </div>

            {/* Amenity Card 3 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Utensils className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Restaurant & Bar</h3>
              <p className="text-gray-600">
                On-site dining featuring local and international cuisine, plus a fully stocked bar
              </p>
            </div>

            {/* Amenity Card 4 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Waves className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Swimming Pool</h3>
              <p className="text-gray-600">
                Outdoor swimming pool with lounging area, perfect for relaxation and recreation
              </p>
            </div>

            {/* Amenity Card 5 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Wind className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Air Conditioning</h3>
              <p className="text-gray-600">
                Climate-controlled rooms ensuring your comfort regardless of weather conditions
              </p>
            </div>

            {/* Amenity Card 6 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Tv className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Satellite TV</h3>
              <p className="text-gray-600">
                DSTV channels in all rooms and common areas for your entertainment
              </p>
            </div>

            {/* Amenity Card 7 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Security</h3>
              <p className="text-gray-600">
                Round-the-clock security personnel and CCTV surveillance for your safety
              </p>
            </div>

            {/* Amenity Card 8 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Coffee className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Room Service</h3>
              <p className="text-gray-600">
                24-hour room service delivering meals and refreshments to your door
              </p>
            </div>

            {/* Amenity Card 9 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Dumbbell className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fitness Center</h3>
              <p className="text-gray-600">
                Well-equipped gym with modern exercise equipment for your fitness needs
              </p>
            </div>

            {/* Amenity Card 10 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">In-Room Safe</h3>
              <p className="text-gray-600">
                Secure storage for your valuables in every room for peace of mind
              </p>
            </div>

            {/* Amenity Card 11 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Laundry Service</h3>
              <p className="text-gray-600">
                Professional laundry and dry cleaning services available for guests
              </p>
            </div>

            {/* Amenity Card 12 */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Garden Area</h3>
              <p className="text-gray-600">
                Beautiful landscaped gardens providing a serene environment for relaxation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference & Events */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Conference & Event Facilities
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Professional spaces designed for your business meetings and special events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 p-8">
              <Calendar className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-4">Conference Hall</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Capacity: Up to 150 people</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Modern audio-visual equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>High-speed Wi-Fi connectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Projector and screen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Flexible seating arrangements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Catering services available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <Users className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-4">Event Spaces</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Indoor and outdoor venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Perfect for weddings and receptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Corporate events and seminars</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Birthday parties and celebrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Customizable event packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Dedicated event coordinator</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Additional Services
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50">
              <Phone className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Concierge Service</h3>
              <p className="text-sm text-gray-600">Expert local recommendations</p>
            </div>

            <div className="text-center p-6 bg-gray-50">
              <Car className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Airport Transfer</h3>
              <p className="text-sm text-gray-600">Convenient transportation</p>
            </div>

            <div className="text-center p-6 bg-gray-50">
              <Coffee className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Breakfast Included</h3>
              <p className="text-sm text-gray-600">Complimentary daily breakfast</p>
            </div>

            <div className="text-center p-6 bg-gray-50">
              <Shield className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Travel Assistance</h3>
              <p className="text-sm text-gray-600">Tour bookings and planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Experience Our Amenities
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your stay today and enjoy all that Lubiri Resort has to offer
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/booking">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-semibold transition-all">
                Book Your Stay
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 font-semibold transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}