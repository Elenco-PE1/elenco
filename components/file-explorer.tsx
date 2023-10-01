"use client";

import { Folder } from "./folders";

export const FileExplorer = () => {
	const folders = [1, 2, 3];
	return (
		<div className="w-[220px] border-r-[1px] border-muted-foreground h-screen mt-16 ml-10 p-2 bg-primary text-muted">
			<h3 className="font-medium text-lg mb-3">Team Vault</h3>
			{folders.map((value, id) => (
				<Folder key={id} />
			))}
		</div>
	);
};
