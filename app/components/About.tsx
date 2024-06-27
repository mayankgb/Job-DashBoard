export default function About(){
    return (
        <div className="flex relative items-center border h-[25rem]">
            <div className="absolute left-20 flex flex-col justify-between h-[22rem] w-[95%] ">
                {/* About the job */}
                <div className="flex flex-col h-32 justify-between">
                    <div className="font-normal text-slate-500">
                        About the job
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="font-normal">
                            1. Handle the UI/UX research design
                        </div>
                        <div className="font-normal">
                            2. Work on researching on latest web applications designs & trends
                        </div>
                        <div className="font-normal">
                            3. Work on conceptualizing and visualizing
                        </div>
                        <div className="font-normal">
                            4. Work on creating graphics content and other graphic related works
                        </div>
                    </div>
                </div>
                {/* Benefits */}
                <div className="flex flex-col w-40 justify-between">
                    <div className="font-normal">
                        Benefits:
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center justify-around">
                            <Point/>
                            <div className="font-normal w-36">
                                Health insurance
                            </div>
                        </div>
                        <div className="flex items-center justify-around">
                            <Point/>
                            <div className="font-normal w-36">
                                Provident Fund
                            </div>
                        </div>
                    </div>
                </div>
                {/* Schedule */}
                <div className="flex flex-col w-40 justify-between">
                    <div className="font-normal">
                        Schedule:
                    </div>
                    <div className="flex items-center justify-around">
                        <Point/>
                        <div className="font-normal w-36">
                            Day shift
                        </div>
                    </div>
                </div>
                {/* pay types */}
                <div className="flex w-52 h-10 flex-col justify-between">
                    <div className="font-normal">
                        Supplemental pay types:
                    </div>
                    <div className="flex w-44 items-center justify-around">
                        <Point/>
                        <div className="font-normal">
                            Performance bonus...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Point(){
    return(
        <div className="h-1 w-1 rounded-full bg-slate-700">

        </div>
    )
}