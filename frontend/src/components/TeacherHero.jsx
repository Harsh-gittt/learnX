import React from 'react'
import CourseCard from './CourseCard'

const StudentHero = () => {
    return (
        <div className='relative flex-1 px-30'>
            <div className='flex justify-between p-10'>
                <h1 className='text-5xl font-bold'>Hi! <span className='text-blue-500'>User</span></h1>
                <div className='w-1/3 h-20 rounded-2xl flex items-center px-4 text-2xl font-semibold bg-blue-50 justify-center'>
                    <h1>Total Course uploaded:  100</h1>
                </div>

            </div>
            <div className='px-6 py-3 flex flex-wrap justify-between '>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
            <div className='fixed bottom-8 right-6 flex justify-center items-center text-2xl font-bold text-white w-1/6 h-20 shadow-2xl shadow-black bg-black rounded-2xl transition-all 300 hover:scale-110 cursor-pointer'> + Add Course</div>
        </div>
    )
}

export default StudentHero

