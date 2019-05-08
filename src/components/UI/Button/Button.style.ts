import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';
import * as Color from 'color';

const buttonStyles = makeStyles(({ background, button }: IThemeInterface) => ({
	root: {
		height: 32,
		borderRadius: 4,
		fontSize: 15,
		textTransform: 'uppercase',
		padding: '0 16px',

		background: button.primary,
		transition: '.2s background-color, .2s border, .2s color',
		color: 'white',

		'&:hover': {
			background: Color(button.primary).lighten(0.12).string(),
		},
		'&:active': {
			background: Color(button.primary).darken(0.15).string(),
		}
	},
	secondary: {
		color: button.primary,
		border: `1px solid ${button.primary}`,
		background: button.secondary,

		'&:hover': {
			background: button.secondary,
			borderColor: Color(button.primary).lighten(0.20).string(),
			color: Color(button.primary).lighten(0.20).string(),
		},
		'&:active': {
			background: button.secondary,
			borderColor: Color(button.primary).darken(0.20).string(),
			color: Color(button.primary).darken(0.20).string(),
		},
	},
	popup: {
		margin: '10px 0',
		height: 45,
		width: '100%',
		borderRadius: 0,
	}
}), { name: 'Button' });

export default buttonStyles;
