import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const commentStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		margin: '15px 0',
	},
	cnt: {
		display: 'flex',
	},
	voteHere: {
		width: 30,
		paddingTop: 5,
		marginRight: 10,
		flexShrink: 0,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'unset',
		display: 'flex',
	},
	author: {
		display: 'inline',
		fontSize: 13,
		color: theme.subforum.secondary,
		marginRight: 4,
	},
	date: {
		display: 'inline',
		fontSize: 13,
		color: '#808486',
	},
	essence: {
		display: 'block',
		margin: '2px 0',
		lineHeight: 1.5,
	},
	toolbar: {
		fontSize: 13,
		fontWeight: 500,
		color: '#808486',
	},
	share: {
		display: 'inline',
		marginRight: 6,
	},
	reply: {
		display: 'inline',
	}
}), { name: 'Comment'});

export default commentStyles;
