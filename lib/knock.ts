import { Knock } from "@knocklabs/node";

export const knock = new Knock(process.env.KNOCK_PUBLIC_API_KEY);
