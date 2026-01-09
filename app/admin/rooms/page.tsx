'use client';

import { Home, AlertCircle } from 'lucide-react';

export default function RoomsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-gray-100">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6">
          <Home className="w-10 h-10 text-blue-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Room Management
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          This feature is coming soon! You&apos;ll be able to manage room availability,
          pricing, and status from here.
        </p>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 inline-block">
          <div className="flex items-center gap-3 text-left">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">For now, use Supabase Dashboard</p>
              <p className="text-sm text-amber-700">
                You can manage rooms directly in the Supabase dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}