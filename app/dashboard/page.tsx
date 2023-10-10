"use client";
import { BreadcrumbsBar } from "@/components/breadcrumbs-bar";
import { Editor } from "@/components/editor";
import { FileExplorer } from "@/components/file-explorer";
import { NavigationBar } from "@/components/navigation-bar";
import { SideNavigationBar } from "@/components/side-navigation-bar";
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
			<div className="absolute left-[260px] top-[64px] w-auto h-auto">
				<BreadcrumbsBar currentFolder={currentFolder} currentFile={currentFile}  />
				<Editor />
			</div>
		</main>
	);
}
