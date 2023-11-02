import React from 'react'
import './StudentLanding.css'
import Navbar from '../../../components/Navbar/Navbar'
import StudentAttandance from '../StudentAttandance/StudentAttandance'
import { Route, Routes } from 'react-router-dom'

const StudentLanding = () => {
  return (
    <div className='page1'>
      <Navbar />
      <StudentAttandance />
    </div>
  )
}

export default StudentLanding