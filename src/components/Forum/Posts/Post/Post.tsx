import * as React from 'react';
import Vote from 'Components/Shared/Vote/Vote';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { IPost } from '../Posts.apollo';
import { StyledPost, Cnt, FirstLine, PostContent, Stats, Comments, PostDate } from './Post.style';

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
					<Vote />
					<Cnt>
						<FirstLine>
							<div className='attachment icon' />
							<PostContent>
								<div className='postHeading'>
									<div className='tag' />
									<span className='postTitle'>{title}</span>
									<span className='attachedLink' />
								</div>
							</PostContent>
							<Stats>
								<Comments>
									<div className='commentIco icon' />
									<div className='comNumber'>5</div>
								</Comments>
								<div className='postSettings icon' />
							</Stats>
						</FirstLine>
						<PostDate>Posted by u/{author.name} {date}</PostDate>
					</Cnt>
				</StyledPost>
			</Link>
		);
	}
}
export default withRouter(Post);
