import icon from "@/public/Icon.png"
import Image from "next/image"
import messageIcon from "@/public/message.png"
import paymentsIcon from "@/public/payments.png"
import applicationIcon from "@/public/application.png"
import bellIcon from "@/public/bell.png"
import attlasian from "@/public/atlassioa.png"
import down from "@/public/chevron-down.png"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function Navbar(){
    return(
    <div className="flex shadow-custom2 w-full justify-between items-center px-10  py-3 font-bold">
        <div className="h-11 text-customOrange w-10 py-7 bg-customGray px-2 flex justify-center items-center w-24">
            Logo
        </div>

        <div className="flex justify-around h-20 w-[43rem] items-center">
            <div className="shadow-custom text-white bg-customOrange items-center rounded-lg justify-center w-28 h-14 font-normal flex">
                <div className="w-6 h-6">
                <Image src={icon} alt="icon"/>
                </div>
                <div className="text-white ml-1">
                    Jobs
                </div>
            </div>
            <div className="flex w-[40rem] mx-1 h-[4rem] items-center shadow-inner-custom  border rounded-custom-l justify-around ">
                <div className="flex justify-center items-center">
                    <div className="mr-1">
                        <Image src={messageIcon} alt="icon"/>
                    </div>
                    <div className=" font-normal text-slate-400">
                        Messages
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mr-1">
                        <Image src={paymentsIcon} alt="icon"/>
                    </div>
                    <div className="font-normal text-slate-400">
                        Payments
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mr-1">
                        <Image src={applicationIcon} alt="icon"/>
                    </div>
                    <div className="font-normal text-slate-400">
                    Application
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between py-2.5 px-1 w-28 h-12">
            <div className="w-8 h-8">
            <DropdownMenu>
            <DropdownMenuTrigger className="outline-none w-8 h-8"><Image src={bellIcon} alt="icon"/></DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator  className="border-b border-gray-200"/>
                    <DropdownMenuGroup className="bg-blue-100">
                    <DropdownMenuItem>Wohoo! you won a jackpot</DropdownMenuItem>
                    </DropdownMenuGroup>
                    </DropdownMenuContent>
            </DropdownMenu>
            </div>
            <div className="flex justify-between items-center">
            <div className="h-10 w-10">
                <Image src={attlasian} width={40} height={40} alt="icon"/>
            </div>
            <div className="w-5 h-5">
                <DropdownMenu>
                    <DropdownMenuTrigger><Image src={down} alt="icon" /></DropdownMenuTrigger>
                </DropdownMenu>
            </div>
            </div>
        </div>

    </div>
    )
}