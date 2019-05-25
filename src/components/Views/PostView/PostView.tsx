import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { MdComment, MdShare } from 'react-icons/md';

import { GET_POST, IGetPostRes } from './PostView.apollo';
import postViewStyles from './PostView.style';

import Discussion from './Discussion/Discussion';
import Vote from 'Components/UI/Vote/Vote';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';

interface IPostViewProps extends RouteComponentProps<{ postID: string }> {}

const PostView = (props: IPostViewProps) => {

	const classes = postViewStyles();
	const postID = props.match.params.postID;

	const { data, error, loading } = useQuery<IGetPostRes>(GET_POST, { variables: { postID } });
	if (loading) return <LoadingAnim />;
	if (error || !data) return <span className={classes.warn}>{error && error.message}</span>;

	const { title, author, content, commentCounter, createdAt, subforum, comments } = data.getPostByID;
	const date = new Date(createdAt).toLocaleString();
	return (
		<div className={classes.root}>
			<div className={classes.gg1}>
				<Vote className='voteHere' />
				<div className={classes.interior}>
					<div>
						<Link to={`/r/${subforum.name}`} className={classes.subForumName}>{subforum.name}</Link>
						<span className={classes.postTime}>Posted by <Link to={`/user/${author.name}`}>{author.name}</Link> {date}</span>
					</div>
					<div className={classes.title}>{title}</div>
					<div className={classes.essence}>{content}</div>
					<div className={classes.postToolBar}>
						<a href='#comments'>
							<button>
								<MdComment className='commentIcon el' />
								<div className='el'>{commentCounter} Comments</div>
							</button>
						</a>
						<button>
							<MdShare className='shareIcon el' />
							<div className='el'>Share</div>
						</button>
					</div>
				</div>
			</div>
			<Discussion comments={comments} />
		</div >
	);
};

export default withRouter(PostView);
