import styled from 'Theme/';
import * as Color from 'color';

export const DropDown = styled.div`
	width: 200px;
	position: relative;
	z-index: 100;
	border-radius: 5px;
	border: 1px solid ${props => props.theme.borderColor};
	overflow: hidden;
	box-sizing: border-box;
	margin: 0 -1px;
	cursor: initial;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${props => props.theme.background.secondary};
	padding-bottom: 10px;
	list-style-type: none;
	.heading {
		padding-left: 13px;
		margin-bottom: 10px;
		margin-top: 15px;
		font-size: 12px;
		font-weight: 500;
		color: #878a8c;
		text-transform: uppercase;
	}
	a, li {
		height: 38px;
		display: flex;
		align-items: center;
		padding-left: 7px;
		transition: .3s;
		cursor: pointer;

		& > svg {
			width: 20px;
			height: 20px;
			margin: 0 7px;
			color: ${p => p.theme.iconColor}
		}
	}
	a:hover, li:hover {
		background: ${props => props.theme.lightTheme
			? Color(props.theme.background.secondary).darken(0.05).string()
			: Color(props.theme.background.secondary).lighten(0.19).string()
		};
	}
`;


export default DropDown;
