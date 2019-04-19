import * as React from 'react';
import { Link } from 'react-router-dom';
import commentStyles from './Comment.style';
import { IComment } from '../../PostWindow.apollo';

interface ICommentProps {
	data: IComment;
}

const Comment = ({ data }: ICommentProps) => {
	const classes = commentStyles();
	const date = new Date(data.createdAt).toLocaleString();
	return (
		<div className={classes.root}>
			<div className={classes.cnt}>
				{/* <Vote className={classes.voteHere}></Vote> */}
				<div>
					<Link className={classes.author} to={'/user/' + data.author.name}>{data.author.name}</Link>
					<div className={classes.date}>{date}</div>
					<div className={classes.essence}>{data.content}</div>
					<div className={classes.toolbar}>
						<div className={classes.share}>Share</div>
						<div className={classes.reply}>Reply</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
