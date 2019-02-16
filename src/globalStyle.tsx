import { createGlobalStyle } from './theme';
import 'typeface-source-sans-pro';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		font: inherit;
		font-size: 100%;
		vertical-align: baseline;
	}
	body {
		font-family: ${props => props.theme.defaultFont}, sans-serif;
		color: ${props => props.theme.fontColor};
		background: ${props => props.theme.mainBgColor};
		overflow: hidden;
	}
	a {
		text-decoration: none;
		color: inherit;
		outline: 0;
		cursor: pointer;
	}
	button, li {
		cursor: pointer;
		outline: 0;
		background: transparent;
	}
	svg {
		color: ${props => props.theme.iconColor};
	}
`;
export default GlobalStyle;
