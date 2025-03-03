import React from 'react'

export default function LessonsCard({title,description,children}) {
    return (
        <div className='border border-[#e6e6e6] rounded p-5 py-7 mb-10'>
            <h1 className='text-xl font-semibold mb-[10px]'>{title}</h1>
            <p className='text-[#979390] mb-[10px]'>{description}</p>
            <div>
                {children}
            </div>
        </div>
    )
}
