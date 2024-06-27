import { Button } from "@/components/ui/button";
import trash from "@/public/trash.png"
import Image from "next/image";
import edit from "@/public/edit.png"
import Applicants from "@/public/application.png"
import views from "@/public/views.png"
import message from "@/public/message.png"
import matches from "@/public/matched.png"

export function JobData(){
    return(
        <div className="flex justify-center p-5 h-full">
                <div className="flex flex-col h-72  w-[90%] justify-between">
                    <div className="flex justify-between">
                        <div className="flex bg-lightOrange items-center border rounded-md px-2 border-customOrange justify-center">
                            <div>
                            <Image src={trash} alt="icon"/>
                            </div>
                            <Button className="text-customOrange">Delete job</Button>
                        </div>
                        <div className="flex px-2 py-1 items-center w-32 rounded-md bg-customOrange border-2 border-lightOrange justify-center">
                            <div>
                            <Image src={edit} alt="icon"/>
                            </div>
                            <Button className="text-white">Edit job</Button>
                        </div>
                    </div>
                    <div className="flex flex-col  h-56 justify-between">
                        <div className="flex justify-between items-center h-14 border-b">
                            <div className="flex items-center w-28 justify-between">
                                <div>
                                <Image src={Applicants} alt="icon"/>
                                </div>
                                <div className="font-normal">
                                    Applicants
                                </div>
                            </div>
                            <div>
                                400
                            </div>
                        </div>
                        {/* matches */}
                        <div className="flex justify-between items-center h-14 border-b">
                            <div className="flex items-center w-24 justify-between">
                                <div>
                                <Image src={matches} alt="icon"/>
                                </div>
                                <div className="font-normal">
                                    Matches
                                </div>
                            </div>
                            <div>
                                100
                            </div>
                        </div>
                        {/* Messages */}
                        <div className="flex justify-between items-center h-14 border-b">
                            <div className="flex items-center w-28 justify-between">
                                <div>
                                <Image src={message} alt="icon"/>
                                </div>
                                <div className="font-normal">
                                    Messages
                                </div>
                            </div>
                            <div>
                                147
                            </div>
                        </div>
                        {/* Views */}
                        <div className="flex justify-between items-center h-14 border-b">
                            <div className="flex items-center w-20 justify-between">
                                <div>
                                <Image src={views} alt="icon"/>
                                </div>
                                <div className="font-normal">
                                    Views
                                </div>
                            </div>
                            <div>
                                800
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}