import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "./ui/command";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const members = [
	{
		name: "Anushree Jaiswal",
		email: "anushreejaiswal.ghs@gmail.com",
		fallBack: "AJ",
		role: "Owner",
	},
	{
		name: "Khushal Bhardwaj",
		email: "khushalbhardwaj@gmail.com",
		fallBack: "KB",
		role: "Member",
	},
	{
		name: "Ishank Lalwani",
		email: "ishanklalwani@gmail.com",
		fallBack: "IL",
		role: "Member",
	},
	{
		name: "Shashwat Dimri",
		email: "shashwatdimri@gmail.com",
		fallBack: "SD",
		role: "Member",
	},
	{
		name: "Shubh Mehrotra",
		email: "shubhmehrotra@gmail.com",
		fallBack: "SM",
		role: "Member",
	},
];

export function TeamMembers() {
	return (
		<Card className="h-full pb-2 rounded-none border-none">
			<CardHeader>
				<CardTitle>Team Members</CardTitle>
				<CardDescription>
					Invite your team members to collaborate.
				</CardDescription>
			</CardHeader>
			<ScrollArea className="h-[480px]">
				<CardContent className="grid gap-8">
					{members.map(({ name, email, fallBack, role }, id) => (
						<div className="flex flex-col gap-2 space-x-2">
							<div className="flex items-center space-x-2">
								<Avatar className="h-7 w-7">
									<AvatarImage src="/avatars/01.png" />
									<AvatarFallback className="text-xs">
										{fallBack}
									</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-sm font-medium leading-none">
										{name}
									</p>
									<p className="text-xs text-muted-foreground">
										{email}
									</p>
								</div>
							</div>

							<div className="flex justify-between">
								<p className="text-md font-medium">{role}</p>
								<Button
									variant={"ghost"}
									className="group h-6 text-xs font-normal flex gap-2 items-center"
								>
									Edit
									<PencilIcon
										width={12}
										className="group-hover:fill-secondary transition-colors"
									/>
								</Button>
							</div>

							<Separator className="mb-1" />
						</div>
					))}
				</CardContent>
			</ScrollArea>
		</Card>
	);
}
