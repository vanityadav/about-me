/** @type {import('./$types').PageServerLoad} */
import prisma from '$lib/server/prisma/PrismaClient';

export async function load() {
	const res = await prisma.contact.findMany();
	return { data: res };
}
