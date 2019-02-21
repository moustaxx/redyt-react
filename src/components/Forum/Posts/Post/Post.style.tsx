import styled from 'Theme/';

export const StyledPost = styled.div`
	width: 100%;
	display: flex;
	border: 1px solid ${props => props.theme.borderColor};
	border-top: 1px solid transparent;
	margin-bottom: -1px;
	cursor: pointer;
	box-sizing: border-box;
	transition: .1s;
	&:hover {
		border: 1px solid #898989 !important;
		z-index: 1;
	}
	&:first-child {
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		border-top: 1px solid ${props => props.theme.borderColor};
	}
	&:last-child {
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	.voteHere {
		width: 80px;
		border-right: 1px solid ${props => props.theme.borderColor};
		padding-top: 8px;
		flex-shrink: 0;
		justify-content: center;
	}
`;

export const Cnt = styled.div`
	width: 100%;
	margin-left: 8px;
`;

export const FirstLine = styled.div`
	display: flex;
	width: 100%;
`;

export const PostContent = styled.div`
	display: flex;
	flex-grow: 1;
	font-size: 14px;
	padding-top: 3px;
	.tag {
		background:  ${props => props.theme.mainSubforumColor};
		padding: 0 4px;
		margin-right: 5px;
		float: left;
		font-weight: normal;
		border-radius: 4px;
	}
	.postHeading {
		font-weight: 500;
		color: ${props => props.theme.fontColor};
		margin-right: 8px;
	}
	.attachedLink {
		color: ${props => props.theme.secondarySubforumColor};
		text-decoration: none;
	}
	.attachedLink:hover {
		text-decoration: underline;
	}
`;

export const Stats = styled.div`
	flex-shrink: 0;
	display: inline-flex;
	justify-content: space-between;
	& > * {
		margin: 0 3px;
		flex-shrink: 0;
	}
	.attachmentIcon {
		display: inline-box;
		vertical-align: middle;
		width: 22px;
		height: 22px;
	}
	.postOptionsIcon {
		height: 100%;
		margin-right: 10px;
	}
	.comments {
		div, svg {
			display: inline;
			vertical-align: middle;
		}
		.commentIcon {
			margin-right: 4px;
		}
		.comNumber {
			color: ${props => props.theme.iconColor};
			font-size: 14px;
			font-weight: 500;
			vertical-align: bottom;
		}
	}
`;

export const PostDate = styled.div`
	font-size: 12px;
	height: 20px;
	display: flex;
	align-items: center;
	color: #7c7c7c;
`;
