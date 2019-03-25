import * as React from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { withRouter, RouteComponentProps } from 'react-router';

import { StyledAddComment, Button } from './AddComment.style';
import { GET_SESSION_OWNER, IUserRes, CREATE_POST } from './AddComment.apollo';
import NotLoggedIn from './NotLoggedIn';

interface IAddCommentProps extends RouteComponentProps<{ postID: string }> {}

const AddComment = (props: IAddCommentProps) => {
	const postID = props.match.params.postID;
	const [content, setContent] = React.useState('');

	const createComment = useMutation(CREATE_POST, {variables: { content, postID }});
	
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(event.target.value);
	};
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(content);
		createComment();
	};

	const { data, loading, error } = useQuery<IUserRes>(GET_SESSION_OWNER);
	if (loading || !data) return null;
	if (error) return <NotLoggedIn />;
	
	return (
		<StyledAddComment onSubmit={handleSubmit}>
			<textarea value={content} onChange={handleChange} />
			<Button>Submit</Button>
		</StyledAddComment>
	);
};

export default withRouter(AddComment);
