export interface Class {
  id: string;
  subject: string;
  day: string;
  time: string;
  room: string;
  color: string;
  absent?: boolean;
}

export interface Note {
  id: string;
  subject: string;
  title: string;
  content: string;
  type: 'text' | 'photo' | 'voice';
  date: string;
  imageUrl?: string;
}

export interface StudySession {
  id: string;
  subject: string;
  duration: number;
  date: string;
  completed: boolean;
}

export interface MoodEntry {
  date: string;
  mood: 'great' | 'good' | 'okay' | 'bad' | 'terrible';
  note?: string;
}

export interface User {
  name: string;
  school: string;
  year: string;
  points: number;
  streak: number;
}
