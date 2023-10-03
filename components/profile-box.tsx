"use client";

import { useSession } from "next-auth/react";
import { DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

export const ProfileBox = () => {
	const { data, status } = useSession();

	if (status !== "authenticated" || !data.user) return null;

	return (
		<DialogContent className="flex flex-col items-center">
			<DialogTitle className="text-center">
				{data.user.name}'s Profile
			</DialogTitle>

			<DialogDescription>{data.user.email}</DialogDescription>
		</DialogContent>
	);
};
