import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../client/prisma';
import z from 'zod';

const Lemon = z
	.object({
		id: z.string(),
		type: z.string(),
	})
	.strict();

const LemonGetQuery = Lemon.pick({ id: true });

export default async (
	{ method, query }: NextApiRequest,
	res: NextApiResponse
) => {
	if (method !== 'GET') {
		res
			.status(400)
			.send(`The method ${method} is not implemented on this route.`);
	}
	try {
		const { id } = LemonGetQuery.parse(query);
		const data = await prisma.lemon.findUniqueOrThrow({
			where: { id },
		});
		res.status(200).send(data);
	} catch (e) {
		const message = e?.message ?? 'An error occurred.';
		res.status(400).send(message);
	}
};
