import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "300",
});

export const metadata: Metadata = {
	title: "Elenco",
	description: "Team Collaboration Knowledge Base Powered by Markdown",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<ClerkProvider>
				<body className={poppins.className}>{children}</body>
			</ClerkProvider>
		</html>
	);
}
