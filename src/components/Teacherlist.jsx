import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa"; // You can use this for "Add New" button icon
import Header from './Header';
import Sidebar from './Sidebar';

const TeacherList = () => {
  const teachers = [
    {
      teacherName: "John Doe",
      department: "Computer Science",
      teacherID: "T001",
    },
    {
      teacherName: "Jane Smith",
      department: "Data Science",
      teacherID: "T002",
    },
    {
      teacherName: "Emily Johnson",
      department: "AI and ML",
      teacherID: "T003",
    },
    {
      teacherName: "Michael Brown",
      department: "Backend Development",
      teacherID: "T004",
    },
    {
      teacherName: "Sarah Lee",
      department: "Frontend Development",
      teacherID: "T005",
    },
    {
      teacherName: "David Wilson",
      department: "Cloud Computing",
      teacherID: "T006",
    },
    {
      teacherName: "Laura Taylor",
      department: "Full Stack Development",
      teacherID: "T007",
    },
    {
      teacherName: "Mark Harris",
      department: "Digital Marketing",
      teacherID: "T008",
    },
    {
      teacherName: "Sophia Clark",
      department: "Machine Learning",
      teacherID: "T009",
    },
    {
      teacherName: "James Lewis",
      department: "Web Development",
      teacherID: "T010",
    }
  ];

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <div>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className='Teachers'>
       <div className='addcource-btn-parent'>
             <Link to='/addteacher' className='add-course'>Add New Teacher ↓</Link>
               </div>  

               
      <div className='table-parent'>
        <br /><br /><br /><br />

        {/* Table to display teacher data */}
        <table className='table-chart-teacher' border="1" cellPadding="5" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th className='heading'>Teacher Name</th>
              <th className='heading'>Department</th>
              <th className='heading'>Teacher ID</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index}>
                <td>{teacher.teacherName}</td>
                <td>{teacher.department}</td>
                <td>{teacher.teacherID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></div>
  );
};

export default TeacherList;
