"use client";

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

import * as Ably from "ably";
import { AblyProvider, useChannel } from "ably/react";
import {
	FormEvent,
	KeyboardEventHandler,
	useEffect,
	useRef,
	useState,
} from "react";
import { useAuth, useOrganization, useUser } from "@clerk/nextjs";
import { api } from "@/lib/axios";

import { BodyValidator } from "@/lib/validators";

export default function CommentBox() {
	const client = new Ably.Realtime.Promise({ authUrl: "/api/chat" });

	return (
		<AblyProvider client={client}>
			<Box />
		</AblyProvider>
	);
}

const formatter = new Intl.DateTimeFormat("en-US", {
	hour: "2-digit",
	minute: "2-digit",
	day: "numeric",
	month: "short",
});

export const Box = () => {
	const { channel, ably } = useChannel(
		"chat-demo",
		async (message: Ably.Types.Message) => {
			setMessages([...receivedMessages, message]);
		}
	);

	const { user, isLoaded, isSignedIn } = useUser();
	const { organization, memberships } = useOrganization();

	if (!user || !isSignedIn || !isLoaded || !organization) return null;

	let inputBox = useRef<HTMLInputElement>(null);

	const [messageText, setMessageText] = useState("");
	const [receivedMessages, setMessages] = useState<Ably.Types.Message[]>([]);
	const messageTextIsEmpty = messageText.trim().length === 0;

	channel
		.history()
		.then((data: any) => {
			if (data.items.length === 0) return;

			setMessages((data.items as Array<any>).reverse());
		})
		.catch((error: any) => console.error(error));

	const sendChatMessage = async (messageText: string) => {
		channel.publish({
			name: "chat-message",
			data: {
				name: user.firstName,
				imageUrl: user.imageUrl,
				message: messageText,
				time: new Date().toISOString(),
			},
		});
		setMessageText("");

		const payload: BodyValidator = {
			recipients: (await organization.getMemberships()).map(
				membership => membership.publicUserData.userId!
			),
			actorId: user.id,
			actorName: user.firstName || "Team Member",
		};

		await api.post("/chat/notify", payload);

		inputBox.current!.focus();
	};

	const handleFormSubmission = (event: FormEvent) => {
		event.preventDefault();
		sendChatMessage(messageText);
	};

	const messages = receivedMessages.map((message, index) => {
		const author =
			message.connectionId === ably.connection.id ? "me" : "other";

		return (
			<div key={index} className="grid gap-1 py-2 px-1">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<Avatar className="h-5 w-5">
							<AvatarImage src={message.data.imageUrl} />
							<AvatarFallback className="text-[10px]">
								{message.name.slice(2)}
							</AvatarFallback>
						</Avatar>
						<p className="text-xs font-medium leading-none">
							{message.data.name}
						</p>
					</div>

					<p className="text-[10px] text-opacity-75">
						{formatter.format(new Date(message.data.time))}
					</p>
				</div>

				<div className=" ml-7 text-sm">{message.data.message}</div>
			</div>
		);
	});

	const messageEndRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (messageEndRef.current) {
			messageEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	});

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
						<div className="grid gap-4">{messages}</div>
						<div ref={messageEndRef}></div>
					</div>
				</ScrollArea>

				<form
					onSubmit={handleFormSubmission}
					className="flex items-center w-full"
				>
					<Input
						className="rounded-md w-full"
						value={messageText}
						onChange={e => setMessageText(e.target.value)}
						placeholder="Enter comment ..."
						ref={inputBox}
					/>
					<Button
						variant={"ghost"}
						className="group flex items-center p-0w-[35px]"
						type="submit"
						disabled={messageTextIsEmpty}
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
