import { Class, Note, User } from '../types';

export const initialUser: User = {
  name: 'Alex',
  school: 'Central University',
  year: 'Year 2',
  points: 245,
  streak: 7
};

export const initialClasses: Class[] = [
  { id: '1', subject: 'Mathematics', day: 'Monday', time: '09:00', room: 'A101', color: 'bg-blue-500' },
  { id: '2', subject: 'Physics', day: 'Monday', time: '11:00', room: 'B205', color: 'bg-purple-500' },
  { id: '3', subject: 'Chemistry', day: 'Tuesday', time: '10:00', room: 'C301', color: 'bg-green-500' },
  { id: '4', subject: 'English', day: 'Tuesday', time: '14:00', room: 'D102', color: 'bg-pink-500' },
  { id: '5', subject: 'History', day: 'Wednesday', time: '09:00', room: 'E201', color: 'bg-yellow-500' },
  { id: '6', subject: 'Biology', day: 'Wednesday', time: '13:00', room: 'F105', color: 'bg-teal-500' },
  { id: '7', subject: 'Computer Science', day: 'Thursday', time: '10:00', room: 'G303', color: 'bg-indigo-500' },
  { id: '8', subject: 'Art', day: 'Thursday', time: '15:00', room: 'H101', color: 'bg-orange-500' },
  { id: '9', subject: 'Geography', day: 'Friday', time: '09:00', room: 'I202', color: 'bg-cyan-500' },
  { id: '10', subject: 'Spanish', day: 'Friday', time: '11:00', room: 'J104', color: 'bg-red-500' }
];

export const initialNotes: Note[] = [
  { id: '1', subject: 'Mathematics', title: 'Calculus Fundamentals', content: 'Derivatives represent rate of change. Key formulas: d/dx(x^n) = nx^(n-1)', type: 'text', date: '2025-10-07' },
  { id: '2', subject: 'Physics', title: 'Newton\'s Laws', content: 'F=ma. Every action has equal and opposite reaction. Objects in motion stay in motion.', type: 'text', date: '2025-10-07' },
  { id: '3', subject: 'Chemistry', title: 'Periodic Table Trends', content: 'Electronegativity increases left to right, decreases top to bottom. Atomic radius opposite.', type: 'text', date: '2025-10-06' },
  { id: '4', subject: 'English', title: 'Shakespeare Analysis', content: 'Themes in Macbeth: ambition, guilt, fate vs free will. Lady Macbeth\'s character arc.', type: 'text', date: '2025-10-06' },
  { id: '5', subject: 'History', title: 'Industrial Revolution', content: 'Key inventions: steam engine, spinning jenny. Social impact: urbanization, labor movements.', type: 'text', date: '2025-10-05' },
  { id: '6', subject: 'Biology', title: 'Cell Structure', content: 'Mitochondria = powerhouse. Nucleus contains DNA. Ribosomes synthesize proteins.', type: 'text', date: '2025-10-05' },
  { id: '7', subject: 'Computer Science', title: 'Data Structures', content: 'Arrays: O(1) access. Linked lists: O(1) insertion. Trees: O(log n) search.', type: 'text', date: '2025-10-04' },
  { id: '8', subject: 'Geography', title: 'Climate Zones', content: 'Tropical, temperate, polar. Factors: latitude, altitude, ocean currents, wind patterns.', type: 'text', date: '2025-10-04' }
];

export const quotes = [
  "Success is the sum of small efforts repeated daily.",
  "You're capable of amazing things!",
  "Every expert was once a beginner.",
  "Study smart, not just hard.",
  "Your future self will thank you.",
  "Progress, not perfection.",
  "Believe in yourself and all that you are.",
  "The secret of getting ahead is getting started.",
  "Education is the passport to the future.",
  "Dream big, work hard, stay focused."
];
