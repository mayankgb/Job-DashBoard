"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export function CusotmButton(){
    const[isFollow,setIsFollow] = useState<Boolean>(false)
    const {toast} = useToast()

    const handleClick = async ()=>{
        setIsFollow(!isFollow);
        toast({
            description:!isFollow?"following!":"Not following!",
            className:"bg-white",
            duration:1000
        })
    }

    return(
        <Button onClick={handleClick} className="shadow-custom bg-customBlue py-4 font-bold w-15 rounded-md h-4 text-blue-700">{isFollow?"Following":"Follow"}</Button>
    )
}