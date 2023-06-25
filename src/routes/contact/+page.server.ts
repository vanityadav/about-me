import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { PrismaClient } from '@prisma/client';
import { contactFormSchema } from './formValidation';

const prisma = new PrismaClient();

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const subject = data.get('subject');
		const message = data.get('message');

		const userData = { name, email, subject, message };

		const validation = contactFormSchema.safeParse(userData);
		if (!validation.success) {
			const error = validation.error.formErrors.fieldErrors;
			return fail(400, { success: false, errors: JSON.stringify(error) });
		}
		if (validation.success) {
			const res = await prisma.contact.create({ data: validation.data });
			if (res) {
				return {
					success: true
				};
			} else {
				return {
					success: false
				};
			}
		}
	}
} satisfies Actions;
