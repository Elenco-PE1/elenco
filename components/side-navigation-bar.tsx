"use client";
import {
	ArrowRightOnRectangleIcon,
	Cog6ToothIcon,
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
import { UserButton, useUser } from "@clerk/nextjs";

export const SideNavigationBar = () => {
	const { isSignedIn, isLoaded, user } = useUser();

	return (
		<Menubar>
			<MenubarMenu>
				<Dialog>
					<DialogTrigger className="hover:cursor-default">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									{isLoaded && (isSignedIn || user) && (
										<Avatar className="h-6 w-6 my-4 hover:cursor-pointer">
											<AvatarImage src={user.imageUrl} />
											<AvatarFallback className="bg-transparent border-2 text-xs font-semibold">
												{user.firstName}
											</AvatarFallback>
										</Avatar>
									)}
								</TooltipTrigger>
								<TooltipContent className="mt-4" side="bottom">
									<p>Profile</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</DialogTrigger>

					<ProfileBox />
				</Dialog>
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
