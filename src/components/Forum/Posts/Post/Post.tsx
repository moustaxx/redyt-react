import * as React from 'react';
import Vote from 'Components/Shared/Vote/Vote';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { IPost } from '../Posts.apollo';
import { StyledPost, Cnt, FirstLine, PostContent, Stats, Comments, PostDate } from './Post.style';

interface IPostProps extends RouteComponentProps<{ subforumName: string}> {
	post: IPost;
}

class Post extends React.Component<IPostProps> {
	public render() {
		return (
			<Link to={`${this.props.match.params.subforumName}/${this.props.post.id}`} >
				<StyledPost>
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
export default withRouter(Post);
