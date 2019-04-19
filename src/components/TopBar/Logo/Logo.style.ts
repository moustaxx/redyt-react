import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/theme';

const logoStyles = makeStyles(({themeType}: IThemeInterface) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0 8px',
	},
	img: {
		width: 107,
		height: 48,
		filter: `invert(${themeType === 'light' ? 1 : 0})`
	}
}), { name: 'Logo' });

export default logoStyles;
