import { z } from 'zod';

export const contactFormSchema = z.object({
	name: z.string().min(3, 'Your name is too short'),
	email: z.string().email('Provide a valid email address'),
	subject: z.string().min(3, 'The message you provided is too short and unclear'),
	message: z.string().min(5, 'The message you provided is too short and unclear')
});
