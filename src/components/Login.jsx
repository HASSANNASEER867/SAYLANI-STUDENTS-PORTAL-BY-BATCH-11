// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { handleGoogleLogin } from '../utils/firebase';

const Login = ({ user }) => {
  const navigate = useNavigate();

  const onGoogleLogin = () => {
    handleGoogleLogin(navigate);
  };

  return (
    <div className='login-main-parent'>
        <br /><br /><br /><br /><br /><br /><br /><br />
    <div className="login-parent rounded-lg max-w-sm w-full p-6">
   
   <h1 className="text-2xl font-bold text-white text-center mb-4">Login</h1>
      <button
        onClick={onGoogleLogin}
        disabled={!!user}
        className={`flex items-center justify-center w-full py-2 px-4 ${
          user
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gray-100 text-black hover:bg-gray-200'
        } rounded-lg transition`}
      >
        <FcGoogle size={24} className="mr-2" />
        {user ? 'Already Logged In' : 'Login with Google'}
      </button>
      <p className="text-center mt-4 text-white">
        Don't have an account?{' '}
        <span
          className={`${
            user
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 cursor-pointer hover:underline'
          }`}
          onClick={() => !user && navigate('/signup')}
        >
          Sign Up
        </span>
      </p>
    </div>
    </div>
  );
};

export default Login;


