import * as React from 'react';
import Comment from './Comment';
import { StyledDiscussion, AddComment, Button, SortOptions } from './Discussion.style';
import DropDown from 'Components/UI/Svgs/DropDown';

const Discussion = () => (
	<StyledDiscussion>
		<AddComment>
			<span>Log in to add a comment.</span>
			<div>
				<Button>Log in</Button>
				<Button>Sign up</Button>
			</div>
		</AddComment>
		<SortOptions>
			<button className='sort' id='sortButton'>
			<span>Sort</span>
			<span className='slide'>HOT</span>
			<DropDown />
			</button>
			{/* <SortMenu /> */}
		</SortOptions>
		<div className='comments'>
			<Comment />
		</div>
	</StyledDiscussion>
);

export default Discussion;
