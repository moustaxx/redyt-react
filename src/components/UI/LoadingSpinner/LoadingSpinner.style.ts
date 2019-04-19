import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const loadingSpinnerStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		color: theme.fontColor,
		position: 'relative',
		left: '49%',
		padding: '70px 0',
		height: 50,
		width: 50,
		animation: '$spin 2s infinite linear',
	},
	'@keyframes spin': {
		from: {
			transform: 'rotate(0deg)'
		},
		to: {
			transform: 'rotate(360deg)'
		}
	}
}), { name: 'LoadingSpinner' });

export default loadingSpinnerStyles;
