"use client";
import { useDataContext } from '@/hooks/DataContext';
import React from 'react'
import { FaRegFileLines, FaLock ,FaUnlock  } from "react-icons/fa6";

export default function Lesson({name,watchStatus,video,course,lessonId,isWatch}) {
    const { updateCourseProperty } = useDataContext()
    const handleClickLesson = () => {
        updateCourseProperty(course.id,'courseVideo',video);
        updateCourseProperty(course.id,'currentLesson',lessonId);
    }

    return (
        <button disabled={!watchStatus}   onClick={handleClickLesson} className='flex w-full justify-between items-center border-b my-2 cursor-pointer disabled:cursor-not-allowed  text-[#6f7b81] border-[#e6e6e6] py-3 '>
            <span className='flex items-center gap-2'>
                <FaRegFileLines />
                <span className='text-[18px] '>{name}</span>
            </span>
            {isWatch? 'Watched' : ''}
            { watchStatus ?  <FaUnlock /> :  <FaLock /> }   
        </button>
    )
}
