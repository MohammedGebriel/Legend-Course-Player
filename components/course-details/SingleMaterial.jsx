import React from 'react'

export default function SingleMaterial({icon,title,value}) {
    return (
        <li className='flex justify-between items-center text-[18px] text-[#555755] not-last:border-b border-[#efefef] pb-2'>
            <span className='flex items-center gap-2'>{icon} {title}</span>
            <span className='font-semibold'>{value}</span>
        </li>
    )
}
