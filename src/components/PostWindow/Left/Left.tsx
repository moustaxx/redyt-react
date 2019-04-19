import * as React from 'react';
import Discussion from './Discussion/Discussion';
import leftStyles from './Left.style';
import { IWindowPost } from '../PostWindow.apollo';
import Vote from 'Components/UI/Vote/Vote';
import { MdComment, MdShare } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface ILeftProps {
	post: IWindowPost;
}

const Left = (props: ILeftProps) => {
	const classes = leftStyles();
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
export default Left;
