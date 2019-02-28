import * as React from 'react';
import Vote from 'Components/UI/Vote/Vote';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { IPost } from '../Posts.apollo';
import { StyledPost, Cnt, FirstLine, PostContent, Stats, PostDate } from './Post.style';
import { MdComment, MdMoreHoriz } from 'react-icons/md';
import { TiAttachment } from 'react-icons/ti';

interface IPostProps extends RouteComponentProps<{ subforumName: string }> {
	post: IPost;
}

interface IPostState {
	isAttachment: boolean;
	commentCount: number;
	voteBalance: number;

}

class Post extends React.Component<IPostProps, IPostState> {
	public state = {
		isAttachment: false,
		commentCount: 0,
		voteBalance: 0,
	};

	public render() {

		const { id, title, author, createdAt } = this.props.post;
		const { isAttachment, commentCount, voteBalance } = this.state;
		const date = new Date(createdAt).toLocaleString();
		const subforumName = this.props.match.params.subforumName;

		return (
			<StyledPost onClick={() => this.props.history.push(subforumName + '/' + id)}>
				<Vote className='voteHere' voteBalance={voteBalance} />
				<Cnt>
					<FirstLine>
						<PostContent>
							<div className='postHeading'>
								<div className='tag' />
								<Link to={id} className='postTitle'>{title}</Link>
								<span className='attachedLink' />
							</div>
						</PostContent>
						<Stats>
							{isAttachment ? <TiAttachment className='attachmentIcon' /> : null }
							<div className='comments'>
								<MdComment className='commentIcon' />
								<div className='comNumber'>{commentCount}</div>
							</div>
							<MdMoreHoriz className='postOptionsIcon' />
						</Stats>
					</FirstLine>
					<PostDate>
						<span>
							Posted by <Link onClick={e => e.stopPropagation()} to={'/user/' + author.name}>{author.name}</Link> {date}
						</span>
					</PostDate>
				</Cnt>
			</StyledPost>
		);
	}
}
export default withRouter(Post);
