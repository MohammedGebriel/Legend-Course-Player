"use client";
import React, { useState } from 'react'
import LessonsCard from './LessonsCard'
import Lesson from './Lesson'

export default function Lessons({lessons,course}) {
    const storageCourse = JSON.parse(localStorage.getItem('courses'))[course.id];
    // const [storageCourse,setStorageCourse] = useState(() =>
    //         typeof window !== "undefined" ? JSON.parse(localStorage.getItem('courses'))[course.id] || "" : ""
    //     );

    return (
        <div className='mt-[70px]'>
            <LessonsCard  title='Week 1-4' description='Advanced story telling techniques for writers: Persons,Characters & Plots'> 
                {storageCourse.lessons.map((lesson) => {
                    return (
                        <Lesson course={course}  key={lesson.id} lessonId={lesson.id} video={lesson.lessonVideo} name={lesson.lessonName} isWatch={lesson.isWatch} watchStatus={lesson.watchStatus} />
                    )
                })} 
            </LessonsCard>  
        </div>
    )
}
