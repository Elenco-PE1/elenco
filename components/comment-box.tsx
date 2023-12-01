"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
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
	useState,
} from "react";

export default function CommentBox() {
	return (
		<Box />
	);
}

export const Box = () => {
	const [messageText, setMessageText] = useState("");
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
						<div className="grid gap-4"></div>
					</div>
				</ScrollArea>

				<form
					onSubmit={(e) => e.preventDefault}
					className="flex items-center w-full"
				>
					<Input
						className="rounded-md w-full"
						value={messageText}
						onChange={e => setMessageText(e.target.value)}
						placeholder="Enter comment ..."
					/>
					<Button
						variant={"ghost"}
						className="group flex items-center p-0w-[35px]"
						type="submit"
					>
						<PaperAirplaneIcon
							width={20}
							className="group-hover:fill-secondary transition-colors"
						/>
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};
