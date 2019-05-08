import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const createPostStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		background: theme.background.secondary,
		padding: 32,
		height: 'fit-content',
		width: '100%',
		'& > form': {
			maxWidth: 1024,
			margin: '0 auto',
		},
	},
	heading: {
		fontSize: 20,
		fontWeight: 600,
		marginBottom: 15,
	},
	textarea: {
		width: '100%',
		height: 128,
		padding: 16,
		boxSizing: 'border-box',
		resize: 'vertical',
		background: theme.background.primary,
		color: theme.fontColor,
		border: '1px solid transparent',
		'&:focus': {
			outline: 0,
			border: `1px solid ${theme.subforum.secondary}`,
		}
	},
}), { name: 'CreatePost'});

export default createPostStyles;
