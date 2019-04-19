import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const communityDetailsStyles = makeStyles((theme: IThemeInterface) => ({
	subForumName: {
		marginBottom: 15,
		fontSize: 20,
		fontWeight: 600,
	},
	cnt: {
		padding: 15,
	},
	description: {
		margin: '15px 0',
	},
	stats: {
		display: 'inline-flex',
		width: '100%',
	},
	subs: {
		width: '50%',
	},
	online: {
		width: '50%',
		borderLeft: '1px solid #0000001c',
		paddingLeft: 10,
		boxSizing: 'content-box',
	},
	btn: {
		width: '100%',
		margin: '2px 0',
	}
}), { name: 'CommunityDetails'});

export default communityDetailsStyles;
