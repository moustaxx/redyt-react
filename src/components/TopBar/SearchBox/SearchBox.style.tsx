import styled from 'Theme/';
import TextBox from 'Components/UI/TextBox/TextBox';

export const Form = styled.form`
	height: 70%;
	width: 100%;
	margin: 0 5px;
	position: relative;
	display: inline-flex;
	align-items: center;

	& > svg {
		position: absolute;
		left: 7px;
		width: 21px;
		height: 21px;
	}
`;

export const StyledTextBox = styled(TextBox)`
	height: 100%;
	width: 100%;
	padding-left: 32px;
`;
