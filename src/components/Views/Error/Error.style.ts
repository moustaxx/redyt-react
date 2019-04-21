import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const errorStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		display: 'flex',
		height: '80vh',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		fontSize: 21,
		'& a': {
			marginTop: 10,
		},
	},
	btn: {
		width: 145,
		height: 39,
	},
	caption: {
		margin: '20px 0',
	},
	link: {
		color: theme.subforum.secondary,
	},
}), { name: 'Error'});

export default errorStyles;
