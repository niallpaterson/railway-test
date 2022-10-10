import { Title } from '../components/Typography';
import { ButtonLink } from '../components/ButtonLink';
import { Background } from '../components/Background';
import styled from '@emotion/styled';

export default () => {
	return (
		<Background as='main'>
			<Container>
				<Title>WE ARE BIG LEMON</Title>
				<Title>WHO THE HELL ARE YOU?</Title>
				<ButtonLink data-component='link' href='/api/auth/signin'>
					<ButtonLink.Copy>Reveal Yourself</ButtonLink.Copy>
				</ButtonLink>
			</Container>
		</Background>
	);
};

const Container = styled.div`
	& [data-component='link'] {
		position: absolute;
		bottom: 24px;
		right: 24px;
		width: max-content;
		justify-self: end;
	}
`;
