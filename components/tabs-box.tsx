import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import { useState } from "react"

export const TabsBox = () => {
    const [createdTabs, setCreatedTabs] = useState(["Document 1"])

    const handlePlus = () => {
        if(createdTabs.length < 5) {
            let newTabs = createdTabs.concat(["New Tab " + (createdTabs.length)])
            setCreatedTabs(newTabs)
        }
    }

    const handleX = (name: string) => {
        if(createdTabs.length > 1) {
            let newTabs = createdTabs.filter((item) => item !== name)
            setCreatedTabs(newTabs)
        }
    }

    return (
        <Tabs defaultValue={createdTabs[0]} className="w-full h-full">
            <TabsList className="flex gap-2 w-auto">
                {createdTabs.map((value, index) => (
                    <Tab name={value} handleX={handleX} key={index} />
                ))}
                <Button variant={'ghost'} size="sm" className="p-0 flex items-center text-accent"
                onClick={handlePlus}
                ><PlusIcon width={20} className="hover:stroke-[3px]" /></Button>
            </TabsList>
        </Tabs>
    )
}

export const Tab = ({ name, handleX }: { name: string, handleX: (name: string) => void }) => {    
    return (
        <TabsTrigger value={name} className="transition-opacity ease-in-out">
            {name}
            <XMarkIcon width={16} className="z-10 hover:cursor-pointer hover:stroke-[3px]" onClick={() => handleX(name)} />
        </TabsTrigger>
    )
}