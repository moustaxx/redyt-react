import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const settingsStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: 'inherit',
		height: 40,
		background: theme.background.secondary,
	},
	dropDown: {
		position: 'relative',
		left: 45,
		width: 155,
	},
	sortBtn: {
		display: 'flex',
		alignItems: 'center',
		height: 'inherit',
		marginLeft: 30,
		textTransform: 'uppercase',
		fontSize: 11,
		fontWeight: 700,
		letterSpacing: 0.5,
		color: theme.iconColor,
		background: 'transparent',
		padding: '0 10px',
		'& .slide': {
			marginLeft: 8,
		},
		'& > svg': {
			width: 20,
			height: 20,
			color: theme.subforum.secondary,
		},
	}
}), { name: 'Settings'});

export default settingsStyles;
