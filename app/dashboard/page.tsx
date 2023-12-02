"use client";
import { BreadcrumbsBar } from "@/components/breadcrumbs-bar";
import { FileExplorer } from "@/components/file-explorer";
import { NavigationBar } from "@/components/navigation-bar";
import { SideNavigationBar } from "@/components/side-navigation-bar";
import { useState } from "react";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import('@/components/editor'),{ssr:false})

export default function Dashboard() {
	const rows = 20;
	const columns = 20;
	
	const teamDoc = Array.from({ length: rows }, () => 
				new Array(columns).fill(0));

	const [newFile, setNewFile] = useState([3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
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
	const [showFileExp, setShowFileExp] = useState(true)

	return (
		<main className="box-border bg-foreground text-secondary h-screen max-h-screen w-screen flex">
			{showFileExp && <FileExplorer
				teamDoc={teamDoc}
				newFile={newFile}
				newFolder={newFolder}
				currentTab={currentTab}
				setCurrentFile={setCurrentFile}
				setCurrentFolder={setCurrentFolder}
				settingTab={settingTab}
			/>}
			<div className="flex flex-col w-full">
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
				<div className="w-full pt-2 pl-11 pr-1 h-screen max-h-screen flex flex-col gap-3">
					<BreadcrumbsBar currentFolder={currentFolder} currentFile={currentFile}  />
					<Editor />
				</div>
			</div>
			<SideNavigationBar setShowFileExp={setShowFileExp} />
		</main>
	);
}
