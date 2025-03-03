import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBook, FaRegClock, FaRegUser } from 'react-icons/fa6'

export default function Course({course}) {
    return (
        <div className='bg-white shadow flex flex-col lg:flex-row p-4 gap-5'> 
            <div className="image">
                <Link href={`/courses/${course.id}`}>
                    <Image className='h-[200px] w-[200px] rouded-xl' src={course.courseImage} alt="" />
                </Link> 
            </div>
            <div className="detials flex flex-col gap-2 py-3">
                <Link href={`/courses/${course.id}`}>
                    <h1 className='font-bold lg:text-[18px]'>{course.courseName}</h1>
                </Link>
                <p className='text-[#ee4a62] font-semibold'>{course.price}$</p>
                <p className='text-[#808080] font-semibold'>{course.description}</p>
                <p className='text-[#505050] font-semibold'>Instructor: {course.instructorName}</p>
                <div className='flex gap-2 items-center mt-4'>
                    <FaBook />
                    <p className=' font-semibold'>{course.lessons.length} Lessons</p>
                    <FaRegClock />
                    <p className=' font-semibold'>{course.duration} </p>
                    <FaRegUser />
                    <p className=' font-semibold'>{course.students} Students</p>
                </div>
            </div>
        </div>
    )
}
