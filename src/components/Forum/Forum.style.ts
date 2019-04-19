import { createStyles, WithStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const forumStyles = (theme: IThemeInterface) => createStyles({
	root: {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: 'calc(100vh - 50px)',
		overflow: 'auto',
	},
	content: {
		display: 'inline-flex',
		margin: '5px 8px',
	},
	nothingToShow: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '30px 0',
		fontSize: 24,
	}
});

export type TForumStyles = WithStyles<typeof forumStyles>;

export default forumStyles;
