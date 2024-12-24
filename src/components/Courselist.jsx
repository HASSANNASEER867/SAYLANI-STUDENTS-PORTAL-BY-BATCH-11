import React from 'react'
import { Link } from 'react-router';
// import { FaCloudUploadAlt } from "react-icons/fa";


const Courselist = () => {

  const courses = [
    {
      courseName: "React Basics",
      specification: "Frontend Development",
      rollNumber: "C001",
    },
    {
      courseName: "JavaScript Advanced",
      specification: "Backend Development",
      rollNumber: "C002",
    },
    {
      courseName: "Python for Data Science",
      specification: "Data Science",
      rollNumber: "C003",
    },
    {
      courseName: "Machine Learning",
      specification: "AI and ML",
      rollNumber: "C004",
    },
    {
      courseName: "Django Web Development",
      specification: "Full Stack Development",
      rollNumber: "C005",
    },
    {
      courseName: "Introduction to Algorithms",
      specification: "Computer Science",
      rollNumber: "C006",
    },
    {
      courseName: "Web Development with Node.js",
      specification: "Backend Development",
      rollNumber: "C007",
    },
    {
      courseName: "Data Structures in Python",
      specification: "Computer Science",
      rollNumber: "C008",
    },
    {
      courseName: "Digital Marketing",
      specification: "Marketing",
      rollNumber: "C009",
    },
    {
      courseName: "Cloud Computing",
      specification: "Cloud Architecture",
      rollNumber: "C010",
    }
  ];

  return (
    <div className='Courses'>
      <div className='table-parent'>
        <br /><br />
        {/* <h1 className='courses-heading'>Courses List</h1> */}

        {/* Table to display course data */}
        <table className='table-chart-course' border="1" cellPadding="5" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th className='heading'>Course Name</th>
              <th className='heading'>Specification</th>
              <th className='heading'>Roll Number</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseName}</td>
                <td>{course.specification}</td>
                <td>{course.rollNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='addcource-btn-parent'>
          <Link to='/addcourse' className='add-course'> Add New Course ⇪  </Link>
        </div>
      </div>
    </div>
  )
}

export default Courselist

