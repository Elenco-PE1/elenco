import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction, useState } from "react";

export const TabsBox = ({setCurrentTab, tabBox, settingTab}: {setCurrentTab: Dispatch<SetStateAction<number>>, tabBox: string[], settingTab: number[]}) => {
	const [createdTabs, setCreatedTabs] = useState(1);

	const handlePlus = () => {
		setCreatedTabs((prev) => ++prev)
	};

	const handleX = () => {
		setCreatedTabs((prev) => --prev)
	};

	return (
		<Tabs defaultValue={"0"} className="w-full h-full">
			<TabsList className="flex gap-2 w-auto">
				<Button
					variant={"ghost"}
					size="sm"
					className="p-0 flex items-center text-accent"
					onClick={handlePlus}
				>
					<PlusIcon width={20} className="hover:stroke-[3px]" />
				</Button>
				{tabBox.slice(0, createdTabs).map((tabNm, index) => (
					<Tab tabNm={"Document " + (settingTab[index]+1)} setCurrentTab={setCurrentTab} name={index} handleX={handleX} key={index} />
				))}
			</TabsList>
		</Tabs>
	);
};

export const Tab = ({
	tabNm,
	name,
	handleX,
	setCurrentTab
}: {
	tabNm: string,
	name: number;
	handleX: () => void;
	setCurrentTab: Dispatch<SetStateAction<number>>,
}) => {
	return (
		<TabsTrigger value={`${name}`} className="transition-opacity ease-in-out" onClick={() => setCurrentTab(name)}>
			{tabNm}
			<XMarkIcon
				width={16}
				className="z-10 hover:cursor-pointer hover:stroke-[3px]"
				onClick={handleX}
			/>
		</TabsTrigger>
	);
};
