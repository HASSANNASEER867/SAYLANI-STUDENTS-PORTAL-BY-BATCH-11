import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    courseTitle: '',
    courseCode: '',
    courseDescription: '',
    category: '',
    instructor: '',
    instructorEmail: '',
    duration: '',
    startDate: '',
    endDate: '',
    fee: '',
    modeOfLearning: '',
    level: '',
    prerequisites: '',
    courseMaterials: null,
    courseImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }

  return (
    <div>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className='add-container-parent'>
    <div className='add-container'>
      <br /><br />
    <form onSubmit={handleSubmit} className='addcourcefrom'>
      <br /> <br />
      <br />
      <div className='parent-input-labels '>    
      <label>Course Title:</label>
      <input
        type="text"
        name="courseTitle"
        value={formData.courseTitle}
        onChange={handleChange}
        placeholder="Course Title"
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Course Code:</label>
      <input
        type="text"
        name="courseCode"
        value={formData.courseCode}
        onChange={handleChange}
        placeholder="Course Code"
        required
      />
    </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Course Description:</label>
      <textarea
        name="courseDescription"
        value={formData.courseDescription}
        onChange={handleChange}
        placeholder="Course Description"
        required
      ></textarea>
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Category:</label>
      <select name="category" value={formData.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="ai">AI</option>
      </select>
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Instructor Name:</label>
      <input
        type="text"
        name="instructor"
        value={formData.instructor}
        onChange={handleChange}
        placeholder="Instructor Name"
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Instructor Email:</label>
      <input
        type="email"
        name="instructorEmail"
        value={formData.instructorEmail}
        onChange={handleChange}
        placeholder="Instructor Email"
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Duration:</label>
      <input
        type="text"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Duration"
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Start Date:</label>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>End Date:</label>
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Course Fee:</label>
      <input
        type="number"
        name="fee"
        value={formData.fee}
        onChange={handleChange}
        placeholder="Fee"
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Mode of Learning:</label>
      <label>
        <input
          type="radio"
          name="modeOfLearning"
          value="online"
          onChange={handleChange}
        />{' '}
        Online
      </label>
      <label>
        <input
          type="radio"
          name="modeOfLearning"
          value="offline"
          onChange={handleChange}
        />{' '}
        Offline
      </label>
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Level:</label>
      <select name="level" value={formData.level} onChange={handleChange} required>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Prerequisites:</label>
      <input
        type="text"
        name="prerequisites"
        value={formData.prerequisites}
        onChange={handleChange}
        placeholder="Prerequisites"
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Course Materials:</label>
      <input
        type="file"
        name="courseMaterials"
        onChange={handleChange}
        accept="application/pdf, .docx, .pptx"
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Course Thumbnail:</label>
      <input
        type="file"
        name="courseImage"
        onChange={handleChange}
        accept="image/*"
      />
      </div>
      <br />
       <div className='add-course-btn-parent'>
      <button type="submit" className='add-course-submit'>Add Course</button>
      </div>
    </form>
    </div>
    </div></div>

  );
};

export default AddCourseForm;
