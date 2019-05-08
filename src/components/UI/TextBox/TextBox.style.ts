import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const textBoxStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		height: 50,
		width: 250,
		background: theme.background.searchBox,
		border: '1px solid transparent',
		borderRadius: 4,
		paddingLeft: 16,
		boxSizing: 'border-box',
		color: theme.fontColor,

		'&:focus': {
			outline: 0,
			border: `1px solid ${theme.subforum.secondary}`,
		}
	},
	wide: {
		width: '100%',
		background: theme.background.primary,
		margin: '6px 0',
		borderRadius: 2,
	}
}), { name: 'TextBox' });

export default textBoxStyles;
