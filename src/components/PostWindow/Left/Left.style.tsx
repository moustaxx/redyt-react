import styled from 'Theme/';

export const StyledLeft = styled.div`
	background: ${props => props.theme.secondaryBgColor};
	width: 890px;
	height: fit-content;
	/* border: 1px solid ${props => props.theme.borderColor}; */
	border-radius: 4px;
	margin-left: 5px;
	.gg1 {
		display: flex;
		margin: 0 8px;
		margin-top: 8px;
		.voteHere {
			width: 30px;
			padding: 0;
			padding-top: 5px;
			flex-shrink: 0;
			flex-direction: column;
			align-items: center;
			justify-content: unset;
			* {
				padding: 6px 0;
			}
			svg {
				height: 19px;
				width: 19px;
			}
		}
	}
`;

export const Interior = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 13px;
	.subForumName {
		margin-right: 3px;
		font-weight: 500;
		font-size: 14px;
	}
	.postTime {
		font-size: 13px;
		color: #808486;
	}
	.title {
		font-size: 22px;
		font-weight: 500;
		margin: 5px 0;
	}
	.essence {
		p {
			margin: 5px 0;
			white-space: pre-line;
		}
	}
`;

export const PostToolbar = styled.div`
	height: 32px;
	width: 100%;
	margin: 4px 0;
	display: flex;
	align-items: center;
	font-size: 13px;
	font-weight: 500;
	color: #808486;
	button {
		padding: 5px;
		margin-right: 5px;
		color: inherit;
		.el {
			margin: 0 2px;
			display: inline;
			vertical-align: middle;
		}
	}
`;
