import React from 'react';
import { Calendar, Clock, TrendingUp, Award } from 'lucide-react';
import { User, Class } from '../types';

interface HomeViewProps {
  user: User;
  classes: Class[];
  onTabChange: (tab: string) => void;
  onShowTimetable: () => void;
}

export default function HomeView({ user, classes, onTabChange, onShowTimetable }: HomeViewProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todayClasses = classes.filter(c => c.day === today);
  const nextClass = todayClasses[0];

  return (
    <div className="pb-20 px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Hello, {user.name}! 👋</h1>
        <p className="text-gray-600 mt-1">Let's make today productive</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl text-white">
          <Award className="mb-2" size={28} />
          <p className="text-2xl font-bold">{user.points}</p>
          <p className="text-sm opacity-90">Focus Points</p>
        </div>
        <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-4 rounded-2xl text-white">
          <TrendingUp className="mb-2" size={28} />
          <p className="text-2xl font-bold">{user.streak} days</p>
          <p className="text-sm opacity-90">Study Streak</p>
        </div>
      </div>

      {nextClass && (
        <div className="bg-white rounded-2xl p-5 shadow-lg mb-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="text-indigo-600" size={20} />
            <h3 className="font-semibold text-gray-900">Next Class</h3>
          </div>
          <div className={`${nextClass.color} bg-opacity-10 rounded-xl p-4`}>
            <h4 className="font-bold text-lg text-gray-900">{nextClass.subject}</h4>
            <p className="text-gray-600 text-sm mt-1">{nextClass.time} • {nextClass.room}</p>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <button onClick={onShowTimetable} className="w-full bg-purple-50 hover:bg-purple-100 p-4 rounded-xl text-left transition-colors">
          <h4 className="font-semibold text-gray-900">📅 View Full Timetable</h4>
          <p className="text-sm text-gray-600 mt-1">See all your classes this week</p>
        </button>
        <button onClick={() => onTabChange('notes')} className="w-full bg-blue-50 hover:bg-blue-100 p-4 rounded-xl text-left transition-colors">
          <h4 className="font-semibold text-gray-900">📝 Quick Notes</h4>
          <p className="text-sm text-gray-600 mt-1">Capture ideas instantly</p>
        </button>
        <button onClick={() => onTabChange('study')} className="w-full bg-green-50 hover:bg-green-100 p-4 rounded-xl text-left transition-colors">
          <h4 className="font-semibold text-gray-900">⏱️ Start Study Session</h4>
          <p className="text-sm text-gray-600 mt-1">Focus with Pomodoro timer</p>
        </button>
      </div>
    </div>
  );
}
