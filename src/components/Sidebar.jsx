import React from 'react'
import { FaBook } from 'react-icons/fa';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { FaEye } from "react-icons/fa";
 import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <MdDashboard size={22} /> Admin Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='admin-sidebar-list-item'>
                <Link to='/' className='flex gap-4'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='admin-sidebar-list-item'>
                <Link to='/studentlist'  className='flex gap-3'>
                <BsPeopleFill className='icon'/> Students
                </Link >
            </li>
            <li className='admin-sidebar-list-item'>
            <Link to='/teacherlist' href='' className='flex gap-3'>
               <BsPeopleFill className='icon'/> Teachers
            </Link >
          
            </li>
            <li className='admin-sidebar-list-item'>
                <Link to='/courses' className='flex gap-3'>
                     <FaBook size={30} /> Courses
                </Link>
            </li>
            <li className='admin-sidebar-list-item'>
                <Link to='/alerts' href="" className='flex gap-3'>
                    <BsPeopleFill className='icon'/> Alerts
                </Link> 
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar