import * as React from 'react';
import Vote from 'Components/UI/Vote/Vote';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { IPost } from '../Posts.apollo';
import { StyledPost, Cnt, FirstLine, PostContent, Stats, PostDate } from './Post.style';
import { MdComment, MdMoreHoriz } from 'react-icons/md';
import { TiAttachment } from 'react-icons/ti';

interface IPostProps extends RouteComponentProps<{ subforumName: string }> {
	post: IPost;
}

class Post extends React.Component<IPostProps> {
	public render() {
		const { id, title, author, createdAt } = this.props.post;
		const date = new Date(createdAt).toLocaleString();
		return (
			<Link to={`${this.props.match.params.subforumName}/${id}`} >
				<StyledPost>
					<Vote className='voteHere'/>
					<Cnt>
						<FirstLine>
							<PostContent>
								<div className='postHeading'>
									{/* <div className='tag' /> */}
									<span className='postTitle'>{title}</span>
									<span className='attachedLink' />
								</div>
							</PostContent>
							<Stats>
								<TiAttachment className='attachmentIcon' />
								<div className='comments'>
									<MdComment className='commentIcon' />
									<div className='comNumber'>5</div>
								</div>
								<MdMoreHoriz className='postOptionsIcon' />
							</Stats>
						</FirstLine>
						<PostDate>
							<span>Posted by <Link to={`/user/${author.name}`}>{author.name}</Link> {date}</span>
						</PostDate>
					</Cnt>
				</StyledPost>
			</Link>
		);
	}
}
export default withRouter(Post);
