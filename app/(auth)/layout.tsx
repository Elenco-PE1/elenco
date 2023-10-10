import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="bg-foreground flex flex-col gap-5 p-10 items-center justify-center min-h-screen">
			<div className="flex items-start justify-start">
				<Link href="/dashboard">
					<Button>
						<ChevronLeft className="w-4" />
						Dashboard
					</Button>
				</Link>
			</div>
			{children}
		</main>
	);
}
