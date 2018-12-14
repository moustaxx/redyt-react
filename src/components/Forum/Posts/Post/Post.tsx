import * as React from 'react';
import styled from 'Theme/';
import Vote from 'Components/Shared/Vote/Vote';
import { Link } from 'react-router-dom';
import { IPost } from '../Posts.apollo';

const StyledPost = styled.div`

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

const Cnt = styled.div`
	width: 100%;
`;

const FirstLine = styled.div`
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

const PostContent = styled.div`
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

const Stats = styled.div`
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

const Comments = styled.div`
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

const PostDate = styled.div`
	font-size: 12px;
	height: 20px;
	display: flex;
	align-items: center;
	padding-left: 40px;
	color: #7c7c7c;
`;

interface IPostProps {
	post: IPost;
}

class Post extends React.Component<IPostProps> {
	public render() {
		console.log(this.props.post);
		return (
			<Link to={'/post'} >
				<StyledPost>
					{/* <Vote className='voteHere' /> */}
					<Vote />
					<Cnt>
						<FirstLine>
							<div className='attachment icon'></div>
							<PostContent>
								<div className='postHeading'>
									<div className='tag'></div>
									<span className='postTitle'>{this.props.post.title}</span>
									<span className='attachedLink'></span>
								</div>
							</PostContent>
							<Stats>
								<Comments>
									<div className='commentIco icon'></div>
									<div className='comNumber'>5</div>
								</Comments>
								<div className='postSettings icon'></div>
							</Stats>
						</FirstLine>
						<PostDate>Posted by u/{this.props.post.author.name} {this.props.post.createdOn}</PostDate>
					</Cnt>
				</StyledPost>
			</Link>
		);
	}
}
export default Post;
