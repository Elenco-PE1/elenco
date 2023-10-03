"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
	const { data, status } = useSession();

	if (data && data.user && status === "authenticated") {
		redirect("/");
	}

	return (
		<main>
			<button onClick={() => signIn("google")}>
				Sign In with Google
			</button>
		</main>
	);
}
