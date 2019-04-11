import * as React from 'react';
import Discussion from './Discussion/Discussion';
import { StyledLeft, Interior, PostToolbar } from './Left.style';
import { IWindowPost } from '../PostWindow.apollo';
import Vote from 'Components/UI/Vote/Vote';
import { MdComment, MdShare } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface ILeftProps {
	post: IWindowPost;
}

const Left = (props: ILeftProps) => {
		const { title, author, content, commentCounter, createdAt, subforum, comments } = props.post;
		const date = new Date(createdAt).toLocaleString();
		return (
			<StyledLeft>
				<div className='gg1'>
					<Vote className='voteHere' />
					<Interior>
						<div>
							<span className='subForumName'>{subforum.name}</span>
							<span className='postTime'>Posted by <Link to={`/user/${author.name}`}>{author.name}</Link> {date}</span>
						</div>
						<div className='title'>{title}</div>
						<div className='essence'>{content}</div>
						<PostToolbar>
							<button>
								<MdComment className='commentIcon el' />
								<div className='el'>{commentCounter} Comments</div>
							</button>
							<button>
								<MdShare className='shareIcon el' />
								<div className='el'>Share</div>
							</button>
						</PostToolbar>
					</Interior>
				</div>
				<Discussion comments={comments}/>
			</StyledLeft>
		);
};
export default Left;
