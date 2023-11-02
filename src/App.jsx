import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import StudentLogin from './pages/StudentLogin/StudentLogin'
import FacultyLogin from './pages/FacultyLogin/FacultyLogin'
import AdminLogin from './pages/AdminLogin/AdminLogin'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/studentLogin' element={<StudentLogin />} />
      <Route path='/facultyLogin' element={<FacultyLogin />} />
      <Route path='/adminLogin' element={<AdminLogin />} />
    </Routes>
  )
}

export default App