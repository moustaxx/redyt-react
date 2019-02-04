import styled from 'Theme/';
import * as Color from 'color';

export const StyledSortMenu = styled.div`
	position: relative;
	left: 45px;
	width: 155px;
	z-index: 5;
	ul {
		list-style-type: none;
		border: 1px solid ${props => props.theme.borderColor};
		border-radius: 3px;
		background: ${props => props.theme.secondaryBgColor};
		li {
			height: 40px;
			padding-left: 10px;
			line-height: 2;
			border-bottom: 1px solid ${props => props.theme.borderColor};
			transition: .3s;
			&:hover {
				background: ${props => Color(props.theme.secondaryBgColor).lighten(0.17).string()};
			}
			&:last-child {
				border-bottom: none;
			}
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
`;

export const Svg = styled.svg`
	width: 17px;
	height: 17px;
	margin-bottom: 3px;
	fill:${props => props.theme.secondarySubforumColor};
`;
