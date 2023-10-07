"use client";

import { DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

export const ProfileBox = () => {
	return (
		<DialogContent className="flex flex-col items-center">
			<DialogTitle className="text-center">User's Profile</DialogTitle>

			<DialogDescription>user@gmail.com</DialogDescription>
		</DialogContent>
	);
};
