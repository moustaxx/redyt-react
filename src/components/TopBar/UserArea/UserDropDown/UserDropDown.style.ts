import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const dropDownStyles = makeStyles((theme: IThemeInterface) => ({
	heading: {
		paddingLeft: 13,
		margin: '10px 0',
		fontSize: 12,
		fontWeight: 500,
		color: '#878a8c',
		textTransform: 'uppercase',
	}
}), { name: 'DropDown'});

export default dropDownStyles;
