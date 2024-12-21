import React, { useState } from 'react';
import '../App.css';

const Alert = () => {
  const [recipient, setRecipient] = useState('teachers');  // Default to 'teachers'
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useState([]);

  // Function to handle form submission and add notification
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newNotification = {
      id: notifications.length + 1,
      recipient,
      message,
      status: 'Unread'
    };
    
    // Add the notification to the list
    setNotifications([...notifications, newNotification]);
    
    // Clear the message input
    setMessage('');
  };

  return (
    <div className='alert-container-parent'>
      <div className='alert-container-second-parent'>
      <br /> <br /> <br /> <br /> <br />
    <div className="alert-container">
      <h2 className='alert-heading'>Send Notification</h2>

      <form onSubmit={handleSubmit} className="notification-form">
        <div className="form-group">
          <label>Recipient:</label>
          <select 
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)} 
            className="recipient-select"
          >
            <option value="teachers">Teachers</option>
            <option value="students">Students</option>
            <option value="both">Both</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message..."
            className="message-input"
          />
        </div>

        <button type="submit" className="send-button">Send Notification</button>
      </form>

      <div className="notification-history">
        <h3>Notification History</h3>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className={notification.status === 'Unread' ? 'unread' : ''}>
              <strong>{notification.recipient}</strong>: {notification.message}
              <span className="status">{notification.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Alert;
