import * as React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import { IComment } from 'Components/Views/PostView/PostView.apollo';
import discussionStyles from './Discussion.style';
import Comment from './Comment';
import AddComment from './AddComment';

interface IDiscussionProps {
	comments: IComment[];
}

const Discussion = ({ comments }: IDiscussionProps) => {
	const classes = discussionStyles();
	return (
		<div className={classes.root}>
			<AddComment />
			{comments.length ?
				<div className={classes.sortOptions}>
					<button className={classes.sort}>
						<span>Sort</span>
						<span className={classes.slide}>HOT</span>
						<MdArrowDropDown />
					</button>
					{/* <SortMenu /> */}
				</div>
			: null}
			<div>
				{comments.map(comment =>
					<Comment key={comment.id} data={comment} />
				)}
			</div>
		</div>
	);
};

export default Discussion;
