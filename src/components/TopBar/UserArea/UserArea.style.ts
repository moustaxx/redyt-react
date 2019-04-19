import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const avilableColors = new Array('#000000', '#0fa21c', '#3300ff', '#984527');
const randomColor = () => {
	return avilableColors[Math.floor((Math.random() * avilableColors.length))];
};

const userAreaStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		flexShrink: 0,
		maxWidth: 150,
		height: 34,
		borderRadius: 4,
		fontSize: 15,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		boxSizing: 'border-box',
		border: '1px solid transparent',
		padding: '0 10px',
		userSelect: 'none',
		cursor: 'pointer',
		'& > span': {
			overflow: 'hidden',
		},
		'& > svg': {
			flexShrink: 0,
			color: theme.iconColor,
			width: 20,
			height: 20,
		},
		'& > *': {
			display: 'inline',
			verticalAlign: 'middle',
		},
		'&:hover': {
			borderColor: theme.borderColor,
		},
		'&:active': {
			borderColor: theme.borderColor,
		},
	},
	avatar: {
		flexShrink: 0,
		width: 26,
		height: 26,
		marginRight: 5,
		borderRadius: '50%',
		background: randomColor(),

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textTransform: 'uppercase',
		fontWeight: 600,
		color: 'white',
	},
}), { name: 'UserArea'});

export default userAreaStyles;
