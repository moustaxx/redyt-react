import styled from 'Theme/';

export const Form = styled.form`
	height: 70%;
	width: 100%;
	margin: 0 5px;
`;

export const Input = styled.input`
	height: 100%;
	width: 100%;
	background: ${props => props.theme.searchBoxBgColor};
	border: 1px solid ${props => props.theme.searchBoxBgColor};
	border-radius: 5px;
	padding-left: 15px;
	box-sizing: border-box;
	color: #b3b3b3;

	&:focus {
	outline: 0;
	border: 1px solid ${props => props.theme.mainSubforumColor};
	}
`;
