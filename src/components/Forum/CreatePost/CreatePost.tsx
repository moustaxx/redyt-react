import * as React from 'react';
import { useMutation } from 'react-apollo-hooks';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { isApolloError } from 'apollo-client';

import { ICreatePostRes, CREATE_POST } from './CreatePost.apollo';
import { GET_POSTS, IGetPostsRes } from '../Posts/Posts.apollo';
import createPostStyles from './CreatePost.style';
import TextBox from 'Components/UI/TextBox/TextBox';
import Button from 'Components/UI/Button/Button';

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
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setPostData({
			...post,
			[name]: value
		});
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
				{error && <div style={{color: 'red'}}>{error}</div>}
				<TextBox
					wide
					required
					name='title'
					maxLength={200}
					placeholder='Title'
					value={post.title}
					onChange={handleChange}
				/>
				<textarea
					className={classes.textarea}
					required
					name='content'
					maxLength={900}
					placeholder='Text...'
					value={post.content}
					onChange={handleChange}
				/>
				<Button>Submit</Button>
			</form>
		</div>
	);
};

export default withRouter(CreatePost);
