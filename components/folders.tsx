import { ChevronRightIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";
import { Separator } from "./ui/separator";

export const Folder = ({value}: {value: number}) => {
	const [isOpen, setIsOpen] = useState(false);
	const ar = [1, 2, 3, 4, 5, 6];

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
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
					Team Documentation {value}
				</h4>
			</div>
			<CollapsibleContent className="transition-all">
				{ar.map((value, id) => (
					<div
						className="transition-all flex h-7 items-center ml-6 space-x-2 text-sm"
						key={id}
					>
						<Separator orientation="vertical" />
						<p className="text-sm flex items-center rounded-sm w-full h-full pl-2 hover:bg-muted-foreground hover:cursor-pointer">
							Document {value}
						</p>
					</div>
				))}
			</CollapsibleContent>
		</Collapsible>
	);
};
