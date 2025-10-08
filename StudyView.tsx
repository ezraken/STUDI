import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Plus } from 'lucide-react';
import { StudySession } from '../types';

interface StudyViewProps {
  sessions: StudySession[];
  onCompleteSession: (subject: string, duration: number) => void;
}

export default function StudyView({ sessions, onCompleteSession }: StudyViewProps) {
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [subject, setSubject] = useState('');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && subject) {
      onCompleteSession(subject, 25);
      setTimerActive(false);
      setTimeLeft(25 * 60);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, subject, onCompleteSession]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const completedToday = sessions.filter(s => s.date === new Date().toLocaleDateString()).length;

  return (
    <div className="pb-20 px-4 pt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Study Planner</h2>

      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white mb-6">
        <h3 className="text-lg font-semibold mb-4">Pomodoro Timer</h3>
        <div className="text-6xl font-bold text-center mb-6">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        
        {!timerActive && timeLeft === 25 * 60 && (
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What are you studying?"
            className="w-full p-3 rounded-lg text-gray-900 mb-4"
          />
        )}

        <div className="flex gap-3">
          <button
            onClick={() => setTimerActive(!timerActive)}
            disabled={!subject && !timerActive}
            className="flex-1 bg-white text-indigo-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {timerActive ? <><Pause size={20} /> Pause</> : <><Play size={20} /> Start</>}
          </button>
          <button
            onClick={() => { setTimerActive(false); setTimeLeft(25 * 60); }}
            className="bg-white bg-opacity-20 text-white p-3 rounded-lg"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Today's Progress</h3>
        <p className="text-3xl font-bold text-indigo-600">{completedToday} sessions</p>
        <p className="text-sm text-gray-600">Keep up the great work!</p>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Recent Sessions</h3>
        {sessions.slice(0, 10).map(session => (
          <div key={session.id} className="bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-gray-900">{session.subject}</h4>
                <p className="text-sm text-gray-600">{session.duration} minutes</p>
              </div>
              <span className="text-xs text-gray-500">{session.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
