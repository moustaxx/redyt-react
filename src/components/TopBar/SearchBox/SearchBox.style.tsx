import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/theme';

const searchboxStyles = makeStyles(({ themeType }: IThemeInterface) => ({
	root: {
		height: '70%',
		width: '100%',
		margin: '0 5px',
		position: 'relative',
		display: 'inline-flex',
		alignItems: 'center',

		'& > svg': {
			position: 'absolute',
			left: 7,
			width: 21,
			height: 21,
		}
	},
	txtbx: {
		'body &': { // HACK: Fix css injection order bug
			height: '100%',
			width: '100%',
			paddingLeft: 32,
		}
	}
}), { name: 'Searchbox' });

export default searchboxStyles;
