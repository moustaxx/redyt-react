import * as React from 'react';
import { Link } from 'react-router-dom';
import { MdComment, MdShare } from 'react-icons/md';

import { IWindowPost } from '../PostView.apollo';
import postContentStyles from './PostContent.style';
import Discussion from './Discussion/Discussion';
import Vote from 'Components/UI/Vote/Vote';

interface IPostContentProps {
	post: IWindowPost;
}

const PostContent = (props: IPostContentProps) => {
	const classes = postContentStyles();
	const { title, author, content, commentCounter, createdAt, subforum, comments } = props.post;
	const date = new Date(createdAt).toLocaleString();
	return (
		<div className={classes.root}>
			<div className={classes.gg1}>
				<Vote className='voteHere' />
				<div className={classes.interior}>
					<div>
						<span className={classes.subForumName}>{subforum.name}</span>
						<span className={classes.postTime}>Posted by <Link to={`/user/${author.name}`}>{author.name}</Link> {date}</span>
					</div>
					<div className={classes.title}>{title}</div>
					<div className={classes.essence}>{content}</div>
					<div className={classes.postToolBar}>
						<button>
							<MdComment className='commentIcon el' />
							<div className='el'>{commentCounter} Comments</div>
						</button>
						<button>
							<MdShare className='shareIcon el' />
							<div className='el'>Share</div>
						</button>
					</div>
				</div>
			</div>
			<Discussion comments={comments}/>
		</div>
	);
};
export default PostContent;
