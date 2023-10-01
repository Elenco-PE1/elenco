import {ArrowRightOnRectangleIcon, Cog6ToothIcon, InformationCircleIcon, QuestionMarkCircleIcon} from '@heroicons/react/24/outline'
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "./ui/side-menubar"
import { Dialog, DialogTrigger } from './ui/dialog'
import { LogOutDialog } from './log-out-dialog'
import { SettingsBox } from './settings-box'
import Link from 'next/link'

export const SideNavigationBar = () => {
    return (
            <Menubar>
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
            </Menubar>
    )
}