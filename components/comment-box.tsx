import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
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

const comments = [
	{
		name: "Anushree",
		fallBack: "AJ",
		message: "The documentation needs to be reviewed after modification",
		time: "5:30 pm",
	},
	{
		name: "Khushal",
		fallBack: "KB",
		message: "Made the modifications successfully",
		time: "7:21 pm",
	},
	{
		name: "Ishank",
		fallBack: "IL",
		message: "Reviewed the docs",
		time: "8:02 pm",
	},
];

export const CommentBox = () => {
	return (
		<Card className="h-full pb-2 rounded-none border-none">
			<CardHeader>
				<CardTitle>Comments</CardTitle>
				<CardDescription>
					Write up your collaborative ideas at one place.
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<ScrollArea className="h-[400px]">
					<div className="grid gap-8">
						<div className="grid gap-6">
							{comments
								.slice(0)
								.reverse()
								.map(
									({ name, fallBack, message, time }, id) => (
										<div
											key={id}
											className="grid gap-1 py-2 px-1"
										>
											<div className="flex items-center justify-between">
												<div className="flex items-center space-x-2">
													<Avatar className="h-5 w-5">
														<AvatarImage src="/avatars/01.png" />
														<AvatarFallback className="text-[10px]">
															{fallBack}
														</AvatarFallback>
													</Avatar>
													<p className="text-xs font-medium leading-none">
														{name}
													</p>
												</div>

												<p className="text-[10px] text-muted-foreground">
													{time}
												</p>
											</div>

											<div className=" ml-7 text-sm">
												{message}
											</div>
										</div>
									)
								)}
						</div>
					</div>
				</ScrollArea>

				<div className="flex items-center w-full">
					<Input
						className="rounded-md w-full"
						placeholder="Enter comment ..."
					/>
					<Button
						variant={"ghost"}
						className="group flex items-center p-0w-[35px]"
					>
						<PaperAirplaneIcon
							width={20}
							className="group-hover:fill-secondary transition-colors"
						/>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};
