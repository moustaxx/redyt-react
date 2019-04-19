import { createStyles, WithStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/theme';

const topBarStyles = ({ background, button }: IThemeInterface) => createStyles({
	root: {
		background: background.secondary,
		position: 'sticky',
		top: 0,
		width: '100%',
		height: 50,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: `1px solid ${background.primary}`,
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
});

export type TTopBarStyles = WithStyles<typeof topBarStyles>;

export default topBarStyles;
