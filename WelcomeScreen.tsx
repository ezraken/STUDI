import React, { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: (name: string, school: string, year: string) => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0 && name) setStep(1);
    else if (step === 1 && school) setStep(2);
    else if (step === 2 && year) onComplete(name, school, year);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-white" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to STUDI</h1>
          <p className="text-gray-600">Your all-in-one student companion</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 0 && (
            <div className="animate-fade-in">
              <label className="block text-sm font-medium text-gray-700 mb-2">What's your name?</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                autoFocus
              />
            </div>
          )}

          {step === 1 && (
            <div className="animate-fade-in">
              <label className="block text-sm font-medium text-gray-700 mb-2">Which school do you attend?</label>
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                placeholder="Enter your school name"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                autoFocus
              />
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <label className="block text-sm font-medium text-gray-700 mb-2">What year are you in?</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                autoFocus
              >
                <option value="">Select year</option>
                <option value="Year 1">Year 1</option>
                <option value="Year 2">Year 2</option>
                <option value="Year 3">Year 3</option>
                <option value="Year 4">Year 4</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
          >
            {step === 2 ? 'Get Started' : 'Continue'}
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="flex gap-2 justify-center mt-6">
          {[0, 1, 2].map(i => (
            <div key={i} className={`h-2 w-2 rounded-full ${i === step ? 'bg-indigo-600' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
