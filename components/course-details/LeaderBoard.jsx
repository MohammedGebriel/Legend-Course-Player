import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
Dialog,
DialogClose,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Leader from "./Leader"
import { useState } from "react"

export default function LeaderBoard({children,course}) {
    const storageCourse = JSON.parse(localStorage.getItem('courses'))[course.id];
    // const [storageCourse,setStorageCourse] = useState(() =>
    //         typeof window !== "undefined" ? JSON.parse(localStorage.getItem('courses'))[course.id] || "" : ""
    //     );
    return (
        <Dialog>
            <DialogTrigger asChild>
            <Button className='size-[40px] bg-white flex justify-center items-center shadow rounded-full cursor-pointer' variant="outline">{children}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <h1 className="text-[#080264] text-center ">{storageCourse.courseName}</h1>
                <DialogTitle className="text-[#080264] text-center">Leader Board</DialogTitle>
            </DialogHeader>
            <div dir="rtl" className="message bg-[#F5F9FA] p-3 flex gap-2">
                <p >&#9996;</p>
                <p dir="rtl" className="text-[#182578] font-semibold">
                عظيم يا صديقي.. أداءك في الكورس ده أفضل من {storageCourse.progress}% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا 
                </p>
            </div>
            <div className="bg-[#F5F9FA] p-[20px] rounded-[10px] flex flex-col gap-3">
                <Leader />
                <Leader />  
                <Leader />
                <Leader />
            </div>
            </DialogContent>
        </Dialog>

    )
}
