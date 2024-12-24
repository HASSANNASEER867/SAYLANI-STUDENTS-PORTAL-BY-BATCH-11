// import { useState } from 'react';
// // import Button from './components/Button'; 
// import './App.css';
// // import Teacherlayout from './components/TeacherLayout';
// import StudentLayout from './components/StudentLayout'; 

// function App() {
//   return (
//     <>
//       <div>
//         {/* <Button /> */}
//       </div>
//       <StudentLayout/>
//       {/* TeacherLayout component is called here */}
//       {/* <Teacherlayout /> */}
//     </>
//   );
// }

// export default App;import { useState } from 'react';
// import Button from './components/Button'; 
// import './App.css';
// // import Teacherlayout from './components/TeacherLayout';
// import Student from './components/Student'; 

// function App() {
//   return (
//     <>
//       <div>
//         {/* <Button /> */}
//       </div>
//       <Student/>
//       {/* TeacherLayout component is called here */}
//       {/* <Teacherlayout /> */}
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./components/Student";
import Courses from "./components/Courses";
import Assignments from "./components/Assignments";
import Schedule from "./components/Schedule";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
};

export default App;
