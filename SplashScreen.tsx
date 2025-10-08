import React from 'react';
import { BookOpen } from 'lucide-react';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center z-50">
      <div className="text-center animate-fade-in">
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <BookOpen className="text-indigo-600" size={48} />
        </div>
        <h1 className="text-5xl font-bold text-white mb-2">STUDI</h1>
        <p className="text-white text-lg opacity-90">Your Student Companion</p>
        <div className="mt-8">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
