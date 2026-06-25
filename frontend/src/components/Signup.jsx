import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Signup = () => {
    const location = useLocation()
    const backgroundLocation = location.state?.backgroundLocation

    const [role, setRole] = useState('student')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [picUrl, setPicUrl] = useState('')

    const clickStudent = (e) => {
        e.preventDefault()
        setRole("student")
    }
    const clickTeacher = (e) => {
        e.preventDefault()
        setRole("teacher")
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(role)
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(picUrl)
    }

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">

            <form className=' h-3/4 w-1/3 shadow-2xl shadow-black rounded-2xl flex flex-col px-5 py-8 gap-6 bg-white' spellCheck={false}>
                <div className='border-2 rounded-2xl w-full h-20 overflow-hidden'>
                    <button onClick={clickStudent}
                        className={role === "student" ? 'bg-gray-800 text-white h-full w-1/2 font-bold' : 'bg-white h-full w-1/2 font-bold'}>Student</button>

                    <button onClick={clickTeacher}
                        className={role === "teacher" ? 'bg-gray-800 text-white h-full w-1/2 font-bold' : 'bg-white h-full w-1/2 font-bold'}>Teacher</button>
                </div>
                <input onChange={(e) => {
                    setUsername(e.target.value)

                }}
                    type="text" placeholder='Name :' className='border-3  border-gray-400 rounded-xl w-full h-12 px-5 font-bold' />
                <input onChange={(e) => {
                    setEmail(e.target.value)

                }}
                    type="text" placeholder='Email :' className='border-3  border-gray-400  rounded-xl w-full h-12 px-5 font-bold' />
                <input onChange={(e) => {
                    setPassword(e.target.value)

                }}
                    type="password" placeholder='Password :' className='border-3  border-gray-400 font-bold rounded-xl w-full h-12 px-5' />
                <input onChange={(e) => {
                    setPicUrl(e.target.value)

                }}
                    type="text" placeholder='Profile URL :' className='border-3 border-gray-400 font-bold rounded-xl w-full h-12 px-5' />
                <button onClick={submitHandler}
                    className='h-12 w-full bg-blue-500 text-2xl text-white font-bold rounded-2xl'>Sign Up</button>

                <div className='flex justify-center '>
                    <h6 className='text-gray-500 '>Already have an account? <Link to='/signin' className='text-blue-500' state={{ backgroundLocation }}>SignIn</Link></h6>


                </div>
            </form>
        </div>
    )
}

export default Signup
