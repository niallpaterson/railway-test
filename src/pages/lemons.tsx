import styled from '@emotion/styled';
import { useQuery, useMutation } from 'react-query';
import { useSession } from 'next-auth/react';
import { Background } from '../components/Background';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Title, Heading, Body } from '../components/Typography';
import { Card } from '../components/Card';
import { useListLemons } from '../hooks/useListLemons';
import { useCreateLemon } from '../hooks/useCreateLemon';

export default () => {
	const { data, isLoading, error, refetch } = useListLemons();
	const { createLemon } = useCreateLemon();

	if (isLoading)
		return (
			<Background>
				<Title>Loading</Title>
			</Background>
		);

	if (error)
		return (
			<Background>
				<Title>Error</Title>
			</Background>
		);

	return (
		<Background>
			<Title>Here is da lemz</Title>
			<UL>
				{data?.map((lemon, i) => (
					<li key={`lemon-${i}`}>
						<Card>
							<Card.Image
								width='125px'
								height='125px'
								src='https://images.unsplash.com/photo-1609639643505-3c158a56de42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
							/>
							<Card.Content>
								<Heading>{`Lemon ${i}`}</Heading>
								<Body>{lemon.type}</Body>
							</Card.Content>
						</Card>
					</li>
				))}
			</UL>
			<FORM
				onSubmit={async (e) => {
					e.preventDefault();
					const values = new FormData(e.currentTarget);
					const type = values.get('type').toString();
					await createLemon({ type });
					refetch();
				}}
			>
				<Heading>Make A New Lem</Heading>
				<Input type='text' name='type' placeholder='Enter name of da lem' />
				<Button type='submit'>
					<Button.Copy>MAKE LEM</Button.Copy>
				</Button>
			</FORM>
		</Background>
	);
};

const FORM = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 12px;
	position: absolute;
	left: 0;
	bottom: 0;
	margin: 24px;
`;

const UL = styled.ul`
	display: flex;
	gap: 24px;
	padding: 0;
	margin: 0;
	padding-bottom: 24px;
`;
