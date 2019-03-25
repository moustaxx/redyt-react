import * as React from 'react';
import Vote from 'Components/UI/Vote/Vote';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { IPost } from '../Posts.apollo';
import { StyledPost, Cnt, FirstLine, PostContent, Stats, PostDate } from './Post.style';
import { MdComment, MdMoreHoriz } from 'react-icons/md';
import { TiAttachment } from 'react-icons/ti';

interface IPostProps extends RouteComponentProps<{ subforumName: string }> {
	post: IPost;
	voteBalance?: number;
	isAttachment?: boolean;
}

const Post = (props: IPostProps) => {
	const { id, title, author, commentCounter, createdAt } = props.post;
	const date = new Date(createdAt).toLocaleString();
	const subforumName = props.match.params.subforumName;

	return (
		<StyledPost onClick={() => props.history.push(subforumName + '/' + id)}>
			<Vote className='voteHere' voteBalance={props.voteBalance} />
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
						{props.isAttachment ? <TiAttachment className='attachmentIcon' /> : null }
						<div className='comments'>
							<MdComment className='commentIcon' />
							<div className='comNumber'>{commentCounter}</div>
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
};

export default withRouter(Post);
