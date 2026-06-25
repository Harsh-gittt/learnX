import React from 'react'
import NavbarStudent from './NavbarStudent'
import StudentHero from './StudentHero'

const StudentDashboard = () => {
  return (
    <div className=' flex flex-col'>
        <NavbarStudent/>
        <StudentHero/>
    </div>
  )
}

export default StudentDashboard
