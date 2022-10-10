import styled from '@emotion/styled';

const Link = styled.a`
	padding: 12px 16px;
	border: 3px solid white;
	background: transparent;
	transition: background 0.4s cubic-bezier(0.5, 1, 0.89, 1);
	&:hover {
		background: white;
		& * {
			color: black;
		}
	}
`;

const Copy = styled.p`
	display: inline-block;
	color: white;
	font-family: GeneralSans-Medium;
	font-size: 1.5rem;
	text-transform: uppercase;
	transition: color 0.3s cubic-bezier(0.5, 1, 0.89, 1);
	transition-delay: 0.1s;
`;

export const ButtonLink = Object.assign(Link, { Copy });
