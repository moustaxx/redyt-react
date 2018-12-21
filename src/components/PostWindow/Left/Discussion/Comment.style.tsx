import styled from 'Theme/';

export const StyledComment = styled.div`
	margin: 15px 0;
	.subComment {
		margin-left: 15px;
	}
	.cnt {
		display: flex;
		div {
			display: inline;
		}
		.voteHere {
			width: 30px;
			padding-top: 5px;
			margin-right: 10px;
			flex-shrink: 0;
			flex-direction: column;
			align-items: center;
			justify-content: unset;
			display: flex;
		}
		.author {
			font-size: 13px;
			color: ${props => props.theme.secondarySubforumColor};
			margin-right: 2px;
		}
		.date {
			font-size: 13px;
			color: #808486;
		}
		.essence {
			display: block;
			margin: 2px 0;
			line-height: 21px;
		}
		.toolbar {
			font-size: 13px;
			font-weight: 500;
			color: #808486;
			.share {
				margin-right: 6px;
			}
		}
	}
`;
