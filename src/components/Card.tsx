import styled from '@emotion/styled';
import NextImage from 'next/image';

const Frame = styled.div`
	border: 2px solid white;
	display: flex;
	flex-direction: column;
`;

const Image = styled(NextImage)`
	width: 125px;
	height: 125px;
	border: 2px solid red;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px;
`;

export const Card = Object.assign(Frame, { Image, Content });
