import { Example } from "@/components/example";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main>
			<h1>Elenco</h1>
			<Button>Example Button</Button>

			<ModeToggle />

			<Example />
		</main>
	);
}
