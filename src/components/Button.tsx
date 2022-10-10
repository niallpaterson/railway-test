import styled from '@emotion/styled';

const _Button = styled.button`
	padding: 8px 12px;
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
	font-size: 1rem;
	text-transform: uppercase;
	transition: color 0.3s cubic-bezier(0.5, 1, 0.89, 1);
	transition-delay: 0.1s;
`;

export const Button = Object.assign(_Button, { Copy });
