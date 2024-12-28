

import React, { useEffect, useState } from 'react';
import { BsJustify } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { handleLogout } from '../utils/firebase';

function HeaderHome({ OpenSidebar }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const onLogout = async () => {
    await handleLogout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left flex">
        <h2>SMIT MANAGEMENT SYSTEM</h2>
      </div>
      <div className="header-right flex gap-2">
        {!user ? (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Signup</Link>
          </>
        ) : (
          <button onClick={onLogout} className="logout-btn">Logout</button>
        )}
      </div>
    </header>
  );
}

export default HeaderHome;


