import Link from 'next/link'
import React from 'react'

export default function HeaderDetails({path,title}) {
    return (
        <div className='bg-[#F5F9FA] min-h-[110px] px-[10px] xl:px-0'>
            <div className='lg:w-[1192px] mx-auto'>
                <div className='h-[50px] flex  items-center gap-2'>
                    <Link href='/'>{'Home > '}</Link>
                    <Link href='/courses'>{' Courses > '}</Link>
                    <Link className='' href={`home/courses/${path}`}> {path} </Link>
                </div>
                {/* <p>Starting SEO as your Home</p> */}
                <p className='text-black font-bold text-2xl  lg:text-3xl  flex items-center'>{title}</p>
            </div>
        </div>
    )
}
