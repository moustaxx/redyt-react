import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const settingsViewStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: '100%',
		height: 'calc(100vh - 50px)',
		overflow: 'auto',
	},
	header: {
		height: 190,
		background: '#626262',
		position: 'relative',
	},
	cnt: {
		position: 'absolute',
		bottom: 0,
		left: 53,
		'@media screen and (max-width: 500px)': {
			left: 10,
		}
	},
	heading: {
		display: 'inline',
		fontSize: 34,
		textShadow: '1px 1px 7px black',
		color: 'white',
		margin: '0 30px',
	},
	content: {
		background: theme.background.secondary,
		margin: '0 53px 39px 53px',
		padding: 32,
		position: 'relative',
		'& .caption': {
			fontSize: 26,
		},
		'& .nothing': {
			margin: '90px 0',
			fontSize: 36,
			textAlign: 'center',
			color: theme.iconColor,
		},
		'@media screen and (max-width: 500px)': {
			margin: 0,
		},
	},
	avatar: {
		width: 150,
		height: 150,
		background: 'black',
		fontSize: 68,
		fontWeight: 600,
		color: 'white',

		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		textTransform: 'uppercase',
	},
	btn: {
		position: 'absolute',
		top: 30,
		right: 50,

		height: 40,
		width: 150,
	}
}), { name: 'SettingsView'});

export default settingsViewStyles;
