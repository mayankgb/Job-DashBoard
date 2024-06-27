"use client"
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const tabs = [
    {
        text:'Job preview',
        href:"/jobpreview"
    },
    {
        text:"Applicants",
        href:"/applicants"
    },
    {
        text:"Match",
        href:"/match",
    },
    {
        text:"Messages",
        href:"/messages"
    }
]


interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  customID?: string,
  href:string
}

const Tab = ({ text, selected, setSelected, customID,href }: TabProps) => {
    const router = useRouter();
  return (
    <button
      onClick={() =>{
        setSelected(text)
        router.push(href)
        }}
      className={` ${
        selected
          ? 'text-red-500 '
          : ' hover:text-gray-900 dark:hover:text-gray-100'
      } relative rounded-md text-xl font-normal pb-5 py-1 text-sm font-medium text-gray-400 transition-colors duration-300 focus-within:outline-red-500/50`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex size-full h-full w-full items-end justify-center"
          layoutId={customID + 'linetab'}
          transition={{ type: 'spring', duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-red-500"></span>
        </motion.div>
      )}
    </button>
  )
}

interface LineTabProps {
  center?: boolean
  customID?: string
}

const LineTabs = ({ center, customID }: LineTabProps) => {
  const [selected, setSelected] = useState<string>(tabs[0].text)
  return (
    <div className='relative h-[4.5rem] pl-4 border-b border-gray-200 dark:border-gray-600'>
        <div  className={cn(
        'absolute h-[4.5rem] left-16 flex  flex-wrap w-[50%] items-end justify-around gap-2',
        center && 'justify-center',
      )}>

{tabs.map((tab,index) => (
        <Tab
          text={tab.text}
          selected={selected === tab.text}
          setSelected={setSelected}
          key={index}
          href={tab.href}
          customID={customID}
        />
      ))}

        </div>
    </div>
  )
}

export default LineTabs