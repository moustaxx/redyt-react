import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const navMenuStyles = makeStyles((theme: IThemeInterface) => ({
	heading: {
		paddingLeft: 13,
		marginBottom: 10,
		marginTop: 15,
		fontSize: 12,
		fontWeight: 500,
		color: '#878a8c',
		textTransform: 'uppercase',
	}
}), { name: 'NavMenu' });

export default navMenuStyles;
