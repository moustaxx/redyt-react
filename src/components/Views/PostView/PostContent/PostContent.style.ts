import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const postContentStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		background: theme.background.secondary,
		height: 'fit-content',
		flexGrow: 1,
		borderRadius: 4,
		margin: '0 5px',
	},
	gg1: {
		display: 'flex',
		margin: '0 8px',
		marginTop: 8,
		'& .voteHere': {
			width: 30,
			padding: 0,
			paddingTop: 5,
			flexShrink: 0,
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'unset',
			'& *': {
				padding: '6px 0',
			},
			'& svg': {
				height: 19,
				width: 19,
			}
		}
	},
	interior: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: 13,
	},
	subForumName: {
		marginRight: 3,
		fontWeight: 500,
		fontSize: 14,
	},
	postTime: {
		fontSize: 13,
		color: '#808486',
	},
	title: {
		fontSize: 22,
		fontWeight: 500,
		margin: '5px 0',
	},
	essence: {
		'& p': {
			margin: '5px 0',
			whiteSpace: 'pre-line',
		}
	},
	postToolBar: {
		height: 32,
		width: '100%',
		margin: '4px 0',
		display: 'flex',
		alignItems: 'center',
		fontSize: 13,
		fontWeight: 500,
		color: '#808486',
		'& button': {
			padding: 5,
			marginRight: 5,
			color: 'inherit',
		},
		'& button:hover': {
			backgroundColor: 'hsla(250, 7%, 20%, 1)',
			transition: 'background-color .2s',
			borderRadius: 4,
		},
		'& .el': {
			margin: '0 2px',
			display: 'inline',
			verticalAlign: 'middle',
		}
	}
}), { name: 'PostContent'});

export default postContentStyles;
