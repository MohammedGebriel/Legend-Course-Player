import Image from 'next/image'
import React from 'react'

export default function SingleComment({name, date, comment,image}) {
    return (
        <div className='flex gap-5 py-5 not-last:border-b-2 border-[#e5e5e5]'>
            <Image src={image} width={70} height={70} alt='Comment Image' className='rounded-full self-start' />
            <div className='text-[#6c6c6c]'>
                <h3 className='font-semibold'> {name}</h3>
                <p className='mb-[15px] '>{date}</p>
                <p>{comment}</p>
            </div>
        </div>
    )
}
