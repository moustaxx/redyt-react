import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledComment } from './Comment.style';
import { IComment } from '../../PostWindow.apollo';

interface ICommentProps {
	data: IComment;
}

const Comment = ({ data }: ICommentProps) => {
	const date = new Date(data.createdAt).toLocaleString();
	return (
		<StyledComment>
			<div className='cnt'>
				{/* <Vote className='voteHere'></Vote> */}
				<div>
					<Link className='author' to={'/user/' + data.author.name}>{data.author.name}</Link>
					<div className='date'>{date}</div>
					<div className='essence'>{data.content}</div>
					<div className='toolbar'>
						<div className='share'>Share</div>
						<div className='reply'>Reply</div>
					</div>
				</div>
			</div>
		</StyledComment>
	);
};

export default Comment;
