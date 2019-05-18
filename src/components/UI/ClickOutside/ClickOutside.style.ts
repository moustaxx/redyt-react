import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const clickOutsideStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		position: 'absolute',
		width: '98vw',
		height: '100vh',
		top: 0,
		left: 0,
		cursor: 'initial',
	},
}), { name: 'ClickOutside' });

export default clickOutsideStyles;
