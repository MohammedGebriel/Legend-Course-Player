import React from 'react'
import SingleMaterial from './SingleMaterial'
import { FaRegClock,FaBook,FaLanguage,FaRegUser, FaRegCircleUser  } from 'react-icons/fa6'

export default function Materials({course}) {
    return (
        <div id='materials' className="courses-material mb-[60px]">
            <h1 className='mb-[20px] font-semibold text-2xl'>Course Materials</h1>
            <div className="materials p-[20px] bg-white shadow flex flex-col lg:flex-row justify-between gap-20 ">
                <ul className='flex-1 flex flex-col gap-4'> 
                    <SingleMaterial icon={<FaRegCircleUser  />} title='Instructor' value={course.instructorName} />
                    <SingleMaterial icon={<FaRegClock />} title='Duration' value={course.duration} />
                    <SingleMaterial icon={<FaBook />} title='Lessons' value={course.lessons.length} />
                    <SingleMaterial icon={<FaRegUser />} title='Enrolled' value={course.students} />
                    <SingleMaterial icon={<FaLanguage />} title='Language' value={course.languge} />
                </ul>
                <ul className='flex-1 flex flex-col gap-4'> 
                    <SingleMaterial icon={<FaRegCircleUser  />} title='Instructor' value={course.instructorName} />
                    <SingleMaterial icon={<FaRegClock />} title='Duration' value={course.duration} />
                    <SingleMaterial icon={<FaBook />} title='Lessons' value={course.lessons.length} />
                    <SingleMaterial icon={<FaRegUser />} title='Enrolled' value={course.students} />
                    <SingleMaterial icon={<FaLanguage />} title='Language' value={course.languge} />
                </ul>
            </div>
        </div>
    )
}
