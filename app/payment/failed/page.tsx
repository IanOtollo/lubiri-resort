'use client';

import Link from 'next/link';
import { XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PaymentFailed() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-32 bg-gradient-to-br from-red-50 to-rose-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center"
      >
        <XCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Failed</h1>
        <p className="text-xl text-gray-600 mb-8">
          Unfortunately, your payment could not be processed.
        </p>
        <p className="text-gray-600 mb-8">
          Please try again or contact us for assistance.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/booking"
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
          >
            Try Again
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}