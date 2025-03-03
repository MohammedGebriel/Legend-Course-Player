import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

export default function SendComment() {
    return (
        <div className="my-[20px]">
        <textarea
            placeholder="Write a comment"
            className="h-40 w-full bg-white shadow-xl rounded outline-none p-5"
            name=""
            id=""
        ></textarea>
        <button className=' flex gap-2 items-center rounded p-4 px-5 text-white mt-5  bg-[#41b69d]'>
            Submit Review <FaArrowRightLong />
        </button>
        </div>
    );
}
