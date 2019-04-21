import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const subforumHeadStyles = makeStyles((theme: IThemeInterface) => ({
	titleContainer: {
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
	},
	bookmarkContainer: {
		width: 'inherit',
		height: 40,
		background: theme.background.primary,
		display: 'flex',
		alignItems: 'center',
		paddingLeft: 16,
		boxSizing: 'border-box',
	},
	bookmark: {
		color: theme.subforum.primary,
		padding: '9px 14px',
		fontSize: 14,
		fontWeight: 500,

		'&.active': {
			borderBottom: theme.subforum.secondary + '3px solid',
			color: theme.subforum.secondary,
		}
	}
}), { name: 'SubfrorumHead' });

export default subforumHeadStyles;
