import React, { useState } from 'react';
import { Smile, Meh, Frown, Music, Wind } from 'lucide-react';
import { MoodEntry } from '../types';
import { quotes } from '../data/mockData';

interface MindSpaceViewProps {
  moods: MoodEntry[];
  onAddMood: (mood: MoodEntry['mood'], note?: string) => void;
}

export default function MindSpaceView({ moods, onAddMood }: MindSpaceViewProps) {
  const [selectedMood, setSelectedMood] = useState<MoodEntry['mood'] | null>(null);
  const [playingSound, setPlayingSound] = useState<string | null>(null);
  const todayQuote = quotes[new Date().getDate() % quotes.length];

  const handleMoodSelect = (mood: MoodEntry['mood']) => {
    setSelectedMood(mood);
    onAddMood(mood);
  };

  const sounds = [
    { id: 'rain', name: 'Rain', icon: '🌧️' },
    { id: 'ocean', name: 'Ocean', icon: '🌊' },
    { id: 'forest', name: 'Forest', icon: '🌲' },
    { id: 'cafe', name: 'Café', icon: '☕' }
  ];

  return (
    <div className="pb-20 px-4 pt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">MindSpace</h2>

      <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl p-6 text-white mb-6">
        <h3 className="text-lg font-semibold mb-2">Daily Inspiration</h3>
        <p className="text-lg italic">"{todayQuote}"</p>
      </div>

      <div className="bg-white rounded-xl p-5 shadow mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">How are you feeling today?</h3>
        <div className="flex justify-around">
          {[
            { mood: 'great' as const, icon: '😊', color: 'text-green-500' },
            { mood: 'good' as const, icon: '🙂', color: 'text-blue-500' },
            { mood: 'okay' as const, icon: '😐', color: 'text-yellow-500' },
            { mood: 'bad' as const, icon: '😕', color: 'text-orange-500' },
            { mood: 'terrible' as const, icon: '😢', color: 'text-red-500' }
          ].map(({ mood, icon, color }) => (
            <button
              key={mood}
              onClick={() => handleMoodSelect(mood)}
              className={`text-4xl transition-transform hover:scale-110 ${selectedMood === mood ? 'scale-125' : ''}`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Calm Sounds</h3>
        <div className="grid grid-cols-2 gap-3">
          {sounds.map(sound => (
            <button
              key={sound.id}
              onClick={() => setPlayingSound(playingSound === sound.id ? null : sound.id)}
              className={`p-4 rounded-xl transition-colors ${
                playingSound === sound.id ? 'bg-indigo-100 border-2 border-indigo-500' : 'bg-gray-50'
              }`}
            >
              <div className="text-3xl mb-2">{sound.icon}</div>
              <p className="text-sm font-medium text-gray-900">{sound.name}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow">
        <h3 className="font-semibold text-gray-900 mb-3">Breathing Exercise</h3>
        <p className="text-gray-600 text-sm mb-4">Try the 4-7-8 technique: Breathe in for 4, hold for 7, exhale for 8</p>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold">Start Exercise</button>
      </div>
    </div>
  );
}
