import { z } from "zod";

export const ZSignInFormData = z.object({
	username: z.string().min(2, { message: "Username is required" }),
	password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export interface ISignInFormData extends z.infer<typeof ZSignInFormData> {}
