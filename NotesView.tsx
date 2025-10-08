import React, { useState } from 'react';
import { Plus, FileText, Image, Mic } from 'lucide-react';
import { Note } from '../types';

interface NotesViewProps {
  notes: Note[];
  onAddNote: (note: Omit<Note, 'id' | 'date'>) => void;
}

export default function NotesView({ notes, onAddNote }: NotesViewProps) {
  const [showForm, setShowForm] = useState(false);
  const [noteType, setNoteType] = useState<'text' | 'photo' | 'voice'>('text');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    onAddNote({
      subject: formData.get('subject') as string,
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      type: noteType
    });
    setShowForm(false);
    form.reset();
  };

  return (
    <div className="pb-20 px-4 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Notes Hub</h2>
        <button onClick={() => setShowForm(!showForm)} className="bg-indigo-600 text-white p-2 rounded-full">
          <Plus size={24} />
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <div className="flex gap-2 mb-3">
            <button type="button" onClick={() => setNoteType('text')} className={`flex-1 p-2 rounded-lg ${noteType === 'text' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>
              <FileText size={20} className="mx-auto" />
            </button>
            <button type="button" onClick={() => setNoteType('photo')} className={`flex-1 p-2 rounded-lg ${noteType === 'photo' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>
              <Image size={20} className="mx-auto" />
            </button>
            <button type="button" onClick={() => setNoteType('voice')} className={`flex-1 p-2 rounded-lg ${noteType === 'voice' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>
              <Mic size={20} className="mx-auto" />
            </button>
          </div>
          <input name="subject" placeholder="Subject" required className="w-full p-2 border rounded-lg mb-2" />
          <input name="title" placeholder="Title" required className="w-full p-2 border rounded-lg mb-2" />
          <textarea name="content" placeholder="Content" rows={4} required className="w-full p-2 border rounded-lg mb-2" />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold">Save Note</button>
        </form>
      )}

      <div className="space-y-3">
        {notes.map(note => (
          <div key={note.id} className="bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">{note.title}</h3>
              <span className="text-xs text-gray-500">{note.date}</span>
            </div>
            <p className="text-sm text-indigo-600 mb-2">{note.subject}</p>
            <p className="text-gray-700 text-sm">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
