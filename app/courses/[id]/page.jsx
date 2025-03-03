"use client"; 
import HeaderDetails from '@/components/course-details/HeaderDetails'
import React from 'react'
import VideoController from '@/components/course-details/VideoController';
import SocialController from '@/components/course-details/SocialController';
import Materials from '@/components/course-details/Materials';
import Comments from '@/components/course-details/Comments';
import CourseProgress from '@/components/course-details/CourseProgress';
import Lessons from '@/components/course-details/Lessons';
import { useDataContext } from '@/hooks/DataContext';
import { useParams } from "next/navigation";

export default function page() {
    const { courses} = useDataContext()
    const { id } = useParams(); 
    const course = courses.find(course => course.id == id);
        
    return (
        <div>
            <HeaderDetails path='Course Details' title={course.courseName}/>
            <div className='w-full xl:w-[1192px] xl:mx-auto py-3 flex flex-col xl:flex-row justify-between mb-5'>
                <div className="w-full xl:w-[720px] px-[10px] xl:px-0">
                    <VideoController course={course} />
                    <SocialController course={course}/>
                    <Materials course={course} />
                    <div className=' hidden xl:block'>
                        <Comments  comments={course.comments}/>
                    </div>
                </div>
                <div className="side-bar w-full  xl:w-[424px] self-start px-[15px] xl:px-0 ">
                    <CourseProgress course={course} />
                    <Lessons course={course} lessons={course.lessons} />
                    <div className=' block xl:hidden'>
                        <Comments  comments={course.comments}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
