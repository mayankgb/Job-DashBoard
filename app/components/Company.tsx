import Atlassian from "@/public/Rectangle43.png"
import Image from "next/image"
import { CusotmButton } from "./Button"

export default function Company(){
    return(
        <div className="flex items-center relative h-[27rem]  border p-5">
            <div className=" absolute left-20 flex flex-col w-[80%] h-[90%] justify-between">
                <div className="flex items-center w-60 justify-between">
                    <div className="flex items-center w-36 justify-between">
                        <div>
                            <Image src={Atlassian} alt="icon"/>
                        </div>
                        <div className="text-xl text-graycustom">
                            Atlassian
                        </div>
                    </div>
                    <CusotmButton/>
                </div>
                {/* about company */}
                <div className="flex h-56 justify-between">
                    {/* section 1 */}
                    <div className="flex flex-col justify-between">
                        {/* company size */}
                        <div className="flex flex-col h-16 justify-between">
                            <div className="font-normal text-gray-500">
                                Company size
                            </div>
                            <div className="font-normal">
                                1k - 2k Employees
                            </div>
                        </div>
                        {/* sector */}
                        <div className="flex flex-col h-16 justify-between">
                            <div className="font-normal text-gray-500">
                                Sector
                            </div>
                            <div className="font-normal">
                                Information Technology, Infrastructure
                            </div>
                        </div>
                        {/* Founded in */}
                        <div className="flex flex-col h-16 justify-between">
                            <div className="font-normal text-gray-500">
                                Founded in 
                            </div>
                            <div className="font-normal">
                                2019
                            </div>
                        </div>
                    </div>
                    {/* section 2 */}
                    <div className="flex flex-col justify-between">
                        {/* Type */}
                        <div className="flex flex-col h-16 justify-between">
                            <div className="font-normal text-gray-500">
                                Type
                            </div>
                            <div className="font-normal">
                                Private
                            </div>
                        </div>
                        {/* sector */}
                        <div className="flex flex-col h-16 justify-between">
                            <div className="font-normal text-gray-500">
                                Funding
                            </div>
                            <div className="font-normal">
                                Bootstrapped
                            </div>
                        </div>
                        {/* Founded in */}
                        <div className="flex flex-col h-16 justify-between">
                            <div className="font-normal text-gray-500">
                                Founded By 
                            </div>
                            <div className="font-normal">
                                Scott Farquhar,Mike Cannon-Brookes
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-gray-400">
                    Report this listing
                </div>
            </div>
        </div>
    )
}