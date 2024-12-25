// Dashboard.jsx
import React from 'react';
import Card from './Card';
import ChartPlaceholder from './ChartPlaceholder';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="STUDENTS" value="300" color="bg-blue-500" icon="people" />
        <Card title="CLASSES" value="15" color="bg-orange-500" icon="class" />
        <Card title="SUBJECTS" value="10" color="bg-green-500" icon="book" />
        <Card title="ALERTS" value="5" color="bg-red-500" icon="notifications" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartPlaceholder title="Attendance Overview" />
        <ChartPlaceholder title="Performance Trends" />
      </div>
    </div>
  );
};

export default Dashboard;