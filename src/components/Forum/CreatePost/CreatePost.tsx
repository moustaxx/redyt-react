import * as React from 'react';
import { useMutation } from 'react-apollo-hooks';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { isApolloError } from 'apollo-client';
import ReactQuill from 'react-quill';

import { ICreatePostRes, CREATE_POST } from './CreatePost.apollo';
import { GET_POSTS, IGetPostsRes } from '../Posts/Posts.apollo';
import createPostStyles from './CreatePost.style';
import TextBox from 'Components/UI/TextBox/TextBox';
import Button from 'Components/UI/Button/Button';
import { MdWarning } from 'react-icons/md';

interface ICreatePostProps extends RouteComponentProps<{}> {
	subforumName: string;
	subforumID: string;
}

const CreatePost = (props: ICreatePostProps) => {

	const classes = createPostStyles();
	const [error, setError] = React.useState('');
	const [post, setPostData] = React.useState({
		title: '',
		content: '',
		tag: '',
	});

	const createPostMutation = useMutation<ICreatePostRes>(CREATE_POST, {
		variables: { title: post.title, content: post.content, subforum: props.subforumID },
		update: (proxy, mutationResult) => {
			const { createPost } = mutationResult.data!;
			const options = {
				query: GET_POSTS,
				variables: { subforumID: props.subforumID }
			};
			try {
				const getPostsData = proxy.readQuery<IGetPostsRes>(options)!;
				const postExists = getPostsData.getPostsBySubforum.find(p => p.id === createPost.id);
				if (postExists) return;
	
				proxy.writeQuery({
					...options,
					data: {
						getPostsBySubforum: [createPost, ...getPostsData.getPostsBySubforum]
					}
				});
			} catch (err) { return; }
		},
	});
	
	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value } = event.target;
		setPostData({
			...post,
			title: value
		});
	};
	const handleCntChange = (value: string) => {
		if (value.length > 1000) setError('Post is too long');
		else {
			setError('');
			setPostData({
				...post,
				content: value
			});
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// tslint:disable-next-line: no-unnecessary-initializer
		const { data = undefined } = await createPostMutation().catch((err: Error) => {
			if (!isApolloError(err)) return setError('Unknown error');
			return setError(err.message);
		}) || {};
		if (data) props.history.push(`/r/${props.subforumName}/${data!.createPost.id}`);
	};

	return (
		<div className={classes.root}>
			<form onSubmit={handleSubmit}>
				<div className={classes.heading}>Create post</div>
				<TextBox
					wide
					required
					name='title'
					maxLength={200}
					placeholder='Title'
					value={post.title}
					onChange={handleTitleChange}
					className='titleBox'
				/>
				<ReactQuill
					value={post.content}
					onChange={handleCntChange}
					className={classes.quill}
					placeholder='Text...'
				/>
				{error && <div className={classes.warn}><MdWarning /><span>{error}</span></div>}
				<Button>Submit</Button>
			</form>
		</div>
	);
};

export default withRouter(CreatePost);
