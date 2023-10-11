"use client";

import { Dispatch, SetStateAction } from "react";
import { Folder } from "./folders";
import { ScrollArea } from "./ui/scroll-area";

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
		<div className="w-[220px] border-r-[1px] border-muted-foreground h-screen mt-16 ml-10 p-2 bg-primary text-muted transition-opacity ease-in-out">
			<h3 className="font-medium text-lg mt-2 mb-2">Team Vault</h3>
			<ScrollArea className="h-[575px]">
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
