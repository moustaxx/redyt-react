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
	@font-face{
		font-family: redesignFont;
		src: url(https://www.redditstatic.com/desktop2x/fonts/redesignIcon/redesignFont.b10d3d7903a1a7648d62918000ab5a6c.eot),
		url(https://www.redditstatic.com/desktop2x/fonts/redesignIcon/redesignFont.b10d3d7903a1a7648d62918000ab5a6c.woff),
		url(https://www.redditstatic.com/desktop2x/fonts/redesignIcon/redesignFont.b10d3d7903a1a7648d62918000ab5a6c.ttf),
		url(https://www.redditstatic.com/desktop2x/fonts/redesignIcon/redesignFont.b10d3d7903a1a7648d62918000ab5a6c.svg);
	}
	.icon {
		font-family: redesignFont, serif;
		color: ${props => props.theme.iconColor};
	}
`;
export default GlobalStyle;