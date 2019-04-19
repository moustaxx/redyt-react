import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const settingsStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: 'inherit',
		height: 40,
		background: theme.background.secondary,
	},
}), { name: 'Settings'});

export default settingsStyles;
