import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="relative w-full h-fit p-[80px] bg-accent-foreground flex justify-between">
            <div className="flex flex-col">
                <h1 className="text-4xl font-semibold -tracking-wide">Elenco</h1>
                <p className="text-sm">Collaborate Creatively</p>
                <Link href={'https://github.com/Elenco-PE1/elenco'} target="_blank" className="mt-4">GitHub Repo</Link>
            </div>

            <div className="flex flex-col">
                <Link href={'/'} className="hover:font-semibold">Home</Link>
                <Link href={'/dashboard'} className="hover:font-semibold">Dashboard</Link>
                <Link href={'/#about-us'} className="hover:font-semibold">About Us</Link>
                <Link href={'/#faq'} className="hover:font-semibold">FAQs</Link>
                <Link href={'/#contact-us'} className="hover:font-semibold">Contact Us</Link>                
            </div>

            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 text-muted-foreground select-none">© All rights reserved by Elenco</p>
        </footer>
    )
}