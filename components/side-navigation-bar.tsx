"use client";
import {
	ArrowRightOnRectangleIcon,
	Cog6ToothIcon,
	InformationCircleIcon,
	QuestionMarkCircleIcon,
	UserGroupIcon,
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

export const SideNavigationBar = () => {
	return (
		<Menubar>
			<MenubarMenu>
				<Link href={"/"} className="my-1">
					<UserGroupIcon
						width={24}
						className="my-3 transition-all hover:fill-secondary"
					/>
				</Link>
			</MenubarMenu>

			<div className="flex flex-col gap-3">
				<MenubarMenu>
					<Dialog>
						<DialogTrigger>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<ArrowRightOnRectangleIcon
											width={22}
											className="rotate-180 transition-all  hover:stroke-2 hover:cursor-pointer"
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
										className="transition-all hover:fill-secondary hover:stroke-primary hover:cursor-pointer"
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
										className="transition-all hover:fill-secondary hover:stroke-primary hover:cursor-pointer"
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
											className="transition-all hover:fill-secondary hover:stroke-primary focus:stroke-primary focus:fill-secondary hover:cursor-pointer"
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
