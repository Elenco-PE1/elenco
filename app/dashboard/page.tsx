"use client";
import { FileExplorer } from "@/components/file-explorer";
import { NavigationBar } from "@/components/navigation-bar";
import { SideNavigationBar } from "@/components/side-navigation-bar";
import { Workspace } from "@/components/workspace";
import { useState } from "react";

export default function Dashboard() {
	const ar = [[1, 2, 3], [1], []];
	const tabBox = ["New Tab", "New Tab", "New Tab", "New Tab", "New Tab"];
	const [currentFolder, setCurrentFolder] = useState(0);
	const [currentFile, setCurrentFile] = useState(0);
	const [currentTab, setCurrentTab] = useState(0);
	const [settingTab, _setSettingTab] = useState([
		currentFile,
		currentFile,
		currentFile,
		currentFile,
		currentFile,
	]);

	return (
		<main className="bg-foreground text-secondary h-screen w-screen flex flex-col">
			<SideNavigationBar />
			<NavigationBar
				tabBox={tabBox}
				setCurrentTab={setCurrentTab}
				settingTab={settingTab}
			/>
			<FileExplorer
				ar={ar}
				currentTab={currentTab}
				setCurrentFile={setCurrentFile}
				setCurrentFolder={setCurrentFolder}
                settingTab={settingTab}
			/>
			<Workspace currentFolder={currentFolder} currentFile={currentFile} />
		</main>
	);
}
