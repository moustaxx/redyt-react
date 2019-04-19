import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const textBoxStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		height: 50,
		width: 250,
		background: theme.background.searchBox,
		border: '1px solid transparent',
		borderRadius: 5,
		paddingLeft: 15,
		boxSizing: 'border-box',
		color: theme.fontColor,

		'&:focus': {
			outline: 0,
			border: `1px solid ${theme.subforum.secondary}`,
		}
	}
}), { name: 'TextBox' });

export default textBoxStyles;
