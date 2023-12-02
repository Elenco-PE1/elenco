"use client";
import {
	ArrowRightOnRectangleIcon,
	Cog6ToothIcon,
	DocumentTextIcon,
	InformationCircleIcon,
	QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Menubar, MenubarMenu } from "./ui/side-menubar";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { LogOutDialog } from "./log-out-dialog";
import { SettingsBox } from "./settings-box";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ProfileBox } from "./profile-box";
import { Dispatch, SetStateAction, useState } from "react";

export const SideNavigationBar = ({ setShowFileExp }: { setShowFileExp: Dispatch<SetStateAction<boolean>>}) => {
	return (
		<Menubar>
			<div className="flex flex-col gap-3 my-2 items-center">
				<MenubarMenu>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>								
								<DocumentTextIcon
									width={22}
									onClick={() => setShowFileExp(prev => !prev)}
									className="stroke-muted-foreground transition-colors hover:stroke-primary-foreground hover:cursor-pointer"
								/>
							</TooltipTrigger>
							<TooltipContent
							side="right"
							>
								<p>File Explorer</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</MenubarMenu>
			</div>

			<div className="flex flex-col gap-3 my-2 items-center">
				<MenubarMenu>
					<Dialog>
						<DialogTrigger className="hover:cursor-default">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Avatar className="h-5 w-5 hover:cursor-pointer">
											<AvatarImage src={""} />
											<AvatarFallback className="bg-transparent border-2 text-xs font-semibold">
												S
											</AvatarFallback>
										</Avatar>
									</TooltipTrigger>
									<TooltipContent
										className="mt-4"
										side="bottom"
									>
										<p>Profile</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</DialogTrigger>

						<ProfileBox />
					</Dialog>
				</MenubarMenu>

				<MenubarMenu>
					<Dialog>
						<DialogTrigger>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<ArrowRightOnRectangleIcon
											width={22}
											className="rotate-180 stroke-muted-foreground transition-colors hover:stroke-primary-foreground hover:cursor-pointer"
										/>
									</TooltipTrigger>
									<TooltipContent side="right">
										<p>Log Out</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</DialogTrigger>

						<LogOutDialog />
					</Dialog>
				</MenubarMenu>

				<MenubarMenu>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link href={"/"}>
									<InformationCircleIcon
										width={22}
										className="stroke-muted-foreground transition-colors hover:stroke-primary-foreground hover:cursor-pointer"
									/>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								<p>Information Page</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</MenubarMenu>

				<MenubarMenu>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link href={"/"}>
									<QuestionMarkCircleIcon
										width={22}
										className="stroke-muted-foreground transition-colors hover:stroke-primary-foreground hover:cursor-pointer"
									/>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								<p>FAQs</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</MenubarMenu>

				<MenubarMenu>
					<Dialog>
						<DialogTrigger>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Cog6ToothIcon
											width={22}
											className="stroke-muted-foreground transition-colors hover:stroke-primary-foreground hover:cursor-pointer"
										/>
									</TooltipTrigger>
									<TooltipContent side="right">
										<p>Settings</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</DialogTrigger>

						<SettingsBox />
					</Dialog>
				</MenubarMenu>
			</div>
		</Menubar>
	);
};
