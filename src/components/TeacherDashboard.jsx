import React from 'react';

const Dashboard = () => {
  // Sample data for dashboard metrics
  const metrics = [
    { id: 1, title: 'Total Students', value: 30, color: 'bg-blue-500' },
    { id: 2, title: 'Tasks Assigned', value: 15, color: 'bg-green-500' },
    { id: 3, title: 'Pending Submissions', value: 8, color: 'bg-red-500' },
    { id: 4, title: 'Average Grade', value: 'B+', color: 'bg-yellow-500' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className={`${metric.color} text-white p-6 rounded-lg shadow-md`}
          >
            <h3 className="text-lg font-semibold">{metric.title}</h3>
            <p className="text-3xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
