'use client'
import Course from '@/components/course-details/Course';
import { useDataContext } from '@/hooks/DataContext'
import Link from 'next/link'
import React from 'react'

export default function index() {
  const {courses} = useDataContext();
  
  return (
    <div>
        <div className="bg-[#F5F9FA] p-5">
          <ul className="flex gap-3 font-semibold ">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/courses'>Courses</Link></li>
            <li>Others</li>
          </ul>
          <h1 className='text-xl lg:text-4xl text-center'>Courses Page</h1>
        </div>
      <div className=' bg-[#FFFFFF]'>
        <div className='flex flex-col gap-5 mt-[30px] container mx-auto'>
          {
            courses.map((course) => (<Course key={course.id} course={course}/>))
          }
        </div>
      </div>
    </div>
    
  )
}
