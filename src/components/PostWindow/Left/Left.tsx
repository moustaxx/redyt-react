import * as React from 'react';
import styled from 'Theme/';
import Discussion from './Discussion/Discussion';

const StyledLeft = styled.div`
	background: ${props => props.theme.secondaryBgColor};
	width: 890px;
	height: fit-content;
	border: 1px solid #4e4e4e;
	border-radius: 4px;
	margin-left: 5px;
	.gg1 {
		display: flex;
		margin: 0 8px;
		margin-top: 8px;
		.voteHere {
			width: 30px;
			padding-top: 5px;
			flex-shrink: 0;
			flex-direction: column;
			align-items: center;
			justify-content: unset;
		}
	}
`;

const Interior = styled.div`
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

const PostToolbar = styled.div`
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
		div {
			display: inline;
			vertical-align: middle;
		}
	}
	.commentIco::after {
		content: "\\F105";
	}
	.shareIco::after {
		content: "\\F12A";
	}
`;

class Left extends React.Component {
	public render() {
		return (
			<StyledLeft>
				<div className='gg1'>
					{/* <Vote className='voteHere'></Vote> */}
					<Interior>
						<div>
							<span className='subForumName'>r/SubforumName</span>
							<span className='postTime'>Posted by u/username 21:20 21 May 2018</span>
						</div>
						<div className='title'>Post title</div>
						<div className='essence'>Post content</div>
						<PostToolbar>
							<button>
								<div className='commentIco icon'></div>
								<div>17 Comments</div>
							</button>
							<button>
								<div className='shareIco icon'></div>
								<div>Share</div>
							</button>
						</PostToolbar>
					</Interior>
				</div>
				<Discussion />
			</StyledLeft>
		);
	}
}
export default Left;
