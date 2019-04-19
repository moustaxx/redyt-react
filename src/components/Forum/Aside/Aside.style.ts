import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const asideStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: 310,
		flexShrink: 0,
		margin: '0 5px',
		'@media screen and (max-width: 750px)': {
			display: 'none',
		}
	},
}), { name: 'Aside'});

export default asideStyles;
