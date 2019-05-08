import * as React from 'react';
import { useMutation } from 'react-apollo-hooks';

import { ICreatePostRes, CREATE_POST } from './CreatePost.apollo';
import createPostStyles from './CreatePost.style';
import TextBox from 'Components/UI/TextBox/TextBox';
import Button from 'Components/UI/Button/Button';

interface ICreatePostProps {
	subforumID: string;
}

const CreatePost = (props: ICreatePostProps) => {

	const classes = createPostStyles();
	const [post, setPostData] = React.useState({
		title: '',
		content: '',
		tag: '',
	});

	const createPost = useMutation<ICreatePostRes>(CREATE_POST, {
		variables: { title: post.title, content: post.content, subforum: '' },
	});
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setPostData({
			...post,
			[name]: value
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		createPost();
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

export default CreatePost;
