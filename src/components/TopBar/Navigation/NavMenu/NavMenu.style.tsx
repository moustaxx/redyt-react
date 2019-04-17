import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const navMenuStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		borderTop: 'none',
		width: 270,
	},
	filter: {
		color: theme.fontColor,
		margin: '0 auto',
		marginTop: 5,
		paddingLeft: 8,
		width: '85%',
		height: 30,
		boxSizing: 'border-box',
		background: theme.background.searchBox,
		'&:hover': {
			borderColor: '#0079d3',
		}
	},
	heading: {
		paddingLeft: 13,
		marginBottom: 10,
		marginTop: 15,
		fontSize: 12,
		fontWeight: 500,
		color: '#878a8c',
		textTransform: 'uppercase',
	}
}), { name: 'NavMenu' });

export default navMenuStyles;
