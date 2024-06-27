import Image from "next/image";
import avatar from "@/public/Avatar.png"

export function Card(){
    return(
        <div className=" flex justify-center">
            <div className="flex h-44 w-[90%] rounded-xl flex-col justify-around px-9 py-7 shadow-custom3">
                <div className="font-medium">
                    “A quote from a Atlassian.”
                </div>
                <div className="flex w-40 justify-between">
                    <div className="w-11 h-11 rounded-full">
                        <Image src={avatar} alt="icon"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="font-medium">
                            Name
                        </div>
                        <div className="font-medium text-gray-500">
                            Description
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}