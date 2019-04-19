import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const headerStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		height: 80,
		background: theme.subforum.primary,
		display: 'flex',
		padding: '25px 20px',
		boxSizing: 'border-box',
	},
	title: {
		fontSize: 23,
		color: 'white',
		alignSelf: 'flex-end',
	}
}), { name: 'Header' });

export default headerStyles;
