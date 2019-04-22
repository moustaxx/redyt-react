import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/theme';

const topBarStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		background: theme.background.secondary,
		position: 'sticky',
		top: 0,
		width: '100%',
		height: 50,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.background.primary}`,
		zIndex: 10,
		boxSizing: 'border-box',
	},
	btn: {
		width: 120,
		flexShrink: 0,
		margin: '0 5px',
		'@media screen and (max-width: 800px)': {
			width: 40,
		},
		'@media screen and (max-width: 550px)': {
			display: 'none',
		}
	}
}), { name: 'TopBar' });

export default topBarStyles;
