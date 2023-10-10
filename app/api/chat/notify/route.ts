import { knock } from "@/lib/knock";
import { BodyValidator } from "@/lib/validators";

export async function POST(req: Request) {
	const body = await req.json();

	const parsedBody = BodyValidator.safeParse(body);

	if (!parsedBody.success)
		return new Response(JSON.stringify({ message: "Bad Request" }), {
			status: 400,
		});

	try {
		const res = await knock.workflows.trigger("new-comment", {
			recipients: parsedBody.data.recipients,
			data: { message: `${parsedBody.data.actorName} left a comment.` },
			actor: parsedBody.data.actorId,
		});
	} catch (error) {
		console.error(error);
	}

	return new Response(JSON.stringify({ message: "done" }), { status: 200 });
}
