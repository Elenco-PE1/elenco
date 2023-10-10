import z from "zod";

export const BodyValidator = z.object({
	recipients: z.string().array(),
	actorId: z.string(),
	actorName: z.string(),
});

export type BodyValidator = z.infer<typeof BodyValidator>;
