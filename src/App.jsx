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
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Student from "./components/Student";
// import Courses from "./components/Courses";
// import Assignments from "./components/Assignments";
// import Schedule from "./components/Schedule";
// import Notifications from "./components/Notifications";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Student />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/assignments" element={<Assignments />} />
//         <Route path="/schedule" element={<Schedule />} />
//         <Route path="/notifications" element={<Notifications />} />
//       </Routes>
//     </Router>
//   )}

// import TeacherCard from './components/TeacherCard'
// import TeacherPlaceholder from './components/TeacherPlaceholder'
// import Header from './components/Header'
// import ChartPlaceholder from "./components/TeacherPlaceholder";
// import Card from "./components/TeacherCard";
// import Dashboard from "./components/TeacherDashboard";

// function APP(){
// return(
//   <BrowserRouter>
//   <Routes>
//   <Route  path='/teachercard' element={<Sidebar/>}/>
//     <Route  path='/teacherPlaceholder' element={<ChartPlaceholder/> }/>
//     <Route  path='/teacherHome' element={<Header/> }/>
//     <Route  path='/teachercard' element={<Card/> }/>
//     <Route  path='/teachercard' element={<Dashboard/> }/>

//   </Routes>
//   </BrowserRouter>
// )
// }

import './App.css';
import Teacherlayout from './components/TeacherLayout';
import { BrowserRouter, Route, Routes } from 'react-router';
import AdminDashboard from './Admin/AdminDashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Teacherlist from './components/Teacherlist';
import AddTeacher from './components/AddTeacher';
import Studentlist from './components/Studentlist';
import Courselist from './components/Courselist';
import CourseDetail from './components/CourseDetail';
import Alerts from './components/Alerts';
import { useState } from 'react';
import AddCourseForm from './components/AddCourse';
import Student from './components/Student';
import HeaderHome from './components/HeaderHome';
import SidebarHome from './components/SidebarHome';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainHome from './components/MainHome';
import StudentDetail from './components/StudentDetail';

function App() {

  return (
    <BrowserRouter>
  
   {/* Developers Plzz Dont Change the code Lines ! */}
   {/* Admin Pannal Header and Sidebar ↓ */}
     
   {/* Developers Plzz Dont Change the code Lines ! */}
   {/* Home Page added with Login SignUp Plus! */}
    {/* <HeaderHome   OpenSidebar={OpenSidebar} /> */}
    {/* <SidebarHome  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> */}
    <Routes>
    <Route path='/adminpannel' element={ <AdminDashboard/> } ></Route>
    <Route path='/home' element={ <Home /> } ></Route>
    <Route path='/header' element={ <Header/> } ></Route>
    <Route path='/sidebar' element={ <Sidebar /> } ></Route>
    <Route path='/teacherlist' element={ <Teacherlist /> } ></Route>
    <Route path='/teacherlist' element={ <Teacherlist /> } ></Route>
    <Route path='/addteacher' element={ <AddTeacher /> } ></Route>
    <Route path='/studentlist' element={ <Studentlist /> } ></Route>
    <Route path='/student/:id' element={ <StudentDetail /> } ></Route>
    <Route path='/courses' element={ <Courselist /> } ></Route>
    <Route path='/coursedetail' element={ <CourseDetail /> } ></Route>
    <Route path='/addcourse' element={ <AddCourseForm/> } ></Route>
    <Route path='/alerts' element={ <Alerts/> } ></Route>
    <Route path='/teacherlayout' element={ <Teacherlayout/> } ></Route>
    <Route path='/student' element={ <Student/> } ></Route>
    <Route path='/' element={ <MainHome/> } ></Route>
    <Route path='/headerhome' element={ <HeaderHome/> } ></Route>
    <Route path='/sidebarhome' element={ <SidebarHome/> } ></Route>
    <Route path='/login' element={ <Login/> } ></Route>
    <Route path='/signup' element={ <SignUp/> } ></Route>

    </Routes>
    </BrowserRouter> 

  );
};


export default App
