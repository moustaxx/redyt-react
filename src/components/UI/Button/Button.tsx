import styled from 'Theme/';
import * as Color from 'color';

const niceButton = styled.button`
	width: 200px;
	height: 34px;
	border-radius: 4px;
	font-size: 15px;
	text-transform: uppercase;

	background: ${props => props.theme.button.primary};
	color: white;

	&:hover {
		background: ${props => Color(props.theme.button.primary).lighten(0.12).string()};
	}
	&:active {
		background: ${props => Color(props.theme.button.primary).darken(0.15).string()};
	}
`;

const invertedButton = styled.button`
	width: 200px;
	height: 34px;
	border-radius: 4px;
	font-size: 15px;
	text-transform: uppercase;

	color: ${props => props.theme.button.primary};
	border: 1px solid ${props => props.theme.button.primary};
	background: ${props => props.theme.button.secondary};

	&:hover {
		background: ${props => props.theme.button.secondary};
		border-color: ${props => Color(props.theme.button.primary).lighten(0.20).string()};
		color: ${props => Color(props.theme.button.primary).lighten(0.20).string()};
	}
	&:active {
		/* background: ${props => Color(props.theme.button.secondary).darken(0.20).string()}; */
		background: ${props => props.theme.button.secondary};
		border-color: ${props => Color(props.theme.button.primary).darken(0.20).string()};
		color: ${props => Color(props.theme.button.primary).darken(0.20).string()};
	}
`;

export { niceButton, invertedButton};
