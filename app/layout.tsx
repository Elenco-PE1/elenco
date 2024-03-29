import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100","200","300","400","500","600","700","800","900"],
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
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
