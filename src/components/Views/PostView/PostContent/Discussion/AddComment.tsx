import * as React from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { withRouter, RouteComponentProps } from 'react-router';

import addCommentStyles from './AddComment.style';
import NotLoggedIn from './NotLoggedIn';
import { GET_SESSION_OWNER, IUserRes, CREATE_COMMENT, ICreateComment } from './AddComment.apollo';
import { PostFragment, IWindowPost } from '../../PostView.apollo';
import Button from 'Components/UI/Button/Button';

interface IAddCommentProps extends RouteComponentProps<{ postID: string }> {}

const AddComment = (props: IAddCommentProps) => {
	const postID = props.match.params.postID;
	const [content, setContent] = React.useState('');

	const classes = addCommentStyles();

	const { data, loading, error } = useQuery<IUserRes>(GET_SESSION_OWNER);

	const name = data && data.getSessionOwner ? data.getSessionOwner.name : null;

	const createCommentMutation = useMutation<ICreateComment>(CREATE_COMMENT, {
		variables: { content, postID },
		optimisticResponse: {
			__typename: 'Mutation',
			createComment: {
				__typename: 'Comment',
				author: {
					__typename: 'User',
					id: new Date().toISOString(),
					name
				},
				content,
				createdAt: new Date().toISOString(),
				id: new Date().toISOString() + new Date().toISOString(),
			}
		},
		update: (proxy, mutationResult) => {
			const { createComment } = mutationResult.data!;
			const options = {
				fragment: PostFragment,
				fragmentName: 'PostFragment',
				id: postID
			};
			const { comments, ...rest } = proxy.readFragment<IWindowPost>(options)!;
			
			const msgExists = comments.find(msg => msg.id === createComment.id);
			if (msgExists) return;

			proxy.writeFragment({
				...options,
				data: {
					...rest,
					comments: [createComment, ...comments]
				}
			});
		},
	});

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		createCommentMutation();
	};

	if (loading || !data) return null;
	if (error) return <NotLoggedIn />;

	return (
		<form className={classes.root} onSubmit={handleSubmit}>
			<textarea
				className={classes.textarea}
				maxLength={900}
				required
				placeholder='Type your comment here...'
				value={content}
				onChange={handleChange}
			/>
			<Button className={classes.btn}>Submit</Button>
		</form>
	);
};

export default withRouter(AddComment);
