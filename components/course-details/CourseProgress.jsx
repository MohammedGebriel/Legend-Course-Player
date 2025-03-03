import { useDataContext } from '@/hooks/DataContext';
import React, { useEffect, useState } from 'react';

export default function CourseProgress({course}) {
    const storageCourse = JSON.parse(localStorage.getItem('courses'))[course.id];
    // const [storageCourse,setStorageCourse] = useState(() =>
    //         typeof window !== "undefined" ? JSON.parse(localStorage.getItem('courses'))[course.id] || "" : ""
    //     );
    const { updateCourseProperty  } = useDataContext()

    useEffect(()=> {
        const result = storageCourse?.lessons.filter((ele) => {
            return ele.watchStatus 
        })
        updateCourseProperty(course.id,'progress',Math.floor((result.length/storageCourse.lessons.length)*100))
    },[course.lessons])

    return (
        <div className="w-full">
        <h1 className="text-2xl font-semibold mb-14 ">Topics for This Course</h1>
        <div className="progress-bar h-1 w-full rounded-lg  bg-[#e6e6e6]">
            <div style={{width:`${storageCourse.progress}%`}} className={`progress-fill relative h-full  bg-[#6abd8a]`}>
            <div className=" absolute text-[14px] top-[10px] -right-[15px] text-[#485293] ">
                {storageCourse.progress}%
            </div>
            <div 
            className="absolute bottom-[20px] 
            -right-[15px] bg-white border-[3px] border-[#d3d3d3] text-[#485293]
            size-8 text-xs flex justify-center items-center rounded-full">
                <div className='relative'>
                    You
                    <span className='absolute border-[6px] border-transparent border-t-[#d3d3d3] top-[28px] left-[4px]'></span>
                </div>
            </div>
            </div>
        </div>
        </div>
);
}
