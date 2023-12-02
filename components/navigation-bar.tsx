"use client";
import {
	DocumentIcon,
	DocumentPlusIcon,
	DocumentTextIcon,
	FolderPlusIcon,
	MagnifyingGlassIcon,
	SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { Menubar, MenubarMenu } from "./ui/menubar";
import { Input } from "./ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { TabsBox } from "./tabs-box";
import { Toggle } from "./ui/toggle";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import { Sheet, SheetClose, SheetTrigger } from "./ui/sheet";
import { TeamDashboard } from "./team-dashboard";
import { NotificationBox } from "./notification-box";

export const NavigationBar = ({
	setCurrentTab,
	tabBox,
	settingTab,
	currentFolder,
	newFile,
	setNewFile,
	newFolder,
	setNewFolder,
	setShowFileExp,
}: {
	setCurrentTab: Dispatch<SetStateAction<number>>;
	tabBox: string[];
	settingTab: number[];
	currentFolder: number,
	newFile: number[],
	setNewFile: Dispatch<SetStateAction<number[]>>;
	newFolder: number,
	setNewFolder: Dispatch<SetStateAction<number>>,
	setShowFileExp: Dispatch<SetStateAction<boolean>>
}) => {
	const [showSearch, setShowSearch] = useState(false);
	const [showSheet, setShowSheet] = useState(false);
	const [showFileExplorer, setShowFileExplorer] = useState(true);

	const [isNotificationVisible, setIsNotificationVisible] = useState(false);

	const handleNewFolder = () => {
		if (newFolder <= 20) {
			setNewFolder(++newFolder)
		}
	}

	const handleNewFile = () => {
		if(newFile[currentFolder] <= 20) {
			var temp = [...newFile]
			++temp[currentFolder];
			setNewFile(temp)
		}
	}

	return (
		<Menubar className="">
			<div className="w-full h-full">
				<TabsBox
					setCurrentTab={setCurrentTab}
					tabBox={tabBox}
					settingTab={settingTab}
				/>
			</div>

			<div className="flex justify-end items-center gap-3 pr-3 min-w-[330px]">
				<MenubarMenu>
					{/* organisation switcher */}
				</MenubarMenu>

				<MenubarMenu>
					<div className="flex items-center gap-1">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Toggle
										onPressedChange={() =>
											setShowSearch(prev => !prev)
										}
									>
										{!showSearch ? (
											<MagnifyingGlassIcon
												width={20}
												className="hover:cursor-pointer transition-all hover:fill-secondary"
											/>
										) : (
											<MagnifyingGlassIcon
												width={20}
												className="cursor-pointer transition-all fill-secondary hover:fill-none"
											/>
										)}
									</Toggle>
								</TooltipTrigger>
								<TooltipContent>
									<p>Search</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>

						{showSearch && (
							<Input
								type="text"
								placeholder="Search..."
								className="transition-transform ease-in-out"
							/>
						)}
					</div>
				</MenubarMenu>

				<MenubarMenu>
					<NotificationBox
						isVisible={isNotificationVisible}
						setIsVisible={setIsNotificationVisible}
					/>
				</MenubarMenu>

				<MenubarMenu>
					<Sheet onOpenChange={() => setShowSheet(true)}>
						<SheetTrigger>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<SquaresPlusIcon
											width={24}
											className="transition-colors hover:fill-accent"
										/>
									</TooltipTrigger>
									<TooltipContent>
										<p>Team Dashboard</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</SheetTrigger>
						<TeamDashboard />
					</Sheet>
				</MenubarMenu>
			</div>
		</Menubar>
	);
};
