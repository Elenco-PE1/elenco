"use client";

import { ClipboardIcon } from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";

const members = [
	{
		name: "Anushree Jaiswal",
		email: "anushreejaiswal.ghs@gmail.com",
		fallBack: "AJ",
	},
	{
		name: "Khushal Bhardwaj",
		email: "khushalbhardwaj@gmail.com",
		fallBack: "KB",
	},
	{
		name: "Ishank Lalwani",
		email: "ishanklalwani@gmail.com",
		fallBack: "IL",
	},
	{
		name: "Shashwat Dimri",
		email: "shashwatdimri@gmail.com",
		fallBack: "SD",
	},
	{
		name: "Shubh Mehrotra",
		email: "shubhmehrotra@gmail.com",
		fallBack: "SM",
	},
];

export const ShareDocument = () => {
	return (
		<Card className="h-full pb-2 rounded-none border-none">
			<CardHeader>
				<CardTitle>Share this document</CardTitle>
				<CardDescription>
					Anyone with the link can view this document.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex space-x-1">
					<Input
						value="http://example.com/link/to/document"
						readOnly
					/>
					<Button variant="ghost">
						<ClipboardIcon
							width={20}
							className="hover:fill-secondary transition-colors"
						/>
					</Button>
				</div>

				<Separator className="my-4" />

				<div className="space-y-2">
					<h4 className="text-md font-medium">People with access</h4>

					<ScrollArea className="h-[360px] pr-5">
						<div className="flex flex-col gap-4 px-2">
							{members.map(({ name, email, fallBack }, id) => (
								<div
									className="flex flex-col space-y-2 space-x-1"
									key={id}
								>
									<div className="flex items-center space-x-2">
										<Avatar className="w-7 h-7">
											<AvatarImage src="/avatars/03.png" />
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
									<Select defaultValue="edit">
										<SelectTrigger className="w-full h-8">
											<SelectValue placeholder="Select" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="edit">
												Edit
											</SelectItem>
											<SelectItem value="view">
												View
											</SelectItem>
										</SelectContent>
									</Select>
									<Separator className="my-3" />
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
};
