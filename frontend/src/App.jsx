import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Page1 from './components/Page1'
import Signin from './components/Signin'
import Signup from './components/Signup'
import StudentDashboard from './components/StudentDashboard'
import HeroPage from './components/HeroPage';
import Navbar from './components/Navbar';


const App = () => {
  const location = useLocation()

  const backgroundLocation =
    location.state?.backgroundLocation ||
    (location.pathname === '/signin' || location.pathname === '/signup'
      ? { pathname: '/' }
      : null)

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Page1 />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </>
  );
}

export default App
