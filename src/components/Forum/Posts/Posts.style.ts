import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const postsStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		background: theme.background.secondary,
		height: 'fit-content',
		flexGrow: 1,
		borderRadius: 4,
	},
	warn: {
		height: '30vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 21,
	}
}), { name: 'Posts'});

export default postsStyles;
