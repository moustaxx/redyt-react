import * as React from 'react';
import Discussion from './Discussion/Discussion';
import { StyledLeft, Interior, PostToolbar } from './Left.style';
import { IWindowPost } from '../PostWindow.apollo';

interface ILeftProps {
	post: IWindowPost;
}

class Left extends React.Component<ILeftProps> {
	public render() {
		const post = this.props.post;
		return (
			<StyledLeft>
				<div className='gg1'>
					{/* <Vote className='voteHere'></Vote> */}
					<Interior>
						<div>
							<span className='subForumName'>r/SubforumName</span>
							<span className='postTime'>Posted by u/{post.author.name} {post.createdAt}</span>
						</div>
						<div className='title'>{post.title}</div>
						<div className='essence'>{post.content}</div>
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
