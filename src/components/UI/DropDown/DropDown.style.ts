import { makeStyles } from '@material-ui/styles';
import * as Color from 'color';
import { IThemeInterface } from 'Theme/';

const dropDownStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: 200,
		position: 'relative',
		zIndex: 100,
		borderRadius: 5,
		border: `1px solid ${theme.borderColor}`,
		overflow: 'hidden',
		boxSizing: 'border-box',
		margin: '0 -1px',
		cursor: 'initial',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		background: theme.background.secondary,
		paddingBottom: 10,
		listStyleType: 'none',
		'& a, & li': {
			height: 38,
			display: 'flex',
			alignItems: 'center',
			paddingLeft: 7,
			transition: '.3s',
			cursor: 'pointer',

			'& > svg': {
				width: 20,
				height: 20,
				margin: '0 7px',
				color: theme.iconColor
			},
		},
		'& a:hover, & li:hover': {
			background: theme.themeType === 'light'
			? Color(theme.background.secondary).darken(0.05).string()
			: Color(theme.background.secondary).lighten(0.19).string()
		},
	}
}), { name: 'DropDown' });

export default dropDownStyles;
