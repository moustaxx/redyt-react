// import styled from 'Theme/';
// import { niceButton } from 'Components/UI/Button/Button';

// export const StyledAddComment = styled.form`
// 	border: 1px solid ${props => props.theme.borderColor};
// 	border-radius: 5px;
// 	margin: 15px 5px;
// 	color: #878a8c;
// 	box-sizing: border-box;
// 	display: flex;
// 	padding: 5px 10px;
// 	flex-direction: column;
// 	align-items: flex-end;

// 	textarea {
// 		width: 100%;
// 		height: 100px;
// 		padding: 12px;
// 		box-sizing: border-box;
// 		font-size: 18px;
// 		resize: vertical;
// 		background: ${p => p.theme.background.searchBox};
// 		color: ${p => p.theme.fontColor};
// 	}
// `;

// export const Button = styled(niceButton)`
// 	margin: 2px 0;
// 	font-size: 14px;
// 	width: 100px;
// `;

import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const addCommentStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		border: '1px solid ' + theme.borderColor,
		borderRadius: 5,
		margin: '15px 5px',
		color: '#878a8c',
		boxSizing: 'border-box',
		display: 'flex',
		padding: '5px 10px',
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	textarea: {
		width: '100%',
		height: 100,
		padding: 12,
		boxSizing: 'border-box',
		fontSize: 18,
		resize: 'vertical',
		background: theme.background.searchBox,
		color: theme.fontColor,
	},
	btn: {
		margin: '2px 0',
		fontSize: 14,
		width: 100,
	}
}), { name: 'AddComment'});

export default addCommentStyles;
