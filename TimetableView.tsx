import React, { useState } from 'react';
import { Plus, Calendar } from 'lucide-react';
import { Class } from '../types';

interface TimetableViewProps {
  classes: Class[];
  onAddClass: (classData: Omit<Class, 'id'>) => void;
  onToggleAbsent: (id: string) => void;
}

export default function TimetableView({ classes, onAddClass, onToggleAbsent }: TimetableViewProps) {
  const [showForm, setShowForm] = useState(false);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    onAddClass({
      subject: formData.get('subject') as string,
      day: formData.get('day') as string,
      time: formData.get('time') as string,
      room: formData.get('room') as string,
      color: 'bg-indigo-500'
    });
    setShowForm(false);
    form.reset();
  };

  return (
    <div className="pb-20 px-4 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Timetable</h2>
        <button onClick={() => setShowForm(!showForm)} className="bg-indigo-600 text-white p-2 rounded-full">
          <Plus size={24} />
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <input name="subject" placeholder="Subject" required className="w-full p-2 border rounded-lg mb-2" />
          <select name="day" required className="w-full p-2 border rounded-lg mb-2">
            {days.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <input name="time" type="time" required className="w-full p-2 border rounded-lg mb-2" />
          <input name="room" placeholder="Room" required className="w-full p-2 border rounded-lg mb-2" />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold">Add Class</button>
        </form>
      )}

      <div className="space-y-4">
        {days.map(day => {
          const dayClasses = classes.filter(c => c.day === day);
          return (
            <div key={day} className="bg-white rounded-xl p-4 shadow">
              <h3 className="font-bold text-gray-900 mb-3">{day}</h3>
              {dayClasses.length === 0 ? (
                <p className="text-gray-400 text-sm">No classes</p>
              ) : (
                <div className="space-y-2">
                  {dayClasses.map(cls => (
                    <div key={cls.id} onClick={() => onToggleAbsent(cls.id)} className={`${cls.color} bg-opacity-10 p-3 rounded-lg cursor-pointer ${cls.absent ? 'opacity-50' : ''}`}>
                      <h4 className="font-semibold text-gray-900">{cls.subject}</h4>
                      <p className="text-sm text-gray-600">{cls.time} • {cls.room}</p>
                      {cls.absent && <span className="text-xs text-red-600">Absent</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
