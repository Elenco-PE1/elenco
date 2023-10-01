"use client"
import { DocumentIcon, DocumentPlusIcon, DocumentTextIcon, FolderPlusIcon, MagnifyingGlassIcon, SquaresPlusIcon } from "@heroicons/react/24/outline"
import { Squares2X2Icon } from "@heroicons/react/24/solid"
import { Menubar, MenubarMenu } from "./ui/menubar"
import { Input } from "./ui/input"
import { useState } from "react"
import { TabsBox } from "./tabs-box"
import { Toggle } from "./ui/toggle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

export const NavigationBar = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [showSheet, setShowSheet] = useState(false)
    const [showFileExplorer, setShowFileExplorer] = useState(false)
    return (
        <Menubar>
            <div className="min-w-[220px] flex gap-4 pl-3">
                <MenubarMenu>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Toggle onPressedChange={() => setShowFileExplorer((prev) => !prev)}>
                                    {!showFileExplorer ?
                                    <div className='group'>
                                        <DocumentIcon width={24} className="group-hover:hidden my-3 transition-all" />
                                        <DocumentTextIcon width={24} className="hidden group-hover:block my-3 transition-all" />
                                    </div> :
                                    <div className='group'>
                                        <DocumentIcon width={24} className="hidden group-hover:block my-3 transition-all" />
                                        <DocumentTextIcon width={24} className="group-hover:hidden my-3 transition-all" />
                                    </div>}
                                </Toggle>
                            </TooltipTrigger>
                            <TooltipContent>
                            <p>File Explorer</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </MenubarMenu>

                <MenubarMenu>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div>
                                    <FolderPlusIcon width={24} className="hover:fill-secondary hover:stroke-primary my-3 transition-all" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                            <p>Add Folder</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </MenubarMenu>

                <MenubarMenu>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div>
                                <DocumentPlusIcon width={24} className="hover:fill-secondary hover:stroke-primary my-3 transition-all" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                            <p>Add File</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </MenubarMenu>
            </div>

            <div className="w-full h-full">
                <TabsBox />
            </div>

            <div className="flex justify-end items-center gap-3 pr-3 min-w-[290px]">
                <MenubarMenu>
                    <div className="flex items-center gap-1">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                <Toggle onPressedChange={() => setShowSearch((prev) => !prev)}>
                                    {!showSearch ? <MagnifyingGlassIcon width={20} className="hover:cursor-pointer my-3 hover:fill-secondary" />:
                                    <MagnifyingGlassIcon width={20} className="cursor-pointer fill-secondary my-3 hover:fill-none" />
                                    }
                                </Toggle>
                                </TooltipTrigger>
                                <TooltipContent>
                                <p>Search</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        
                        {showSearch && <Input type="text" placeholder="Search..." className="transition-transform ease-in-out" />}
                    </div>
                </MenubarMenu>

                <MenubarMenu>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                            <Toggle onPressedChange={() => setShowSheet((prev) => !prev)}>
                                {!showSheet ?
                                <div className='group'>
                                    <SquaresPlusIcon width={24} className="group-hover:hidden my-3 transition-all" />
                                    <Squares2X2Icon width={24} className="hidden group-hover:block my-3 transition-all" />
                                </div> :
                                <div className='group'>
                                    <SquaresPlusIcon width={24} className="hidden group-hover:block my-3 transition-all" />
                                    <Squares2X2Icon width={24} className="group-hover:hidden my-3 transition-all" />
                                </div>}
                            </Toggle>
                            </TooltipTrigger>
                            <TooltipContent>
                            <p>Team Dashboard</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </MenubarMenu>
            </div>
        </Menubar>
    )
}