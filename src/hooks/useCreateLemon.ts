import { useMutation } from 'react-query';
import axios from 'axios';
import z from 'zod';
import { LemonModel } from '../models';

type LemonType = z.infer<typeof LemonModel>;

export const useCreateLemon = () => {
	const mutation = useMutation(
		(lemon: LemonType) =>
			axios
				.post(
					'/api/lemons/create',
					{ type: lemon.type },
					{ headers: { 'Content-Type': 'application/json' } }
				)
				.then((res) => {
					return res.data;
				}),
		{
			onSuccess() {
				alert('Mutate');
			},
		}
	);

	return { ...mutation, createLemon: mutation.mutateAsync };
};

export default useCreateLemon;
