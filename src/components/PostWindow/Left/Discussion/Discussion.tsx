import * as React from 'react';
import Comment from './Comment';
import { StyledDiscussion, AddComment, Button, SortOptions } from './Discussion.style';

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
			<svg viewBox='0 0 20 20'>
				<g><path fill='inherit' d='M14.1711599,9.3535 L9.99925636,13.529 L5.82735283
				,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,
				8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535' /></g>
			</svg>
			</button>
			{/* <SortMenu /> */}
		</SortOptions>
		<div className='comments'>
			<Comment />
		</div>
	</StyledDiscussion>
);

export default Discussion;
