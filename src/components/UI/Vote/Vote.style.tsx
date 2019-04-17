import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const  voteStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		display: 'flex',
		padding: '0 5px',
		'& > svg': {
			height: 16,
			width: 16,
		},
		'@media screen and (max-width: 500px)': {
			display: 'none',
		}
	},
	voteDown: {
		'&:hover': {
			color: 'red',
		},
	},
	voteUp: {
		'&:hover': {
			color: 'dodgerblue',
		},
	},
	voted: {
		color: 'green',
	},
	voteSummary: {
		width: 34,
		textAlign: 'center',
		fontWeight: 600,
		fontSize: 13,
		cursor: 'default',
	}
}), { name: 'Vote'});

export default  voteStyles;
