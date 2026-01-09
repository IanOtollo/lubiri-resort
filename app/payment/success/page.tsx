'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('booking');

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-32 bg-gradient-to-br from-green-50 to-emerald-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center"
      >
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-xl text-gray-600 mb-2">
          Your booking has been confirmed.
        </p>
        <p className="text-gray-500 mb-8">
          Booking ID: <span className="font-mono font-bold">#{bookingId?.slice(0, 8).toUpperCase()}</span>
        </p>
        <p className="text-gray-600 mb-8">
          A confirmation email has been sent to your email address with all the details.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}