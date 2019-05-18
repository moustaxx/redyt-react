import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/theme';

const navigationStyles = makeStyles(({ borderColor }: IThemeInterface) => ({
	root: {
		width: 270,
		height: '70%',
		flexShrink: 0,
		border: '1px solid transparent',
		borderRadius: 5,
		boxSizing: 'border-box',
		fontSize: 15,
		cursor: 'pointer',
		userSelect: 'none',
		margin: '0 5px',
		'&:hover': {
			border: `1px solid ${borderColor}`,
		},
		'&.active': {
			border: `1px solid ${borderColor}`,
			// borderBottom: '1px solid transparent',
			// borderBottomLeftRadius: 'initial',
			// borderBottomRightRadius: 'initial',
		},
		'@media screen and (max-width: 800px)': {
				width: 115,
		},
		'@media screen and (max-width: 420px)': {
				display: 'none',
		},
	},
	cnt: {
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 5,
		boxSizing: 'border-box',
		'& > *': {
			display: 'inline',
			verticalAlign: 'middle',
		}
	},
	cnt2: {
		paddingLeft: 8,
	},

	navIcon: {
		background: '#0079d3',
		borderRadius: 40,
		width: 22,
		height: 22,
		verticalAlign: 'middle',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0 2px',
		'& svg': {
			width: 16,
			height: 16,
			fill: 'white',
		}
	},
	subforumName: {
		display: 'inline',
		verticalAlign: 'middle',
		marginLeft: 3,
	},
	navMenu: {
		width: 200,
	},
}), { name: 'Navigation' });
	
export default navigationStyles;
