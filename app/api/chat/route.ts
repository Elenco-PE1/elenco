import { env } from "@/env.mjs";
import Ably from "ably/promises";

export async function GET(request: Request) {
	const client = new Ably.Realtime(env.ABLY_API_KEY);
	const tokenRequestData = await client.auth.createTokenRequest({
		clientId: "ably-nextjs-demo",
	});
	return Response.json(tokenRequestData);
}
