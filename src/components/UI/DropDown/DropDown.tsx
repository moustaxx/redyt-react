import styled from 'Theme/';
import * as Color from 'color';

export const DropDown = styled.div`
	width: 200px;
	position: absolute;
	z-index: 100;
	border-radius: 5px;
	border: 1px solid ${props => props.theme.borderColor};
	border-top: none;
	overflow: hidden;
	box-sizing: border-box;
	margin: 0 -1px;
	cursor: initial;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${props => props.theme.secondaryBgColor};
	padding-bottom: 10px;
	.heading {
		padding-left: 13px;
		margin-bottom: 10px;
		margin-top: 15px;
		font-size: 12px;
		font-weight: 500;
		color: #878a8c;
		text-transform: uppercase;
	}
	a {
		height: 38px;
		display: flex;
		align-items: center;
		padding-left: 7px;
		transition: 0.2s;
		cursor: pointer;

		& > svg {
			width: 20px;
			height: 20px;
			margin: 0 7px;
			color: ${p => p.theme.iconColor}
		}
	}
	a:hover {
		background: ${props => Color(props.theme.secondaryBgColor).lighten(0.19).string()};
	}
`;


export default DropDown;
