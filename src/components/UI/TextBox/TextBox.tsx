import styled from 'Theme/';

const TextBox = styled.input`
	height: 50px;
	width: 250px;
	background: ${props => props.theme.searchBoxBgColor};
	border: 1px solid transparent;
	border-radius: 5px;
	padding-left: 15px;
	box-sizing: border-box;
	color: ${props => props.theme.fontColor};

	&:focus {
	outline: 0;
	border: 1px solid ${props => props.theme.secondarySubforumColor};
	}
`;


export default TextBox;
