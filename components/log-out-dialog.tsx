"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { DialogFooter, DialogContent, DialogTitle } from "./ui/dialog";

export const LogOutDialog = () => {
	return (
		<DialogContent className="flex flex-col items-center">
			<DialogTitle className="text-center">
				Are you sure you want to log out?
			</DialogTitle>
			<DialogFooter>
				<Button variant={"destructive"} onClick={() => signOut()}>
					Log Out
				</Button>
			</DialogFooter>
		</DialogContent>
	);
};
