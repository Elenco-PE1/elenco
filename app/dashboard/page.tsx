"use client";
import { BreadcrumbsBar } from "@/components/breadcrumbs-bar";
import { Editor } from "@/components/editor";
import { FileExplorer } from "@/components/file-explorer";
import { NavigationBar } from "@/components/navigation-bar";
import { SideNavigationBar } from "@/components/side-navigation-bar";
import { useState } from "react";

export default function Dashboard() {
	const rows = 20;
	const columns = 20;
	
	const teamDoc = Array.from({ length: rows }, () => 
				new Array(columns).fill(0));

	const [newFile, setNewFile] = useState([3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	const [newFolder, setNewFolder] = useState(3)
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
	const [showFileExp, setShowFileExp] = useState(false)

	return (
		<main className="bg-foreground text-secondary h-screen w-screen flex flex-col">
			<SideNavigationBar />
			<NavigationBar
				tabBox={tabBox}
				setCurrentTab={setCurrentTab}
				settingTab={settingTab}
				currentFolder={currentFolder}
				newFile={newFile}
				setNewFile={setNewFile}
				newFolder={newFolder}
				setNewFolder={setNewFolder}
				setShowFileExp={setShowFileExp}
			/>
			{showFileExp && <FileExplorer
				teamDoc={teamDoc}
				newFile={newFile}
				newFolder={newFolder}
				currentTab={currentTab}
				setCurrentFile={setCurrentFile}
				setCurrentFolder={setCurrentFolder}
                settingTab={settingTab}
			/>}
			<div className="absolute left-[260px] top-[64px] w-auto h-auto">
				<BreadcrumbsBar currentFolder={currentFolder} currentFile={currentFile}  />
				<Editor />
			</div>
		</main>
	);
}
