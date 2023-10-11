import { ChevronRightIcon, ChevronDownIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";
import { Separator } from "./ui/separator";
import { Tabs, TabsTrigger } from "./ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";

export const Folder = ({
	folderIndex,
	teamDoc,
	newFile,
	currentTab,
	setCurrentFile,
	setCurrentFolder,
	settingTab,
}: {
	folderIndex: number;
	teamDoc: number[][],
	newFile: number[],
	currentTab: number;
	setCurrentFile: Dispatch<SetStateAction<number>>;
	setCurrentFolder: Dispatch<SetStateAction<number>>;
	settingTab: number[],
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Tabs defaultValue={`${settingTab[0]}`}>
			<Collapsible
				open={isOpen}
				onOpenChange={setIsOpen}
				className="w-full"
			>
				<div className="flex items-center gap-2">
					<CollapsibleTrigger asChild>
						<Button variant="ghost" size="sm" className="p-0">
							{!isOpen ? (
								<ChevronRightIcon
									width={18}
									className="transition-all"
								/>
							) : (
								<ChevronDownIcon
									width={18}
									className="transition-all"
								/>
							)}
						</Button>
					</CollapsibleTrigger>
					<h4 className="text-sm whitespace-nowrap font-semibold">
						Team Documentation {folderIndex+1}
					</h4>
				</div>
				<CollapsibleContent className="transition-all">
					<TabsList>
						{teamDoc[folderIndex].slice(0, newFile[folderIndex]).map((filevalue, id) => (
							<TabsTrigger
								value={`${folderIndex+id}`}
								className="transition-all flex h-7 items-center rounded-none rounded-r-md ml-6 space-x-2 text-sm bg-transparent p-0 data-[state=active]:bg-muted-foreground hover:bg-muted-foreground  hover:cursor-pointer"
								key={id}
								onClick={() => {
									setCurrentFile(id);
									setCurrentFolder(folderIndex);
									let temp = settingTab
									temp[currentTab] = id
								}}
							>
								<Separator orientation="vertical" />
								<p className="text-sm flex items-center rounded-sm w-full h-full pl-2">
									Document {id + 1}
								</p>
							</TabsTrigger>
						))}
					</TabsList>
				</CollapsibleContent>
			</Collapsible>
		</Tabs>
	);
};
