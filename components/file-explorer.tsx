"use client";

import { Folder } from "./folders";
import { ScrollArea } from "./ui/scroll-area";

export const FileExplorer = () => {
	const folders = [1, 2, 3];
	return (
		<div className="w-[220px] border-r-[1px] border-muted-foreground h-screen mt-16 ml-10 p-2 bg-primary text-muted">
			<h3 className="font-medium text-lg mt-2 mb-2">Team Vault</h3>
			<ScrollArea className="h-[575px]">
				{folders.map((value, id) => (
					<Folder key={id} value={value} />
				))}
			</ScrollArea>
		</div>
	);
};
