import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {

    
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

   
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(role)
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(picUrl)
    }
   
  return (
    <div className= "flex h-screen w-screen justify-center items-center ">

     <form className='h-2/5 w-1/3 shadow-2xl shadow-black rounded-2xl flex flex-col px-5 py-8 gap-6 bg-white' spellCheck={false} > 
   
   
    <input onChange={(e)=>{
        setEmail(e.target.value)

    }}
    type="text" placeholder='Email :'className='border-3  border-gray-400  rounded-xl w-full h-12 px-5 font-bold' /> 
    <input onChange={(e)=>{
        setPassword(e.target.value)

    }}
    type="password" placeholder='Password :' className='border-3  border-gray-400 font-bold rounded-xl w-full h-12 px-5'/> 
   
     <button onClick={submitHandler}
      className='h-12 w-full bg-blue-500 text-2xl text-white font-bold rounded-2xl'>Sign In</button>
        <div className='flex justify-center'>
            <h6 className='text-gray-500'>New User? <Link to ='/signup' className='text-blue-500'>SignUp</Link></h6>
            
        </div>
     </form>
    </div>
  )
}

export default Signin
