import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const loadingSpinnerStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		display: 'inline-block',
		position: 'absolute',
		top: '50%',
		left: '50%',
		width: 64,
		height: 64,
		transform: 'translate(-50%, -50%)',
		'& div': {
			display: 'inline-block',
			position: 'absolute',
			left: 6,
			width: 13,
			background: theme.fontColor,
			animation: '$lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite',
		},
		'& div:nth-child(1)': {
			left: 6,
			animationDelay: '-0.24s',
		},
		'& div:nth-child(2)': {
			left: 26,
			animationDelay: '-0.12s',
		},
		'& div:nth-child(3)': {
			left: 45,
			animationDelay: '0s',
		},
	},
	'@keyframes lds-facebook': {
		'0%': {
			top: 6,
			height: 51,
		},
		'50%, 100%': {
			top: 19,
			height: 26,
		}
	}
}), { name: 'LoadingSpinner' });

export default loadingSpinnerStyles;
