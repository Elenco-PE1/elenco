import { SideNavigationBar } from "@/components/side-navigation-bar";

export default function Home() {
	return (
		<main className="bg-foreground text-secondary min-h-screen flex">
			<SideNavigationBar />
			<h1 className="">Elenco</h1>
		</main>
	);
}
