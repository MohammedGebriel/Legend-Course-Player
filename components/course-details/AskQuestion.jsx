import { Button } from "@/components/ui/button"
import {
Dialog,
DialogClose,
DialogContent,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"
import { FaArrowRightLong } from "react-icons/fa6"
import { useState } from "react"

export default function AskQuestion({children}) {
    const [question,setQuestion] = useState('')
    return (
        <Dialog>
            <DialogTrigger asChild>
            <Button className='size-[40px] bg-white flex justify-center items-center shadow rounded-full cursor-pointer' variant="outline">{children}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Ask a Question</DialogTitle>
            </DialogHeader>
            <div className="">
                    <textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Write a Question"
                        className="h-40 w-full bg-white shadow-xl rounded outline-none p-5"
                        name=""
                        id=""
                    ></textarea>
                    <DialogClose asChild>
                    <button className=' flex gap-2 items-center rounded p-2 px-3 text-white mt-5  bg-[#41b69d]'>
                        Send Question <FaArrowRightLong />
                    </button>
                </DialogClose>
            </div>
            <DialogFooter className="sm:justify-start">
                
            </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}
