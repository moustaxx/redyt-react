import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const notLoggedInStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		border: '1px solid ' + theme.borderColor,
		borderRadius: 5,
		margin: '15px 5px',
		color: '#878a8c',
		boxSizing: 'border-box',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '5px 10px',
	},
	cnt: {
		display: 'flex',
	},
	btn: {
		margin: '2px 5px',
		fontSize: 14,
		width: 100,
	}
}), { name: 'NotLoggedIn'});

export default notLoggedInStyles;
