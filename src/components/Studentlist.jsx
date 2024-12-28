import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const StudentList = () => {
  // Sample Course and Batch Data
  const courses = ["React Basics", "Python for Data Science", "Machine Learning"];
  const batches = ["Batch 1", "Batch 2", "Batch 3", "Batch 4"];

  // Sample Student Data (this could be replaced by an API call)
  const students = [
    { id: 1, name: "John Doe", course: "React Basics", batch: "Batch 1", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", course: "Python for Data Science", batch: "Batch 2", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", course: "Machine Learning", batch: "Batch 3", email: "alice.johnson@example.com" },
    { id: 4, name: "Bob Brown", course: "React Basics", batch: "Batch 4", email: "bob.brown@example.com" },
  ];

  // States for selected filters
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  // Filtered students based on selected course and batch
  const filteredStudents = students.filter(student => {
    return (
      (selectedCourse === '' || student.course === selectedCourse) &&
      (selectedBatch === '' || student.batch === selectedBatch)
    );
  });

  return (
    <div>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className="student-list-parent">
    <div className="student-list-container">
      <div className="filters">
        <select className='student-filter-child' onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
          <option value="" className='student-filter-child'>Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>

        <select className='student-filter-child' onChange={(e) => setSelectedBatch(e.target.value)} value={selectedBatch}>
          <option value="" className='student-filter-child'>Select Batch</option>
          {batches.map((batch, index) => (
            <option key={index} value={batch}>{batch}</option>
          ))}
        </select>
      </div>

      {/* Table displaying student list */}
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.batch}</td>
              <td>{student.email}</td>
              <td>
                <Link to={`/student/${student.id}`} className="view-details">View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default StudentList;
