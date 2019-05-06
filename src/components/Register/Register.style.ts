import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const registerStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: '100%',
		height: '100%',
		top: 0,
		background: 'hsla(0, 0%, 0%, 0.38)',
		position: 'absolute',
		zIndex: 101,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	window: {
		width: 360,
		minHeight: 285,
		background: theme.background.secondary,
		position: 'fixed',
		boxShadow: 'hsla(0, 0%, 0%, 0.4) 1px 7px 17px 2px',
		animation: '$fadein 0.5s',
	},
	xButton: {
		position: 'absolute',
		top: 8,
		right: 5,
		width: 20,
		height: 20,
		cursor: 'pointer',
	},
	content: {
		margin: 30,
	},
	error: {
		color: 'red',
	},
	comunicate: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 21,
	},
	heading: {
		fontSize: 22,
		padding: '0px 0 20px 0',
		userSelect: 'none',
	},
	checkbox: {
		margin: 5,
		verticalAlign: 'middle',
	},
	agreement: {
		verticalAlign: 'middle',
		fontSize: 14,
	},
	'@keyframes fadein': {
		from: { opacity: 0 },
		to: { opacity: 1 }
	}
}), { name: 'Register'});

export default registerStyles;
