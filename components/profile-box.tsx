"use client";

import { DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

export const ProfileBox = () => {
	return (
		<DialogContent className="flex flex-col items-center">
			<DialogTitle className="text-center">
				Anushree's Profile
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
