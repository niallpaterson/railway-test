import { Title } from '../../components/Typography';
import { ButtonLink } from '../../components/ButtonLink';
import { Background } from '../../components/Background';
import styled from '@emotion/styled';
import { signIn, useSession } from 'next-auth/react';

export default () => {
	const session = useSession();

	if (session.status === 'authenticated') {
		return (
			<Background as='main'>
				<Container>
					<Title>WELCOME TO THE FAM</Title>
					<ButtonLink data-component='signin-link' href='/lemons'>
						<ButtonLink.Copy>CHECK THEM LEMZ</ButtonLink.Copy>
					</ButtonLink>
				</Container>
			</Background>
		);
	}

	return (
		<Background as='main'>
			<Container>
				<Title>SO YOU IS A CODER?</Title>
				<Title>PFF, YEAH RIGHT.</Title>
				<ButtonLink
					data-component='signin-link'
					onClick={() => signIn('github')}
				>
					<ButtonLink.Copy>Prove IT</ButtonLink.Copy>
				</ButtonLink>
			</Container>
		</Background>
	);
};

const Container = styled.div`
	& h1 {
		text-align: right;
		margin-right: 12px;
		padding-top: 12px;
	}
	& [data-component='signin-link'] {
		position: absolute;
		bottom: 24px;
		left: 24px;
		width: max-content;
	}
`;
