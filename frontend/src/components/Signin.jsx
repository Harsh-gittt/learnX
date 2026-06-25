import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Signin = () => {
    const location = useLocation()
    const backgroundLocation = location.state?.backgroundLocation

    const [role, setRole] = useState('student')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const clickStudent = (e) => {
        e.preventDefault()
        setRole("student")
    }
    const clickTeacher = (e) => {
        e.preventDefault()
        setRole("teacher")
    }

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     console.log(role)
    //     console.log(username)
    //     console.log(email)
    //     console.log(password)
    //     console.log(picUrl)
        
    // }

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">

            <form className='h-2/3 w-1/3 shadow-2xl shadow-black rounded-2xl flex flex-col px-5 py-8 gap-10 bg-white' spellCheck={false} >
                <div className='border-2 rounded-2xl w-full h-20 overflow-hidden'>
                    <button onClick={clickStudent}
                        className={role === "student" ? 'bg-gray-800 text-white h-full w-1/2 font-bold' : 'bg-white h-full w-1/2 font-bold'}>Student</button>

                    <button onClick={clickTeacher}
                        className={role === "teacher" ? 'bg-gray-800 text-white h-full w-1/2 font-bold' : 'bg-white h-full w-1/2 font-bold'}>Teacher</button>
                </div>

                <input onChange={(e) => {
                    setEmail(e.target.value)

                }}
                    type="text" placeholder='Email :' className='border-3  border-gray-400  rounded-xl w-full h-12 px-5 font-bold' />
                <input onChange={(e) => {
                    setPassword(e.target.value)

                }}
                    type="password" placeholder='Password :' className='border-3  border-gray-400 font-bold rounded-xl w-full h-12 px-5' />

                {/* <Link to='/student'>
                <button  
                    className='h-12 w-full bg-blue-500 text-2xl text-white font-bold rounded-2xl'>Sign In</button>
                </Link> */}
                <Link to='/teacher'>
                <button  
                    className='h-12 w-full bg-blue-500 text-2xl text-white font-bold rounded-2xl'>Sign In</button>
                </Link>
                <div className='flex justify-center'>
                    <h6 className='text-gray-500'>New User? <Link to='/signup' className='text-blue-500' state={{ backgroundLocation }}>SignUp</Link></h6>

                </div>
            </form>
        </div>
    )
}

export default Signin
