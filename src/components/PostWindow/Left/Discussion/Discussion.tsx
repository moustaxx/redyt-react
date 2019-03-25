import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { MdArrowDropDown } from 'react-icons/md';

import { StyledDiscussion, SortOptions, CommentError } from './Discussion.style';
import { IGetCommentsByPostRes, GET_COMMENTS } from './Discussion.apollo';
import Comment from './Comment';
import LoadingSpinner from 'Components/UI/LoadingSpinner/LoadingSpinner';
import AddComment from './AddComment';

interface IDiscussionProps {
	postID: string;
}

const Discussion = ({ postID }: IDiscussionProps) => {
	const { data, loading, error } = useQuery<IGetCommentsByPostRes>(GET_COMMENTS, { variables: { postID } });
	if (loading) return <LoadingSpinner />;
	if (error) return <CommentError>Error! Could not show comments!</CommentError>;
	if (!data) return null;
	return (
		<StyledDiscussion>
			<AddComment />
			{data.getCommentsByPost.length ?
				<SortOptions>
					<button className='sort' id='sortButton'>
						<span>Sort</span>
						<span className='slide'>HOT</span>
						<MdArrowDropDown />
					</button>
					{/* <SortMenu /> */}
				</SortOptions>
			: null}
			<div className='comments'>
				{data.getCommentsByPost.map(({ id, content, author, createdAt }) =>
					<Comment key={id} data={{ id, content, author, createdAt}} />
				)}
			</div>
		</StyledDiscussion>
	);
};

export default Discussion;
