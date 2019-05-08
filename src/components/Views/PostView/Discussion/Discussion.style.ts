import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const discussionStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: '95%',
		margin: '0 auto',
	},
	sortOptions: {
		textTransform: 'uppercase',
		margin: '10px 10px',
		fontSize: 14,
	},
	sort: {
		textTransform: 'uppercase',
		fontSize: 11,
		fontWeight: 700,
		letterSpacing: 0.5,
		color: theme.iconColor,
		padding: '0 10px',

		'& span, svg': {
			display: 'inline',
			verticalAlign: 'middle',
		},
		'& svg': {
			width: 17,
			height: 17,
			marginBottom: 1,
			fill: theme.subforum.secondary,
		}
	},
	slide: {
		marginLeft: 10,
		color: theme.subforum.secondary,
	}
}), { name: 'Discussion'});

export default discussionStyles;
