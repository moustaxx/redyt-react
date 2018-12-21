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
	}
	&:last-child {
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	.voteHere {
		width: 90px;
		background: #f7f9fa;
		border-right: 1px solid ${props => props.theme.borderColor};
		padding-top: 5px;
		flex-shrink: 0;
		justify-content: center;
	}
`;

export const Cnt = styled.div`
	width: 100%;
`;

export const FirstLine = styled.div`
	display: flex;
	width: 100%;
	.attachment {
		width: 40px;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${props => props.theme.iconColor};
	}
	.attachment:after {
		content: "\\F118";
	}
`;

export const PostContent = styled.div`
	display: flex;
	flex-grow: 1;
	font-size: 14px;
	padding-top: 7px;
	.tag {
		background: #edeff1;
		padding: 0 3px;
		margin-right: 5px;
		float: left;
		font-weight: normal;
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
	width: 85px;
	flex-shrink: 0;
	display: inline-flex;
	justify-content: space-between;
	.postSettings {
		height: 25px;
		line-height: 1.4em;
		margin-right: 10px;
	}
	.postSettings::before {
		content: "\\F11B";
	}
`;

export const Comments = styled.div`
	height: 25px;
	div {
		display: inline;
		vertical-align: middle;
	}
	.commentIco {
		margin-right: 4px;
	}
	.commentIco:before {
		content: "\\F105";
	}
	.comNumber {
		color: ${props => props.theme.iconColor};
		font-size: 13px;
		line-height: 2;
		font-weight: 500;
	}
`;

export const PostDate = styled.div`
	font-size: 12px;
	height: 20px;
	display: flex;
	align-items: center;
	padding-left: 40px;
	color: #7c7c7c;
`;
