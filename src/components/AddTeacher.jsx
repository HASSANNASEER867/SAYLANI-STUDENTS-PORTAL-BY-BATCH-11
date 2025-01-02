import React, { useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
const AddTeacherfrom = () => {

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

 const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
  <div>
     <Header OpenSidebar={OpenSidebar}/>
     <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className="form-container">
      <br /><br /><br />
      {/* <h2 className="form-title">Add New Teacher</h2> */}
      <form className="teacher-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter full name"
            value={teacher.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={teacher.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            value={teacher.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject specialization"
            value={teacher.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience (Years)</label>
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder="Enter years of experience"
            value={teacher.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className='add-teacher-btn-parent'>
        <button type="submit" className="add-teacher-submit-btn">
          Add Teacher
        </button>
        </div>
      </form>
    </div></div>

  )
}

export default AddTeacherfrom
