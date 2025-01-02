// Notifications.jsx
import React, { useState } from 'react';

const Notification = () => {
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useState([]);

  const sendNotification = () => {
    if (message.trim()) {
      const newNotification = {
        id: notifications.length + 1,
        message,
        timestamp: new Date().toLocaleString(),
      };
      setNotifications([newNotification, ...notifications]);
      setMessage('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Send Notifications</h2>
      <div className="mb-4">
        <textarea
          rows="4"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border rounded w-full mb-2"
        />
        <button
          onClick={sendNotification}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send Notification
        </button>
      </div>
      <h3 className="text-xl font-semibold mt-6">Recent Notifications</h3>
      <ul className="mt-4 space-y-2">
        {notifications.map((notification) => (
          <li key={notification.id} className="bg-gray-100 p-4 rounded shadow">
            <p className="text-gray-800">{notification.message}</p>
            <span className="text-gray-500 text-sm">{notification.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
