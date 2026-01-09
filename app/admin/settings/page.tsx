'use client';

import { Settings, AlertCircle } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-gray-100">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-6">
          <Settings className="w-10 h-10 text-purple-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Admin Settings
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          This feature is coming soon! You&apos;ll be able to configure system settings,
          user preferences, and more from here.
        </p>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 inline-block">
          <div className="flex items-center gap-3 text-left">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">Current Login Credentials</p>
              <p className="text-sm text-amber-700">
                Username: <code className="bg-white px-2 py-1 rounded">admin</code><br />
                Password: <code className="bg-white px-2 py-1 rounded">lubiri2026</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}