import figma from "@/public/figma.png"
import adobe from "@/public/adobei.png"
import xd from "@/public/xd.png"
import Image from "next/image"

export function Requirement(){
    return (
        <div className="flex items-center relative h-[11rem] p-5 border">
            <div className="absolute left-20 flex h-[80%] w-[90%] justify-between">
                {/* skills */}
                <div className="flex flex-col w-[30%] justify-between text-slate-500">
                    <div>
                        Skills Required
                    </div>
                    <div className="flex  h-[6.5rem] flex-col justify-between">
                        <div className="flex border rounded-md shadow-inner-custom2 w-20 py-0.5 justify-around items-center">
                            <div>
                                <Image src={figma} alt="icon"/>
                            </div>
                            <div className="font-normal">
                                Figma
                            </div>
                        </div>
                        <div className="flex border rounded-md px-0.5 shadow-inner-custom2 py-0.5 w-40 items-center justify-around">
                            <div>
                               <Image src={adobe} alt="icon"/>
                            </div>
                            <div className="font-normal">
                                Adobe Illustrator
                            </div>
                        </div>
                        <div className="flex border rounded-md shadow-inner-custom2 w-28 py-0.5 items-center justify-around">
                            <div>
                                <Image src={xd} alt="icon"/>
                            </div>
                            <div className="font-normal">
                                Adobe XD
                            </div>
                        </div>
                    </div>
                </div>
                {/* preferred langauge */}
                <div className="flex h-14 flex-col justify-between">
                    <div className="font-normal text-slate-500">
                        Preferred Language
                    </div>
                    <div className="font-normal">
                        English
                    </div>
                </div>
                {/* Type */}
                <div className="flex h-14 flex-col justify-between">
                    <div className="font-normal text-slate-500">
                        Type
                    </div>
                    <div className="font-normal">
                        Full time
                    </div>
                </div>
                <div className="flex h-14 flex-col justify-between">
                    <div className="font-normal text-slate-500	">
                        Years of Experience
                    </div>
                    <div className="font-normal">
                        3+ Years of Experience
                    </div>
                </div>
            </div>
        </div>
    )
}