import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1'
import Signin from './components/Signin'
import Signup from './components/Signup'
import StudentDashboard from './components/StudentDashboard'
import HeroPage from './components/HeroPage';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
    </div>
  )
}

export default App
