import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const postWindowStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		position: 'fixed',
		background: '#000000de',
		width: '100%',
		height: '100%',
		zIndex: 9,
	},
	warn: {
		height: '30vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 21,
	},
	content: {
		width: '96%',
		height: 'calc(100% - 50px)',
		maxWidth: 1300,
		margin: '0 auto',
		background: theme.background.primary,
		'@media screen and (max-width: 550px)': {
			margin: '0 auto',
			width: '100%',
		}
	},
	container: {
		height: 'calc(100% - 50px)',
		paddingTop: 30,
		justifyContent: 'center',
		display: 'flex',
		overflow: 'auto',
		boxSizing: 'border-box',
		'& .right': {
			margin: 0,
			height: '100%',
		}
	}
}), { name: 'PostWindow'});

export default postWindowStyles;
