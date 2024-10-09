import { z } from "zod";

export const ZSignUpFormData = z.object({
	name: z.string().min(2, { message: "Name is required" }),
	username: z.string().min(2, { message: "Username is required" }),
	password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export interface ISignUpFormData extends z.infer<typeof ZSignUpFormData> {}
