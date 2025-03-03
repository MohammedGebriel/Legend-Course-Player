"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="navbar p-5 bg-[#F5F9FA]">
        <ul className="flex gap-3 font-semibold">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/courses'>Courses</Link></li>
          <li>Others</li>
        </ul>
      </div>
      <div className="h-screen flex justify-center items-center text-[#6C6C6C]">
        <h1 className="lg:text-[20px] font-bold">
          IT Legend Course Player Task
        </h1>
      </div>
    </div>
  );
}
