import styled from 'Theme/';
import DropDown from 'Components/UI/DropDown/DropDown';

export const StyledDropDown = styled(DropDown)`
	position: relative;
	left: 45px;
	width: 155px;
	background: ${props => props.theme.secondaryBgColor};
	li {
		border-bottom: 1px solid ${props => props.theme.borderColor};
		&:last-child {
			border-bottom: none;
		}
	}
`;

export const SortButton = styled.button`
	display: flex;
	align-items: center;
	height: inherit;
	margin-left: 30px;
	text-transform: uppercase;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.5px;
	color: ${props => props.theme.iconColor};
	background: transparent;
	padding: 0 10px;
	.slide {
		margin-left: 8px;
	}

	& > svg {
		width: 20px;
		height: 20px;
		color: ${props => props.theme.secondarySubforumColor};
	}
`;
