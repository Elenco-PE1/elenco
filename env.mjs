import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	/**
	 * Specify what prefix the client-side variables must have.
	 * This is enforced both on type-level and at runtime.
	 */
	clientPrefix: "PUBLIC_",
	server: {
		DATABASE_URL: z.string().url(),
		CLERK_SECRET_KEY: z.string().min(1),
		ABLY_API_KEY: z.string().min(1)
	},
	client: {
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
	},
	/**
	 * What object holds the environment variables at runtime.
	 * Often `process.env` or `import.meta.env`
	 */
	runtimeEnv: process.env,
});
