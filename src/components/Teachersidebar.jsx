import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold text-center p-4">Teacher Panel</h1>
      <ul className="flex-1 space-y-4 px-4">
        <li className="hover:bg-blue-700 p-2 rounded">Dashboard</li>
        <li className="hover:bg-blue-700 p-2 rounded">Students</li>
        <li className="hover:bg-blue-700 p-2 rounded">Classes</li>
        <li className="hover:bg-blue-700 p-2 rounded">Subjects</li>
        <li className="hover:bg-blue-700 p-2 rounded">Assignments</li>
        <li className="hover:bg-blue-700 p-2 rounded">Reports</li>
        <li className="hover:bg-blue-700 p-2 rounded">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
