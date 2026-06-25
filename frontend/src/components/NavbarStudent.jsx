import React from 'react'

const NavbarStudent = () => {
  return (
    <div className=' bg-black text-white flex justify-between py-2 px-6 rounded-b-md '>
      <h1 className='text-3xl font-bold'>LearnX</h1>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-0.5 font-medium   '>
        <h1>UserName</h1>
        <h1>sample@gmail.com</h1>
      </div>
      <img className='h-12 w-12 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile pic" />
      </div>
      
    </div>
  )
}

export default NavbarStudent
