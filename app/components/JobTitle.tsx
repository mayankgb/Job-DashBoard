import locationPng from "@/public/marker-pin-01.png"
import money from "@/public/money.png"
import Image from "next/image"

interface Props {
    title:string,
    location:string,
    Salary:string,
    isOpen:boolean
}

export default function JobTitle({title,location,Salary,isOpen}:Props){
    return (
        <div className="flex items-center relative border h-[10rem]">
            <div className="absolute left-20 flex w-[80%] flex-col items-between justify-between h-24">
                <div className="flex  items-center justify-between">
                    <div className="flex justify-between w-[65%] items-center">
                        <div className="font-bold text-4xl text-customBlack">
                            {title}
                        </div>
                        <div className="w-1 h-1 bg-customGrey rounded-full">
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-slate-300">
                            posted 2 days ago
                        </div>
                    </div>
                    {isOpen?<Open></Open>:<Close></Close>}
                </div>
                <div className="flex w-80  justify-between">
                    <div className="w-36 flex items-center justify-between">
                        <div className="p-0">
                            <Image src={locationPng} alt="icon"/>
                        </div>
                        <div className="font-normal text-[#5D5D5D]">
                        {location}
                        </div>
                    </div>
                    <div className="w-36 flex items-center justify-around">
                        <div>
                            <Image src={money} alt="icon"/>
                        </div>
                        <div className="font-normal text-[#5D5D5D]">
                            {Salary}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Open(){
    return (
        <div className="flex items-center bg-customGreen px-2 py-1 h-6 rounded-xl border  border-[#ABEFC6]">
            <div className="w-2 h-2 rounded-full bg-green-600">
            </div>
            <div className="ml-1 text-green-700">
                Open
            </div>
        </div>
    )
}

function Close(){
    return (
        <div className="flex bg-customRed">
            <div className="w-2 h-2 rounded-full bg-red-600">
            </div>
            <div className="bg-red-700">
                close
            </div>
        </div>
    )
}