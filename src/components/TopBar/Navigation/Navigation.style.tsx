import styled from 'Theme/';

export const StyledNavMenu = styled.div`
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
	&:hover, &.active {
		border: 1px solid ${props => props.theme.borderColor};
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
		& > svg {
			width: 20px;
			height: 20px;
			fill: ${props => props.theme.fontColor};
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
