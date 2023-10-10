import { env } from "@/env.mjs";
import { Knock } from "@knocklabs/node";

export const knock = new Knock(env.KNOCK_PUBLIC_API_KEY);
