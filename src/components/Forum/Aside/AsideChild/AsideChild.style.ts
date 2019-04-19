import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const asideChildStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		marginBottom: 27,
		background: theme.background.secondary,
		overflow: 'hidden',
		/* border: 1px solid ${props => props.theme.borderColor}; */
		borderRadius: 4,
		'& .componentName': {
			textTransform: 'uppercase',
			fontSize: 11,
			fontWeight: 700,
			letterSpacing: '.5px',
			height: 36,
			color: 'white',
			background: theme.themeType === 'light' ? theme.subforum.tertiary : 'transparent',
			padding: 11,
			boxSizing: 'border-box',
		}
	},
}), { name: 'AsideChild'});

export default asideChildStyles;
