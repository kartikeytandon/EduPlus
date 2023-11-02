import React from 'react'
import './Navbar.css'
import proImg from '../../assets/kartikeyImg.jpeg';
import { AiOutlineUser } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { GiProgression } from 'react-icons/gi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className="profileDesc flex items-center gap-4 w-fit mx-4 py-4">
            <div>
                <img src={proImg} alt="" className='w-16 h-16 bg-blue-500 rounded-full' />
            </div>
            <div className='text-white'>   
                Kartikey Tandon
                <br />
                Branch - CS Year - 1st
            </div>
        </div>

        <div className='navPart mx-4 mt-12'>
          <div className='navItems flex text-2xl items-center gap-2 my-4'>
            <AiOutlineUser className='navIcons' />
            <Link to='/student/profile' className='text-white'>
              Profile
            </Link>
          </div>
          <hr />
          <div className='navItems flex text-2xl items-center gap-2 my-4'>
            <SlCalender className='navIcons' />
            <Link to='/student/attendance' className='text-white'>
              Attendance
            </Link>
          </div>
          <hr />
          <div className='navItems flex text-2xl items-center gap-2 my-4'>
            <GiProgression className='navIcons' />
            <Link to='/student/progress' className='text-white'>
              Progress
            </Link>
          </div>
          <hr />
          <div className='navItems flex text-2xl items-center gap-2 my-4'>
            <IoIosNotificationsOutline className='navIcons' />
            <Link to='/student/notifications' className='text-white'>
              Notifications
            </Link>
          </div>
          <hr />
          <div className='navItems flex text-2xl items-center gap-2 my-4'>
            <RiQuestionAnswerLine className='navIcons' />
            <Link to='/student/queries' className='text-white'>
              Queries
            </Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar