import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const discussionStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: '95%',
		margin: '0 auto',
	},
	dropDown: {
		position: 'absolute',
	},
	sortBtn: {
		display: 'flex',
		alignItems: 'center',
		textTransform: 'uppercase',
		fontSize: 11,
		fontWeight: 700,
		letterSpacing: 0.5,
		color: theme.iconColor,
		'& .slide': {
			marginLeft: 8,
		},
		'& > svg': {
			width: 20,
			height: 20,
			color: theme.subforum.secondary,
		},
	},
	choice: {
		color: theme.subforum.secondary,
		paddingLeft: 4,
	}
}), { name: 'Discussion'});

export default discussionStyles;
