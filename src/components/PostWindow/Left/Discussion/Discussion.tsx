import * as React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import Comment from './Comment';
import { StyledDiscussion, SortOptions } from './Discussion.style';
import NotLoggedIn from './NotLoggedIn';

const Discussion = () => {
	return (
		<StyledDiscussion>
			<NotLoggedIn />
			<SortOptions>
				<button className='sort' id='sortButton'>
					<span>Sort</span>
					<span className='slide'>HOT</span>
					<MdArrowDropDown />
				</button>
				{/* <SortMenu /> */}
			</SortOptions>
			<div className='comments'>
				<Comment />
			</div>
		</StyledDiscussion>
	);
};

export default Discussion;
