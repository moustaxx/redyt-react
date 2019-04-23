import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';

import Post from './Post/Post';
import { ISubforum } from '../Forum.apollo';
import { GET_POSTS, IGetPostsRes, IPost } from './Posts.apollo';
import LoadingSpinner from 'Components/UI/LoadingSpinner/LoadingSpinner';
import postsStyles from './Posts.style';

interface IPostsProps {
	subforum: ISubforum;
}

const Posts = (props: IPostsProps) => {
	const classes = postsStyles();

	const { data, loading, error } = useQuery<IGetPostsRes>(GET_POSTS, { variables: { subforumID: props.subforum.id}});
	if (loading) return <div className={classes.root} style={{minHeight: 128}}><LoadingSpinner /></div >;
	if (error) return <span className={classes.warn}>{error.message}</span>;
	if (!data) return null;
	if (!data.getPostsBySubforum.length) return (
		<div className={classes.root}>
			<span className={classes.warn}>I've got puppies to show you...</span>
		</div>
	);

	return (
		<div className={classes.root}>
			{data.getPostsBySubforum.map(({ id, title, content, author, commentCounter, createdAt }: IPost) =>
				<Post key={id} post={{
					id,
					title,
					content,
					author,
					commentCounter,
					createdAt
				}} />
			)}
		</div >
	);
};
export default Posts;
