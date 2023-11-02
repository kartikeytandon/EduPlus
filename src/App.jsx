import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import StudentLogin from './pages/StudentLogin/StudentLogin'
import FacultyLogin from './pages/FacultyLogin/FacultyLogin'
import AdminLogin from './pages/AdminLogin/AdminLogin'
import StudentLanding from './pages/Student/StudentLanding/StudentLanding'
import StudentProfile from './pages/Student/StudentProfile/StudentProfile'
import StudentAttandance from './pages/Student/StudentAttandance/StudentAttandance'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/studentLogin' element={<StudentLogin />} />
      <Route path='/facultyLogin' element={<FacultyLogin />} />
      <Route path='/adminLogin' element={<AdminLogin />} />
      <Route path='/student' element={<StudentLanding />} />
      <Route path='/student/profile' element={<StudentProfile />} />
      {/* <Route path='/student/attendance' element={<StudentAttandance />} /> */}
    </Routes>
  )
}

export default App