import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../client/prisma';
import { LemonModel } from '../../../models';
import z from 'zod';

export default async ({ method }: NextApiRequest, res: NextApiResponse) => {
	if (method !== 'GET') {
		res
			.status(400)
			.send(`The method ${method} is not implemented on this route.`);
	}

	try {
		const data = await prisma.lemon.findMany({ orderBy: { type: 'desc' } });
		console.log({ data });
		const parsed = z.array(LemonModel).parse(data);
		console.log({ parsed });
		res.status(200).send(parsed);
	} catch (e) {
		const message = e?.message ?? 'An unknown error occurred';
		res.status(400).send(message);
	}
};
