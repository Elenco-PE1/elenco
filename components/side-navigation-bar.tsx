"use client"
import {ArrowRightOnRectangleIcon, Cog6ToothIcon, DocumentIcon, DocumentTextIcon, InformationCircleIcon, QuestionMarkCircleIcon} from '@heroicons/react/24/outline'
import { Menubar, MenubarMenu } from "./ui/side-menubar"
import { Dialog, DialogTrigger } from './ui/dialog'
import { LogOutDialog } from './log-out-dialog'
import { SettingsBox } from './settings-box'
import Link from 'next/link'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { useState } from 'react'
import { set } from 'zod'

export const SideNavigationBar = () => {
    const [sheetOpened, setSheetOpened] = useState<boolean>(false)
    return (
            <Menubar>
                <MenubarMenu>
                    <div className='group'>
                        <DocumentIcon width={30} className="group-hover:hidden my-3 transition-all" />
                        <DocumentTextIcon width={30} className="hidden group-hover:block my-3 transition-all" />
                    </div>
                </MenubarMenu>

                <div className='flex flex-col gap-3'>
                    <MenubarMenu>
                        <Dialog>
                            <DialogTrigger>
                                <ArrowRightOnRectangleIcon width={22} className="rotate-180 transition-all  hover:stroke-2 hover:cursor-pointer" />
                            </DialogTrigger>

                            <LogOutDialog />  
                        </Dialog>
                    </MenubarMenu>

                    <MenubarMenu>
                        <Link href={'/'}>
                            <InformationCircleIcon width={22} className="transition-all hover:fill-secondary hover:stroke-primary hover:cursor-pointer" />
                        </Link>
                    </MenubarMenu>

                    <MenubarMenu>
                        <Link href={'/'}>
                            <QuestionMarkCircleIcon width={22} className="transition-all hover:fill-secondary hover:stroke-primary hover:cursor-pointer" />
                        </Link>
                    </MenubarMenu>

                    <MenubarMenu>
                        <Dialog>
                            <DialogTrigger>
                                <Cog6ToothIcon width={22} className="transition-all hover:fill-secondary hover:stroke-primary focus:stroke-primary focus:fill-secondary hover:cursor-pointer" />
                            </DialogTrigger>

                            <SettingsBox />
                        </Dialog>
                    </MenubarMenu>
                </div>
            </Menubar>
    )
}