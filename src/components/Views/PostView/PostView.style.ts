import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const postViewStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		maxWidth: 1600,
		padding: '8px 4px',
		margin: '0 auto',
	},
	warn: {
		height: '30vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 21,
	},
}), { name: 'PostView'});

export default postViewStyles;
