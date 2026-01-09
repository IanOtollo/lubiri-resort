'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, title: 'Resort Exterior', category: 'exterior' },
    { id: 2, title: 'Deluxe Room', category: 'rooms' },
    { id: 3, title: 'Swimming Pool', category: 'amenities' },
    { id: 4, title: 'Restaurant Interior', category: 'dining' },
    { id: 5, title: 'Executive Suite', category: 'rooms' },
    { id: 6, title: 'Conference Hall', category: 'events' },
    { id: 7, title: 'Garden View', category: 'exterior' },
    { id: 8, title: 'Bar & Lounge', category: 'dining' },
    { id: 9, title: 'Reception Area', category: 'exterior' },
    { id: 10, title: 'Family Cottage', category: 'rooms' },
    { id: 11, title: 'Event Space', category: 'events' },
    { id: 12, title: 'Dining Area', category: 'dining' },
  ];

  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

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
              Gallery
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore the beauty and elegance of Lubiri Resort through our photo gallery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
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
              All Photos
            </button>
            <button
              onClick={() => setFilter('rooms')}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === 'rooms'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Rooms & Suites
            </button>
            <button
              onClick={() => setFilter('dining')}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === 'dining'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Dining
            </button>
            <button
              onClick={() => setFilter('amenities')}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === 'amenities'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Amenities
            </button>
            <button
              onClick={() => setFilter('events')}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === 'events'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setFilter('exterior')}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === 'exterior'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Exterior
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative h-64 bg-gradient-to-br from-slate-200 to-slate-300 cursor-pointer overflow-hidden group"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold text-lg">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-600 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full h-96 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <p className="text-white text-xl">
              {galleryImages.find(img => img.id === selectedImage)?.title}
            </p>
          </div>
        </div>
      )}

      {/* Virtual Tour CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Want to See More?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Schedule a visit or contact us for a virtual tour of our facilities
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-semibold transition-all">
                Contact Us
              </button>
            </a>
            <a href="/booking">
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 font-semibold transition-all">
                Book a Stay
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}