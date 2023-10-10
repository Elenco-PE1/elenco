"use client";

import { useUser } from "@clerk/nextjs";
import { DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

export const ProfileBox = () => {
	const { isSignedIn, isLoaded, user } = useUser();

	if (!isSignedIn || !isLoaded || !user) return null;

	return (
		<DialogContent className="flex flex-col items-center">
			<DialogTitle className="text-center">
				{user.firstName}'s Profile
			</DialogTitle>

			<DialogDescription>
				<div className="flex items-center justify-between gap-5">
					<Link href={"/user-profile"}>
						<Button>Manage User Profile</Button>
					</Link>
					<Link href={"/organization-profile"}>
						<Button>Manage Organization Profile</Button>
					</Link>
				</div>
			</DialogDescription>
		</DialogContent>
	);
};
