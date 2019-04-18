import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';
import 'typeface-source-sans-pro';

const appStyles = makeStyles((theme: IThemeInterface) => ({
	'@global': {
		'*': {
			margin: 0,
			padding: 0,
			border: 0,
			font: 'inherit',
			fontSize: '100%',
			verticalAlign: 'baseline',
		},
		body: {
			fontFamily: theme.defaultFont + ', sans-serif',
			color: theme.fontColor,
			background: theme.background.primary,
			overflow: 'hidden',
		},
		a: {
			textDecoration: 'none',
			color: 'inherit',
			outline: 0,
			cursor: 'pointer',
		},
		'button, li': {
			cursor: 'pointer',
			outline: 0,
			background: 'transparent',
		},
		svg: {
			color: theme.iconColor,
		},
	},
}), { name: 'App' });

export default appStyles;
