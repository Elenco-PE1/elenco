// import { createEnv } from "@t3-oss/env-core";
// import { z } from "zod";

// export const env = createEnv({
// 	/**
// 	 * Specify what prefix the client-side variables must have.
// 	 * This is enforced both on type-level and at runtime.
// 	 */
// 	// clientPrefix: "PUBLIC_",
// 	server: {
// 		DATABASE_URL: z.string().url(),
// 	},
// 	client: {
// 		KNOCK_PUBLIC_API_KEY: z.string().min(1),
// 		KNOCK_FEED_CHANNEL_ID: z.string().min(1),
// 	},
// 	/**
// 	 * What object holds the environment variables at runtime.
// 	 * Often `process.env` or `import.meta.env`
// 	 */
// 	runtimeEnv: process.env,
// });
