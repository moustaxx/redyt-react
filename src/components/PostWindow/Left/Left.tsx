import * as React from 'react';
import Discussion from './Discussion/Discussion';
import { StyledLeft, Interior, PostToolbar } from './Left.style';

class Left extends React.Component {
	public render() {
		return (
			<StyledLeft>
				<div className='gg1'>
					{/* <Vote className='voteHere'></Vote> */}
					<Interior>
						<div>
							<span className='subForumName'>r/SubforumName</span>
							<span className='postTime'>Posted by u/username 21:20 21 May 2018</span>
						</div>
						<div className='title'>Post title</div>
						<div className='essence'>Post content</div>
						<PostToolbar>
							<button>
								<div className='commentIco icon'></div>
								<div>17 Comments</div>
							</button>
							<button>
								<div className='shareIco icon'></div>
								<div>Share</div>
							</button>
						</PostToolbar>
					</Interior>
				</div>
				<Discussion />
			</StyledLeft>
		);
	}
}
export default Left;
