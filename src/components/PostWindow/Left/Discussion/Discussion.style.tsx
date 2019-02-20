import styled from 'Theme/';

export const StyledDiscussion = styled.div`
	width: 95%;
	margin: 0 auto;
`;

export const AddComment = styled.div`
	border: 1px solid  ${props => props.theme.borderColor};
	border-radius: 5px;
	margin: 15px 5px;
	color: #878a8c;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;
	.cnt {
		display: flex;
	}
`;

export const SortOptions = styled.div`
	text-transform: uppercase;
	margin: 10px 10px;
	font-size: 14px;
	.sort {
		text-transform: uppercase;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.5px;
		color: ${props => props.theme.iconColor};
		padding: 0 10px;
		span, svg {
			display: inline;
			vertical-align: middle;
		}
		.slide {
			margin-left: 10px;
			color: ${props => props.theme.secondarySubforumColor};
		}
		svg {
			width: 17px;
			height: 17px;
			margin-bottom: 1px;
			fill: ${props => props.theme.secondarySubforumColor};
		}
	}
`;
