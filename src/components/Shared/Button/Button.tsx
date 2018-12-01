import * as React from 'react';
import styled from 'Theme/';
import Color = require('color');

const Button = (props: any) =>
	<button className={props.className}>{props.text}{props.children}</button>;

const niceButton = styled(Button)`
	width: 200px;
	height: 34px;
	border-radius: 4px;
	font-size: 15px;
	text-transform: uppercase;

	background: ${props => props.theme.buttonBgColor};
	color: white;

	&:hover {
		background: ${props => Color(props.theme.buttonBgColor).lighten(0.12).string()};
	}
	&:active {
		background: ${props => Color(props.theme.buttonBgColor).darken(0.15).string()};
	}
`;

const invertedButton = styled(Button)`
	width: 200px;
	height: 34px;
	border-radius: 4px;
	font-size: 15px;
	text-transform: uppercase;

	color: ${props => props.theme.buttonBgColor};
	border: 1px solid ${props => props.theme.buttonBgColor};
	background: ${props => props.theme.secondButtonBgColor};

	&:hover {
		background: ${props => props.theme.secondButtonBgColor};
		border-color: ${props => Color(props.theme.buttonBgColor).lighten(0.20).string()};
		color: ${props => Color(props.theme.buttonBgColor).lighten(0.20).string()};
	}
	&:active {
		/* background: ${props => Color(props.theme.secondButtonBgColor).darken(0.20).string()}; */
		background: ${props => props.theme.secondButtonBgColor};
		border-color: ${props => Color(props.theme.buttonBgColor).darken(0.20).string()};
		color: ${props => Color(props.theme.buttonBgColor).darken(0.20).string()};
	}
`;

export { niceButton, invertedButton};
