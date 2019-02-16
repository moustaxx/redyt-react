import * as React from 'react';
import Discussion from './Discussion/Discussion';
import { StyledLeft, Interior, PostToolbar } from './Left.style';
import { IWindowPost } from '../PostWindow.apollo';
import Vote from 'Components/UI/Vote/Vote';
import { MdComment, MdScreenShare } from 'react-icons/md';

interface ILeftProps {
	post: IWindowPost;
}

class Left extends React.Component<ILeftProps> {
	public render() {
		const { title, author, content, createdAt, subforum } = this.props.post;
		const date = new Date(createdAt).toLocaleString();
		return (
			<StyledLeft>
				<div className='gg1'>
					<Vote className='voteHere' />
					<Interior>
						<div>
							<span className='subForumName'>r/{subforum.name}</span>
							<span className='postTime'>Posted by u/{author.name} {date}</span>
						</div>
						<div className='title'>{title}</div>
						<div className='essence'>{content}</div>
						<PostToolbar>
							<button>
								<MdComment className='commentIcon el' />
								<div className='el'>17 Comments</div>
							</button>
							<button>
								<MdScreenShare className='shareIcon el' />
								<div className='el'>Share</div>
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
