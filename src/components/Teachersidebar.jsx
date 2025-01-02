import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold text-center p-4">Teacher Panel</h1>
      <ul className="flex-1 space-y-4 px-4">
        <li className="hover:bg-blue-700 p-2 rounded">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="hover:bg-blue-700 p-2 rounded">
          <Link to="/students">Students</Link>
        </li>
        <li className="hover:bg-blue-700 p-2 rounded">
          <Link to="/tasks">Tasks</Link>
        </li>
        <li className="hover:bg-blue-700 p-2 rounded">
          <Link to="/submissions">Submissions</Link>
        </li>
        <li className="hover:bg-blue-700 p-2 rounded">
          <Link to="/notifications">Notifications</Link>
        </li>
        <li className="hover:bg-blue-700 p-2 rounded">
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
