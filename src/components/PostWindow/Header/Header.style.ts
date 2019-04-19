import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const headerStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		flex: '0 0 48px',
		background: 'black',
	},
	group: {
		margin: '0 auto',
		maxWidth: 1220,
		display: 'flex',
		alignItems: 'center',
		height: '100%',
	},
	title: {
		color: '#d4d4d4',
		'@media screen and (max-width: 500px)': {
			marginLeft: 20,
		}
	},
	space: {
		flexGrow: 1,
	},
	voteHere: {
		padding: '0 10px',
		color: 'white',
		'&::before': {
			borderLeft: '1px solid ' + theme.iconColor,
			marginRight: 10,
			height: 16,
			content: '"',
		},
		'&::after': {
			borderRight: '1px solid ' + theme.iconColor,
			marginLeft: 10,
			height: 16,
			content: '"',
		}
	},
	exitButton: {
		flexShrink: 0,
		cursor: 'pointer',
		userSelect: 'none',
		height: 48,
		textAlign: 'center',
		fontSize: 17,
		color: 'gray',
		lineHeight: 2.7,
		padding: '0 8px',
		transition: '0.2s',
		marginRight: 10,
		'&:hover': {
			background: '#edeff1',
		},
		'& *': {
			display: 'inline',
			verticalAlign: 'middle',
		}
	}

}), { name: 'Header'});

export default headerStyles;
