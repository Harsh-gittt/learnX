import React from 'react'
import hero_image from '../assets/heroimage.png'
const HeroPage = () => {
    return (
        <div className='flex justify-between px-30'>
            <div className='flex flex-col gap-6 max-w-1/2 justify-center'>
                <h1 className='font-extrabold text-7xl'>Learn Today , <br /> <span className='text-blue-600'>Lead</span> tomorrow</h1>
                <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat cupiditate facere eveniet hic. Pariatur eius sed eum ullam ratione.</p>
            </div>
            <div className='h-1/2'>
                <img className='h-150 object-cover' src={hero_image} alt="heroimage" />
            </div>
        </div>
    )
}

export default HeroPage
