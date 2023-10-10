"use client";
import {
	ChatBubbleLeftRightIcon,
	CloudIcon,
	ShareIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import { SheetContent } from "./ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ShareDocument } from "./share-document";
import { TeamMembers } from "./team-members";

const CommentBox = dynamic(() => import("./comment-box"), {
	ssr: false,
});

import { ExportBox } from "./export-box";
import dynamic from "next/dynamic";

export const TeamDashboard = () => {
	return (
		<SheetContent side={"right"} className="bg-primary">
			<Tabs defaultValue="share" className="w-full h-full">
				<TabsList className="flex w-full h-12 px-2 pt-2 rounded-none border-b-[2px] border-muted-foreground">
					<TabsTrigger
						value="export"
						className="group mb-[-1.5px] w-full flex items-center justify-center bg-transparent border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-secondary data-[state=active]:ring-0"
					>
						<CloudIcon
							width={20}
							className="group-data-[state=active]:fill-secondary "
						/>
					</TabsTrigger>

					<TabsTrigger
						value="chat"
						className="group mb-[-1.5px] w-full flex items-center justify-center bg-transparent border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-secondary data-[state=active]:ring-0"
					>
						<ChatBubbleLeftRightIcon
							width={20}
							className="group-data-[state=active]:fill-secondary"
						/>
					</TabsTrigger>

					<TabsTrigger
						value="team"
						className="group mb-[-1.5px] w-full flex items-center justify-center bg-transparent border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-secondary data-[state=active]:ring-0"
					>
						<UsersIcon
							width={20}
							className="group-data-[state=active]:fill-secondary"
						/>
					</TabsTrigger>

					<TabsTrigger
						value="share"
						className="group mb-[-1.5px] w-full flex items-center justify-center bg-transparent border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-secondary data-[state=active]:ring-0"
					>
						<ShareIcon
							width={20}
							className="group-data-[state=active]:fill-secondary"
						/>
					</TabsTrigger>
				</TabsList>

				<TabsContent
					value="export"
					className="bg-foreground text-secondary h-full w-full"
				>
					<ExportBox />
				</TabsContent>

				<TabsContent
					value="chat"
					className="bg-foreground text-secondary h-full w-full"
				>
					<CommentBox />
				</TabsContent>

				<TabsContent
					value="team"
					className="bg-foreground text-secondary h-full w-full"
				>
					<TeamMembers />
				</TabsContent>

				<TabsContent
					value="share"
					className="bg-foreground text-secondary h-full w-full"
				>
					<ShareDocument />
				</TabsContent>
			</Tabs>
		</SheetContent>
	);
};
