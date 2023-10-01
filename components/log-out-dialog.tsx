"use client"
import { Button } from "./ui/button"
import { DialogFooter, DialogContent, DialogTitle } from "./ui/dialog"

export const LogOutDialog = () => {
    return (
        <DialogContent className="flex flex-col items-center">
            <DialogTitle className="text-center">Are you sure you want to log out?</DialogTitle>
            <DialogFooter>
                <Button variant={"destructive"}>Log Out</Button>
            </DialogFooter>
        </DialogContent>
    )
}