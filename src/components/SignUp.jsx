
// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { handleGoogleSignUp } from '../utils/firebase';
import HeaderHome from './HeaderHome';
import SidebarHome from './SidebarHome';

const SignUp = ({ user }) => {
  const navigate = useNavigate();

  const onGoogleSignUp = () => {
    handleGoogleSignUp(navigate);
  };

const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
        const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
        }


   const [teacher, setTeacher] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      experience: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setTeacher({ ...teacher, [name]: value });
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Teacher Details:", teacher);
      alert("Teacher Added Successfully!");
      setTeacher({
        name: "",
        email: "",
        phone: "",
        subject: "",
        experience: "",
      });
    };      
   
        

  return (
    <div>
     <HeaderHome OpenSidebar={OpenSidebar} />
     <SidebarHome  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />  
    <div className='signup-main-parent'>
    {/* <div className="signup-parent rounded-lg max-w-sm w-full p-6">
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
    </div> */}
    <div className="form-container -mt-12">
      <br /><br /><br />
      <form className="teacher-form" onSubmit={handleSubmit}>
        
      <div className="form-group">
          <label htmlFor="email"> Name</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter your Name ?"
            // value={teacher.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email ?"
            // value={teacher.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password ?"
            // value={teacher.phone}
            // onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>    
      <label>Category:</label>
      <select name="category"  required>
        <option value="">Select Category</option>
        <option >User</option>
        <option >Student</option>
        <option >Teacher</option>
        <option >Admin</option>
      </select>
      </div>
        {/* <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject specialization"
            // value={teacher.subject}
            // onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="experience">CNIC (NUM)</label>
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder="Enter a CNIC Number"
            // value={teacher.experience}
            // onChange={handleChange}
            required
          />
        </div>
        <div className='add-teacher-btn-parent'>
        <button type="submit" className="add-teacher-submit-btn">
          Sign Up
        </button>
        </div>
       </form>
    </div>
    </div>
    </div>
  );
};

export default SignUp;