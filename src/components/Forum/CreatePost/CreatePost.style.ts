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
		'& .titleBox': {
			background: 'white',
			color: 'black',
			border: 'none',
			borderRadius: 0,
			margin: 0,
		},
	},
	heading: {
		fontSize: 20,
		fontWeight: 600,
		marginBottom: 15,
	},
	quill: {
		background: 'white',
		color: 'black',
		margin: '4px 0',
	},
	warn: {
		fontSize: 18,
		margin: '8px 0',
		'& > *': {
			display: 'inline',
			verticalAlign: 'middle',
		},
		'& > svg': {
			color: 'yellow',
			margin: '0 2px',
		}
	}
}), { name: 'CreatePost'});

export default createPostStyles;
