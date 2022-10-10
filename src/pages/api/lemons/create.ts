import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../client/prisma';

export default async (
	{ body, method }: NextApiRequest,
	res: NextApiResponse
) => {
	if (method !== 'POST') {
		return res
			.status(400)
			.send(`The method ${method} is not implemented on this route.`);
	}

	const data = await prisma.lemon.create({
		data: { type: body.type },
	});

	res.status(200).send(data);
};
