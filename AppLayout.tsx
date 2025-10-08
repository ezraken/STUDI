import React, { useState, useEffect } from 'react';
import BottomNav from './BottomNav';
import HomeView from './HomeView';
import TimetableModal from './TimetableModal';
import NotesView from './NotesView';
import StudyView from './StudyView';
import MindSpaceView from './MindSpaceView';
import ProfileView from './ProfileView';
import WelcomeScreen from './WelcomeScreen';
import SplashScreen from './SplashScreen';
import { initialClasses, initialNotes } from '../data/mockData';
import { Class, Note, StudySession, MoodEntry, User } from '../types';

export default function AppLayout() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showTimetable, setShowTimetable] = useState(false);
  const [user, setUser] = useState<User>({ name: '', school: '', year: '', points: 0, streak: 0 });
  const [classes, setClasses] = useState<Class[]>(initialClasses);
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [moods, setMoods] = useState<MoodEntry[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const stored = localStorage.getItem('studiUser');
      if (!stored) setShowWelcome(true);
      else setUser(JSON.parse(stored));
      setLoading(false);
    }, 1500);
  }, []);

  const handleWelcomeComplete = (name: string, school: string, year: string) => {
    const newUser = { name, school, year, points: 0, streak: 0 };
    setUser(newUser);
    localStorage.setItem('studiUser', JSON.stringify(newUser));
    setShowWelcome(false);
  };

  const handleAddClass = (classData: Omit<Class, 'id'>) => {
    setClasses([...classes, { ...classData, id: Date.now().toString() }]);
  };

  const handleToggleAbsent = (id: string) => {
    setClasses(classes.map(c => c.id === id ? { ...c, absent: !c.absent } : c));
  };

  const handleAddNote = (noteData: Omit<Note, 'id' | 'date'>) => {
    setNotes([{ ...noteData, id: Date.now().toString(), date: new Date().toLocaleDateString() }, ...notes]);
  };

  const handleCompleteSession = (subject: string, duration: number) => {
    setSessions([{
      id: Date.now().toString(),
      subject,
      duration,
      date: new Date().toLocaleDateString(),
      completed: true
    }, ...sessions]);
    const updatedUser = { ...user, points: user.points + 25 };
    setUser(updatedUser);
    localStorage.setItem('studiUser', JSON.stringify(updatedUser));
  };

  const handleAddMood = (mood: MoodEntry['mood'], note?: string) => {
    setMoods([{ date: new Date().toLocaleDateString(), mood, note }, ...moods]);
    const updatedUser = { ...user, points: user.points + 5 };
    setUser(updatedUser);
    localStorage.setItem('studiUser', JSON.stringify(updatedUser));
  };

  if (loading) return <SplashScreen />;
  if (showWelcome) return <WelcomeScreen onComplete={handleWelcomeComplete} />;

  return (
    <div className="min-h-screen bg-gray-50">
      {activeTab === 'home' && <HomeView user={user} classes={classes} onTabChange={setActiveTab} onShowTimetable={() => setShowTimetable(true)} />}
      {activeTab === 'notes' && <NotesView notes={notes} onAddNote={handleAddNote} />}
      {activeTab === 'study' && <StudyView sessions={sessions} onCompleteSession={handleCompleteSession} />}
      {activeTab === 'mind' && <MindSpaceView moods={moods} onAddMood={handleAddMood} />}
      {activeTab === 'profile' && <ProfileView user={user} />}
      <TimetableModal isOpen={showTimetable} onClose={() => setShowTimetable(false)} classes={classes} onAddClass={handleAddClass} onToggleAbsent={handleToggleAbsent} />
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
