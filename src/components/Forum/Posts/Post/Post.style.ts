import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const postStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: '100%',
		display: 'flex',
		border: `1px solid ${theme.borderColor}`,
		borderTop: '1px solid transparent',
		marginBottom: '-1px',
		cursor: 'pointer',
		boxSizing: 'border-box',
		transition: '.1s',
		'&:hover': {
			border: '1px solid #898989 !important',
			zIndex: 1,
		},
		'&:first-child': {
			borderTopLeftRadius: 4,
			borderTopRightRadius: 4,
			borderTop: `1px solid ${theme.borderColor}`,
		},
		'&:last-child': {
			borderBottomLeftRadius: 4,
			borderBottomRightRadius: 4,
		},
	},
	voteHere: {
		width: 80,
		borderRight: `1px solid ${theme.borderColor}`,
		paddingTop: 8,
		flexShrink: 0,
		justifyContent: 'center',
	},
	cnt: {
		width: '100%',
		marginLeft: 8,
	},
	firstLine: {
		display: 'flex',
		width: '100%',
	},
	postContent: {
		display: 'flex',
		flexGrow: 1,
		fontSize: 14,
		paddingTop: 3,
		'& .tag': {
			background:  theme.subforum.primary,
			padding: '0 4px',
			marginRight: 5,
			float: 'left',
			fontWeight: 'normal',
			borderRadius: 4,
		},
		'& .postHeading': {
			fontWeight: 500,
			color: theme.fontColor,
			marginRight: 8,
		},
		'& .attachedLink': {
			color: theme.subforum.secondary,
			textDecoration: 'none',
		},
		'& .attachedLink:hover': {
			textDecoration: 'underline',
		}
	},
	stats: {
		flexShrink: 0,
		display: 'inline-flex',
		justifyContent: 'space-between',
		'& > *': {
			margin: '0 3px',
			flexShrink: 0,
		},
		'& .attachmentIcon': {
			display: 'inline-box',
			verticalAlign: 'middle',
			width: 22,
			height: 22,
		},
		'& .postOptionsIcon': {
			height: '100%',
			marginRight: 10,
		},
		'& .comments': {
			'& div, & svg': {
				display: 'inline',
				verticalAlign: 'middle',
			},
			'& .commentIcon': {
				marginRight: 4,
			},
			'& .comNumber': {
				color: theme.iconColor,
				fontSize: 14,
				fontWeight: 500,
				verticalAlign: 'bottom',
			},
		}
	},
	postDate: {
		fontSize: 12,
		height: 20,
		display: 'flex',
		alignItems: 'center',
		color: '#7c7c7c',
	}
}), { name: 'Post'});

export default postStyles;
