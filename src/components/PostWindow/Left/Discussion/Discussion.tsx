import * as React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import { IComment } from 'Components/PostWindow/PostWindow.apollo';
import { StyledDiscussion, SortOptions } from './Discussion.style';
import Comment from './Comment';
import AddComment from './AddComment';

interface IDiscussionProps {
	comments: IComment[];
}

const Discussion = ({ comments }: IDiscussionProps) => {
	return (
		<StyledDiscussion>
			<AddComment />
			{comments.length ?
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
				{comments.map(comment =>
					<Comment key={comment.id} data={comment} />
				)}
			</div>
		</StyledDiscussion>
	);
};

export default Discussion;
