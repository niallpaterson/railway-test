import { useQuery } from 'react-query';
import axios from 'axios';
import z from 'zod';
import { LemonModel } from '../models';

export const useListLemons = () => {
	const query = useQuery('/api/lemons', () =>
		axios.get('/api/lemons').then((res) => {
			const lemons = z.array(LemonModel).parse(res.data);
			return lemons;
		})
	);

	return query;
};

export default useListLemons;
