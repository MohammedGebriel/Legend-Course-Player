'use client'
import React, { useEffect, useMemo, useState } from 'react'
import dynamic from "next/dynamic";
import { useDataContext } from '@/hooks/DataContext';

export default function VideoController({course,}) {    
    const [actionTriggered, setActionTriggered] = useState(false);
    const { updateLessonProperty  } = useDataContext()
    // const [storageCourse,setStorageCourse] = useState(() =>
    //     typeof window !== "undefined" ? JSON.parse(localStorage.getItem('courses'))[course.id] || "" : ""
    // );
    const storageCourse = JSON.parse(localStorage.getItem('courses'))[course.id];
    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

    const handleProgress = async (state) => {
        const currentTime = state.playedSeconds
        const duration = state.loadedSeconds
        if(currentTime/duration >= 0.8){
            updateLessonProperty(course.id,storageCourse.currentLesson,'isWatch',true);
            await updateLessonProperty(course.id,storageCourse.currentLesson+1,'watchStatus',true);
        }
    }

    useEffect(() => {
        setActionTriggered(false);
    },[storageCourse]);

    const videoPlayer = useMemo(() => (
        <ReactPlayer
            url={storageCourse.courseVideo}
            controls
            loop
            onProgress={handleProgress}
            volume={0.8} 
            className='!w-full max-h-full lg:min-h-full'
        />
    ), [storageCourse.currentLesson]);

    return (
        <div className="video-controller  max-w-full xl:w-[750px] h-[300px] lg:h-[527px]">
            {videoPlayer}
        </div>
    )
}
