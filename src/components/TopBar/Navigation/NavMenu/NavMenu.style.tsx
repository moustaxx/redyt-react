import styled from 'Theme/';
import * as Color from 'color';


export const StyledNavMenuOpen = styled.div`
	width: 270px;
	position: absolute;
	z-index: 100;
	top: 38px;
	left: 152px;
	border-radius: 5px;
	border-top-left-radius: initial;
	border-top-right-radius: initial;
	border: 1px solid ${props => props.theme.borderColor};
	border-top: none;
	overflow: hidden;
	box-sizing: border-box;
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: ${props => props.theme.secondaryBgColor};
		padding-top: 5px;
		padding-bottom: 10px;
		.feedsCaption {
			padding-left: 24px;
			margin-bottom: 10px;
			margin-top: 15px;
			font-size: 12px;
			font-weight: 500;
			color: #878a8c;
		}
		a {
			height: 38px;
			display: flex;
			align-items: center;
			padding-left: 24px;
			transition: 0.2s;
			cursor: pointer;
		}
		a:hover {
			background: ${props => Color(props.theme.secondaryBgColor).lighten(0.12).string()};
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
	}
`;
