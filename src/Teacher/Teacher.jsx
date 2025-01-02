import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Tasks from './components/Tasks';
import Submissions from './components/Submissions';
import Notifications from './components/Notifications';
import Reports from './components/Reports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Teacher() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Teacher;
