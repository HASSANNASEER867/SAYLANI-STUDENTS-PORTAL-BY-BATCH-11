
// SignUp.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { handleGoogleSignUp } from '../utils/firebase';

const SignUp = ({ user }) => {
  const navigate = useNavigate();

  const onGoogleSignUp = () => {
    handleGoogleSignUp(navigate);
  };

  return (
    <div className='signup-main-parent'>
    <div className="signup-parent rounded-lg max-w-sm w-full p-6">
      <h1 className="text-2xl font-bold text-white text-center mb-4">Sign Up</h1>
      <button
        onClick={onGoogleSignUp}
        disabled={!!user}
        className={`flex items-center justify-center w-full py-2 px-4 ${
          user
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        } rounded-lg transition`}
      >
        <FcGoogle size={24} className="mr-2" />
        {user ? 'Already Signed Up' : 'Sign Up with Google'}
      </button>
      <p className="text-center mt-4 text-white">
        Already have an account?{' '}
        <span
          className={`${
            user
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 cursor-pointer hover:underline'
          }`}
          onClick={() => !user && navigate('/')}
        >
          Login
        </span>
      </p>
    </div>
    </div>
  );
};

export default SignUp;
