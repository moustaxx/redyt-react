import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const bookmarksStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
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
}), { name: 'Bookmarks'});

export default bookmarksStyles;
