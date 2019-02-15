import styled from 'Theme/';
import DropDown from 'Components/UI/DropDown/DropDown';


export const StyledDropDown = styled(DropDown)`
	border-top: none;
	width: 270px;
	.heading {
		padding-left: 24px;
	}
	a {
		padding-left: 24px;
	}
	.filter {
		color: ${props => props.theme.fontColor}
		margin: 0 auto;
		margin-top: 5px;
		padding-left: 8px;
		width: 85%;
		height: 30px;
		box-sizing: border-box;
		background: ${props => props.theme.searchBoxBgColor};
		&:hover {
			border-color: #0079d3;
		}
	}
`;
