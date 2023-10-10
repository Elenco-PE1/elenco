import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { dark, neobrutalism } from "@clerk/themes";

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
			<ClerkProvider
				afterSignInUrl="/dashboard"
				signInUrl="/sign-in"
				signUpUrl="/sign-up"
				appearance={{ baseTheme: dark }}
			>
				<body className={poppins.className}>{children}</body>
			</ClerkProvider>
		</html>
	);
}
