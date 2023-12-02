"use client";

import { Dispatch, SetStateAction } from "react";
import { Folder } from "./folders";
import { ScrollArea } from "./ui/scroll-area";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { FolderPlusIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export const FileExplorer = ({
	teamDoc,
	newFile,
	newFolder,
	currentTab,
	setCurrentFile,
	setCurrentFolder,
	settingTab,
}: {
	teamDoc: number[][],
	newFile: number[],
	newFolder: number,
	currentTab: number;
	setCurrentFile: Dispatch<SetStateAction<number>>;
	setCurrentFolder: Dispatch<SetStateAction<number>>;
	settingTab: number[],
}) => {
	return (
		<div className="w-[220px] border-r-[1px] border-muted-foreground max-h-full ml-9 bg-primary text-muted transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500">
			<div className="flex items-center justify-between p-2 border-b-[1px] border-muted-foreground">
				<h3 className="text-sm">File Explorer</h3>

				<div className="flex items-center justify-center gap-2 h-fit">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<div
									onClick={() =>
										console.log("handle new folder")
									}
								>
									<FolderPlusIcon
										width={16}
										className="stroke-primary-foreground hover:cursor-pointer"
									/>
								</div>
							</TooltipTrigger>
							<TooltipContent
							side="bottom"
							>
								<p>Add Folder</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<div
									onClick={() =>
										console.log("handle new file")
									}
								>
									<DocumentPlusIcon
										width={16}
										className="stroke-primary-foreground hover:cursor-pointer"
									/>
								</div>
							</TooltipTrigger>
							<TooltipContent
							side="bottom"
							>
								<p>Add File</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</div>

			<ScrollArea className="h-[575px] p-2">
				{teamDoc.slice(0, newFolder).map((value, id) => (
					<Folder
						key={id}
						folderIndex={id}
						teamDoc={teamDoc}
						newFile={newFile}
						currentTab={currentTab}
						setCurrentFile={setCurrentFile}
						setCurrentFolder={setCurrentFolder}
						settingTab={settingTab}
					/>
				))}
			</ScrollArea>
		</div>
	);
};
