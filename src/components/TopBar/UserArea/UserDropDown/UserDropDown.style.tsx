import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const dropDownStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		borderTop: 'none',
		position: 'absolute',
		width: 200,
		top: 43,
		right: 20,
	},
	heading: {
		paddingLeft: 13,
		marginBottom: 10,
		marginTop: 15,
		fontSize: 12,
		fontWeight: 500,
		color: '#878a8c',
		textTransform: 'uppercase',
	}
}), { name: 'DropDown'});

export default dropDownStyles;
