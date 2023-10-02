"use client";
import { Button } from "./ui/button";
import { DialogFooter, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

export const ProfileBox = () => {
	return (
		<DialogContent className="flex flex-col items-center">
			<DialogTitle className="text-center">
				Anushree Jaiswal's Profile
			</DialogTitle>

            <DialogDescription>
                Your profile details will be displayed here
            </DialogDescription>
		</DialogContent>
	);
};
