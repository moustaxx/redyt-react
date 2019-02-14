import styled from 'Theme/';

export const StyledNavigation = styled.div`
	width: 270px;
	height: 70%;
	flex-shrink: 0;
	border: 1px solid transparent;
	border-radius: 5px;
	box-sizing: border-box;;
	font-size: 15px;
	cursor: pointer;
	user-select: none;
	margin: 0 5px;
	&:hover {
		border: 1px solid ${props => props.theme.borderColor};
	}
	&.active {
		border: 1px solid ${props => props.theme.borderColor};
		border-bottom: 1px solid transparent;
		border-bottom-left-radius: initial;
		border-bottom-right-radius: initial;
	}
	.cnt {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 5px;
		box-sizing: border-box;
		.cnt2 {
			padding-left: 8px;
		}
		& > * {
			display: inline;
			vertical-align: middle;
		}
	}
`;

export const NavIcon = styled.div`
	background: #0079d3;
	border-radius: 40px;
	width: 22px;
	height: 22px;
	vertical-align: middle;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin: 0 2px;
	svg {
		width: 16px;
		height: 16px;
		fill: white;
	}
`;

export const SubforumName = styled.div`
	display: inline;
	vertical-align: middle;
	margin-left: 3px;
`;

export const ClickOutside = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	cursor: initial;
`;
