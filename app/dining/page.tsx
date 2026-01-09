'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, MapPin, Phone, Utensils, Wine, Coffee, ChefHat } from 'lucide-react';

export default function DiningPage() {
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
              Dining at Lubiri Resort
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Savor exceptional cuisine crafted from the finest local and international ingredients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Introduction */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                Our Restaurant
              </h2>
              <div className="w-24 h-1 bg-amber-600 mb-6"></div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Experience culinary excellence at Lubiri Resort&apos;s signature restaurant. Our talented chefs 
                prepare a diverse menu featuring authentic Kenyan dishes alongside international favorites, 
                all made with fresh, locally-sourced ingredients.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you&apos;re enjoying a leisurely breakfast, business lunch, or romantic dinner, our elegant 
                dining room provides the perfect atmosphere for any occasion.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-semibold">Breakfast: 6:30 AM - 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-semibold">Lunch: 12:00 PM - 3:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-semibold">Dinner: 6:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <Utensils className="w-24 h-24 text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Menu Highlights
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A selection of our most popular dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kenyan Cuisine */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <ChefHat className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-serif font-bold">Kenyan Specialties</h3>
              </div>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Nyama Choma</h4>
                    <span className="text-amber-600 font-bold">KES 1,800</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Traditional grilled meat served with ugali and sukuma wiki
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Tilapia Fish</h4>
                    <span className="text-amber-600 font-bold">KES 1,500</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Fresh tilapia from Lake Victoria, grilled to perfection
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Pilau</h4>
                    <span className="text-amber-600 font-bold">KES 1,200</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Aromatic spiced rice with tender beef or chicken
                  </p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Matoke</h4>
                    <span className="text-amber-600 font-bold">KES 900</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Traditional cooked plantains in rich coconut sauce
                  </p>
                </div>
              </div>
            </div>

            {/* International Cuisine */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Utensils className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-serif font-bold">International Favorites</h3>
              </div>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Grilled Steak</h4>
                    <span className="text-amber-600 font-bold">KES 2,500</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Prime beef with roasted vegetables and mashed potatoes
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Chicken Alfredo</h4>
                    <span className="text-amber-600 font-bold">KES 1,600</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Creamy pasta with grilled chicken and parmesan
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Caesar Salad</h4>
                    <span className="text-amber-600 font-bold">KES 1,000</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Fresh romaine lettuce with house-made dressing and croutons
                  </p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Seafood Platter</h4>
                    <span className="text-amber-600 font-bold">KES 2,800</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Assorted fresh seafood with lemon butter sauce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bar & Lounge */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 h-96 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <Wine className="w-24 h-24 text-slate-400" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                Bar & Lounge
              </h2>
              <div className="w-24 h-1 bg-amber-600 mb-6"></div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Unwind in our sophisticated bar and lounge area. Enjoy a wide selection of premium spirits, 
                wines, and cocktails while watching live sports on our large-screen TVs or catching up with friends.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our skilled bartenders can craft your favorite drink or recommend something new from our 
                extensive beverage menu.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Wine className="w-5 h-5 text-amber-600" />
                  <p className="font-semibold">Premium Wines & Spirits</p>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Coffee className="w-5 h-5 text-amber-600" />
                  <p className="font-semibold">Specialty Cocktails & Mocktails</p>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <p className="font-semibold">Open Daily: 11:00 AM - Midnight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Private Dining & Events
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Host your special occasions in style with our private dining services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Business Dinners</h3>
              <p className="text-gray-600 mb-4">
                Impress your clients with an elegant private dining experience
              </p>
              <p className="text-amber-600 font-bold">From 10 guests</p>
            </div>

            <div className="bg-white p-8 text-center border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Celebrations</h3>
              <p className="text-gray-600 mb-4">
                Make your birthdays, anniversaries, and special moments memorable
              </p>
              <p className="text-amber-600 font-bold">From 15 guests</p>
            </div>

            <div className="bg-white p-8 text-center border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Wedding Receptions</h3>
              <p className="text-gray-600 mb-4">
                Celebrate your big day with customized menus and service
              </p>
              <p className="text-amber-600 font-bold">From 50 guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Dine With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Reserve your table or inquire about private dining options
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-semibold transition-all">
                Make a Reservation
              </button>
            </Link>
            <a href="tel:+254733510377">
              <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 font-semibold transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}