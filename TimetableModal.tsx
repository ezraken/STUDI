import React from 'react';
import { X } from 'lucide-react';
import TimetableView from './TimetableView';
import { Class } from '../types';

interface TimetableModalProps {
  isOpen: boolean;
  onClose: () => void;
  classes: Class[];
  onAddClass: (classData: Omit<Class, 'id'>) => void;
  onToggleAbsent: (id: string) => void;
}

export default function TimetableModal({ isOpen, onClose, classes, onAddClass, onToggleAbsent }: TimetableModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
      <div className="bg-gray-50 w-full h-[90vh] rounded-t-3xl overflow-hidden animate-slide-up">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">My Timetable</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto h-full">
          <TimetableView classes={classes} onAddClass={onAddClass} onToggleAbsent={onToggleAbsent} />
        </div>
      </div>
    </div>
  );
}
