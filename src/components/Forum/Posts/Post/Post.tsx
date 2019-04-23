import * as React from 'react';
import Vote from 'Components/UI/Vote/Vote';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { IPost } from '../Posts.apollo';
import { MdComment, MdMoreHoriz } from 'react-icons/md';
import { TiAttachment } from 'react-icons/ti';
import postStyles from './Post.style';

interface IPostProps extends RouteComponentProps<{ subforumName: string }> {
	post: IPost;
	voteBalance?: number;
	isAttachment?: boolean;
}

const Post = (props: IPostProps) => {
	const classes = postStyles();

	const { id, title, author, commentCounter, createdAt } = props.post;
	const date = new Date(createdAt).toLocaleString();
	const subforumName = props.match.params.subforumName;

	const setLocation = () => props.history.push(subforumName + '/' + id);
	const stopPropagation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => e.stopPropagation();

	return (
		<div className={classes.root} onClick={setLocation}>
			<Vote className={classes.voteHere} voteBalance={props.voteBalance} />
			<div className={classes.cnt}>
				<div className={classes.firstLine}>
					<div className={classes.postContent}>
						<div className='postHeading'>
							<div className='tag' />
							<Link to={id} className='postTitle'>{title}</Link>
							<span className='attachedLink' />
						</div>
					</div>
					<div className={classes.stats}>
						{props.isAttachment ? <TiAttachment className='attachmentIcon' /> : null }
						<div className='comments'>
							<MdComment className='commentIcon' />
							<div className='comNumber'>{commentCounter}</div>
						</div>
						<MdMoreHoriz className='postOptionsIcon' />
					</div>
				</div>
				<div className={classes.postDate}>
					<span>
						Posted by <Link onClick={stopPropagation} to={'/user/' + author.name}>{author.name}</Link> {date}
					</span>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Post);
