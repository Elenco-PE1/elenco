"use client"
import { Button } from "./ui/button"
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"

export const SettingsBox = () => {
    return (
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
      </DialogContent>
    )
}