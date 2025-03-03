import Link from 'next/link';
import React from 'react'
import {FaClipboardList,FaMessage, FaRegWindowMaximize, FaClipboardQuestion, FaCircleInfo } from "react-icons/fa6";
import AskQuestion from './AskQuestion';
import LeaderBoard from './LeaderBoard';

export default function SocialController({course}) {
    return (
        <div className="social-controller mt-[20px] lg:mt-[30px] flex   gap-3 mb-[30px] lg:mb-[60px]">
            <Link href='#comments' className='size-[40px] bg-white flex justify-center items-center shadow rounded-full'>
                <FaMessage className='text-[#a1a8b1]' />
            </Link>
            <Link href='#materials' className='size-[40px] bg-white flex justify-center items-center shadow rounded-full'>
                <FaCircleInfo   className='text-[#a1a8b1]' />
            </Link>
            <AskQuestion>
                <FaRegWindowMaximize  className='text-[#a1a8b1]' />
            </AskQuestion>
            <LeaderBoard course={course}>
                <FaClipboardList className='text-[#a1a8b1]' />
            </LeaderBoard>
        </div>
    )
}
