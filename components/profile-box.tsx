"use client";

import { useUser } from "@clerk/nextjs";
import { DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

export const ProfileBox = () => {
	const { isSignedIn, isLoaded, user } = useUser();

	if (!isSignedIn || !isLoaded || !user) return null;

	return (
		<DialogContent className="flex flex-col items-center">
			<DialogTitle className="text-center">
				{user.firstName}'s Profile
			</DialogTitle>

			{user.primaryEmailAddress && (
				<DialogDescription>
					{user.primaryEmailAddress.emailAddress}
				</DialogDescription>
			)}
		</DialogContent>
	);
};
