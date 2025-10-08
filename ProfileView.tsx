import React from 'react';
import { Award, TrendingUp, Calendar, Settings, LogOut } from 'lucide-react';
import { User } from '../types';

interface ProfileViewProps {
  user: User;
}

export default function ProfileView({ user }: ProfileViewProps) {
  const achievements = [
    { id: 1, name: 'First Week', icon: '🎯', unlocked: true },
    { id: 2, name: 'Study Master', icon: '📚', unlocked: true },
    { id: 3, name: 'Perfect Attendance', icon: '✨', unlocked: false },
    { id: 4, name: 'Note Taker', icon: '📝', unlocked: true },
    { id: 5, name: 'Mindful Student', icon: '🧘', unlocked: true },
    { id: 6, name: '30 Day Streak', icon: '🔥', unlocked: false }
  ];

  return (
    <div className="pb-20 px-4 pt-6">
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
          {user.name[0]}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
        <p className="text-gray-600">{user.school}</p>
        <p className="text-sm text-gray-500">{user.year}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <Award className="text-indigo-600 mx-auto mb-2" size={32} />
          <p className="text-2xl font-bold text-gray-900">{user.points}</p>
          <p className="text-sm text-gray-600">Focus Points</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <TrendingUp className="text-orange-500 mx-auto mb-2" size={32} />
          <p className="text-2xl font-bold text-gray-900">{user.streak}</p>
          <p className="text-sm text-gray-600">Day Streak</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map(achievement => (
            <div
              key={achievement.id}
              className={`p-3 rounded-xl text-center ${
                achievement.unlocked ? 'bg-indigo-50' : 'bg-gray-50 opacity-50'
              }`}
            >
              <div className="text-3xl mb-1">{achievement.icon}</div>
              <p className="text-xs font-medium text-gray-900">{achievement.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-white p-4 rounded-xl shadow flex items-center gap-3 hover:bg-gray-50 transition-colors">
          <Settings className="text-gray-600" size={24} />
          <span className="font-medium text-gray-900">Settings</span>
        </button>
        <button className="w-full bg-white p-4 rounded-xl shadow flex items-center gap-3 hover:bg-gray-50 transition-colors">
          <Calendar className="text-gray-600" size={24} />
          <span className="font-medium text-gray-900">Export Data</span>
        </button>
        <button className="w-full bg-red-50 p-4 rounded-xl shadow flex items-center gap-3 hover:bg-red-100 transition-colors">
          <LogOut className="text-red-600" size={24} />
          <span className="font-medium text-red-600">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
