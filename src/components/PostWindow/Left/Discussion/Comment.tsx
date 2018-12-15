import * as React from 'react';
import { StyledComment } from './Comment.style';

class Comment extends React.Component {
	public render() {
		return (
			<StyledComment>
				<div className='cnt'>
					{/* <Vote class='voteHere'></Vote> */}
					<div>
						<div className='author'>cersit</div>
						<div className='date'>9 days ago</div>
						<div className='essence'>Html5 is the standard, it's also hard to not use any tiny
						 part of it, but obviously you utilize more than only html itself.</div>
						<div className='toolbar'>
							<div className='share'>Share</div>
							<div className='reply'>Reply</div>
						</div>
					</div>
					{/* <Comment /> */}
				</div>
			</StyledComment>
		);
	}
}
export default Comment;
