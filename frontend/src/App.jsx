import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
    </Routes>
import Signin from './components/Signin'
import Signup from './components/Signup'
import StudentDashboard from './components/StudentDashboard'


const App = () => {
  return (
    <div className=' bg-gray-700'>
     <StudentDashboard />
    
    </div>
  )
}

export default App
