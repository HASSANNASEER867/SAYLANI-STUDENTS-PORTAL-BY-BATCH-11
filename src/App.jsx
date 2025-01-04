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
// import TeacherCard from './components/TeacherCard'
// import TeacherPlaceholder from './components/TeacherPlaceholder'
// import Header from './components/Header'
// import ChartPlaceholder from "./components/TeacherPlaceholder";
// import Notification from "./components/TeacherNotification";
// import Dashboard from "./components/TeacherDashboard";



function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/admindashboard' element={ <AdminDashboard/> } ></Route>
    <Route path='/home' element={ <Home /> } ></Route>
    <Route path='/header' element={ <Header/> } ></Route>
    <Route path='/sidebar' element={ <Sidebar /> } ></Route>
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
    {/* <Route  path='/teachercard' element={<Sidebar/>}/>
    <Route  path='/teacherPlaceholder' element={<ChartPlaceholder/> }/>
    <Route  path='/teacherHome' element={<Header/> }/>
    <Route  path='/teachercard' element={<Notification/> }/>
    <Route  path='/teachercard' element={<Dashboard/> }/> */}
    </Routes>
    </BrowserRouter> 

  );
};
export default App
