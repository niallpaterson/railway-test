import { css } from '@emotion/react';

export const globalStyles = css`
	@font-face {
		font-family: 'GeneralSans-Variable';
		src: url('/fonts/GeneralSans-Variable.woff2') format('woff2'),
			url('/fonts/GeneralSans-Variable.woff') format('woff'),
			url('/fonts/GeneralSans-Variable.ttf') format('truetype');
		font-weight: 200 700;
		font-display: swap;
		font-style: normal;
	}
	@font-face {
		font-family: 'GeneralSans-VariableItalic';
		src: url('/fonts/GeneralSans-VariableItalic.woff2') format('woff2'),
			url('/fonts/GeneralSans-VariableItalic.woff') format('woff'),
			url('/fonts/GeneralSans-VariableItalic.ttf') format('truetype');
		font-weight: 200 700;
		font-display: swap;
		font-style: italic;
	}

	@font-face {
		font-family: 'GeneralSans-Extralight';
		src: url('/fonts/GeneralSans-Extralight.woff2') format('woff2'),
			url('/fonts/GeneralSans-Extralight.woff') format('woff'),
			url('/fonts/GeneralSans-Extralight.ttf') format('truetype');
		font-weight: 200;
		font-display: swap;
		font-style: normal;
	}

	@font-face {
		font-family: 'GeneralSans-ExtralightItalic';
		src: url('/fonts/GeneralSans-ExtralightItalic.woff2') format('woff2'),
			url('/fonts/GeneralSans-ExtralightItalic.woff') format('woff'),
			url('/fonts/GeneralSans-ExtralightItalic.ttf') format('truetype');
		font-weight: 200;
		font-display: swap;
		font-style: italic;
	}

	@font-face {
		font-family: 'GeneralSans-Light';
		src: url('/fonts/GeneralSans-Light.woff2') format('woff2'),
			url('/fonts/GeneralSans-Light.woff') format('woff'),
			url('/fonts/GeneralSans-Light.ttf') format('truetype');
		font-weight: 300;
		font-display: swap;
		font-style: normal;
	}

	@font-face {
		font-family: 'GeneralSans-LightItalic';
		src: url('/fonts/GeneralSans-LightItalic.woff2') format('woff2'),
			url('/fonts/GeneralSans-LightItalic.woff') format('woff'),
			url('/fonts/GeneralSans-LightItalic.ttf') format('truetype');
		font-weight: 300;
		font-display: swap;
		font-style: italic;
	}

	@font-face {
		font-family: 'GeneralSans-Regular';
		src: url('/fonts/GeneralSans-Regular.woff2') format('woff2'),
			url('/fonts/GeneralSans-Regular.woff') format('woff'),
			url('/fonts/GeneralSans-Regular.ttf') format('truetype');
		font-weight: 400;
		font-display: swap;
		font-style: normal;
	}

	@font-face {
		font-family: 'GeneralSans-Italic';
		src: url('/fonts/GeneralSans-Italic.woff2') format('woff2'),
			url('/fonts/GeneralSans-Italic.woff') format('woff'),
			url('/fonts/GeneralSans-Italic.ttf') format('truetype');
		font-weight: 400;
		font-display: swap;
		font-style: italic;
	}

	@font-face {
		font-family: 'GeneralSans-Medium';
		src: url('/fonts/GeneralSans-Medium.woff2') format('woff2'),
			url('/fonts/GeneralSans-Medium.woff') format('woff'),
			url('/fonts/GeneralSans-Medium.ttf') format('truetype');
		font-weight: 500;
		font-display: swap;
		font-style: normal;
	}

	@font-face {
		font-family: 'GeneralSans-MediumItalic';
		src: url('/fonts/GeneralSans-MediumItalic.woff2') format('woff2'),
			url('/fonts/GeneralSans-MediumItalic.woff') format('woff'),
			url('/fonts/GeneralSans-MediumItalic.ttf') format('truetype');
		font-weight: 500;
		font-display: swap;
		font-style: italic;
	}

	@font-face {
		font-family: 'GeneralSans-Semibold';
		src: url('/fonts/GeneralSans-Semibold.woff2') format('woff2'),
			url('/fonts/GeneralSans-Semibold.woff') format('woff'),
			url('/fonts/GeneralSans-Semibold.ttf') format('truetype');
		font-weight: 600;
		font-display: swap;
		font-style: normal;
	}

	@font-face {
		font-family: 'GeneralSans-SemiboldItalic';
		src: url('/fonts/GeneralSans-SemiboldItalic.woff2') format('woff2'),
			url('/fonts/GeneralSans-SemiboldItalic.woff') format('woff'),
			url('/fonts/GeneralSans-SemiboldItalic.ttf') format('truetype');
		font-weight: 600;
		font-display: swap;
		font-style: italic;
	}

	@font-face {
		font-family: 'GeneralSans-Bold';
		src: url('/fonts/GeneralSans-Bold.woff2') format('woff2'),
			url('/fonts/GeneralSans-Bold.woff') format('woff'),
			url('/fonts/GeneralSans-Bold.ttf') format('truetype');
		font-weight: 700;
		font-display: swap;
		font-style: normal;
	}

	@font-face {
		font-family: 'GeneralSans-BoldItalic';
		src: url('/fonts/GeneralSans-BoldItalic.woff2') format('woff2'),
			url('/fonts/GeneralSans-BoldItalic.woff') format('woff'),
			url('/fonts/GeneralSans-BoldItalic.ttf') format('truetype');
		font-weight: 700;
		font-display: swap;
		font-style: italic;
	}
	/* https://www.joshwcomeau.com/css/custom-css-reset/ */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
	}

	html,
	body {
		height: 100%;
	}

	body {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}

	#root,
	#__next {
		isolation: isolate;
	}

	/* Disable common vendor styles */
	ul,
	ol {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	button {
		background: unset;
		border: unset;
		cursor: pointer;
	}

	a {
		cursor: pointer;
	}

	address {
		font-style: normal;
	}
`;
