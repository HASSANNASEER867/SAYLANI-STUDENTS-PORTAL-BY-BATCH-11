import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Teacher Management System</h1>
      <div className="flex space-x-4">
        <span className="material-icons text-gray-700">notifications</span>
        <span className="material-icons text-gray-700">email</span>
      </div>
    </header>
  );
};

export default Header;
