"use client";
import Link from "next/link"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Navbar = () => {
    const isSignedIn = true

    return (
        <div className="sticky top-0 left-0 h-[60px] w-full flex items-center justify-between px-4 bg-accent-foreground">
            <Link href={'/'} className="text-xl font-bold tracking-wide w-fit">Elenco</Link>

            <div className="flex justify-center gap-8 w-full">
                <Link href={'/dashboard'} className="border-b-2 mb-[-16px] pb-4 border- border-transparent hover:border-white transition-opacity ease-in-out">Dashboard</Link>
                <Link href={'/#about-us'} className="border-b-2 mb-[-16px] pb-4 border- border-transparent hover:border-white transition-opacity ease-in-out">About</Link>
                <Link href={'/#faq'} className="border-b-2 mb-[-16px] pb-4 border- border-transparent hover:border-white transition-opacity ease-in-out">FAQ</Link>
                <Link href={'/#contact-us'} className="border-b-2 mb-[-16px] pb-4 border- border-transparent hover:border-white transition-opacity ease-in-out">Contact</Link>
            </div>

            <div className="absolute right-0 mr-4 flex gap-2 w-fit">
                {isSignedIn?
                    <Link href={'/dashboard'}>
                        <Avatar className="h-7 w-7 my-4 hover:cursor-pointer">                            
                            <AvatarImage src={""} />
                            <AvatarFallback className="bg-transparent border-2 text-xs font-semibold">
                                S
                            </AvatarFallback>                            
                        </Avatar>
                    </Link>
                :
                    <>
                    {/* sign up button */}
                        <Button variant={'ghost'} className="border border-transparent whitespace-nowrap hover:border-white">Sign Up</Button>
                    {/* sign in button */}
                        <Button variant={'ghost'} className="border border-transparent whitespace-nowrap hover:border-white">Sign In</Button>
                </>}
            </div>
        </div>
    )
}