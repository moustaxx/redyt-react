import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';

import Post from './Post/Post';
import { ISubforum } from '../Forum.apollo';
import { GET_POSTS, IGetPostsRes, IPost } from './Posts.apollo';
import LoadingSpinner from 'Components/UI/LoadingSpinner/LoadingSpinner';

// const StyledPosts = styled.div`
// 	background: ${props => props.theme.background.secondary};
// 	height: fit-content;
// 	flex-grow: 1;
// 	border-radius: 4px;

// 	.warn {
// 		height: 30vh;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 		font-size: 21px;
// 	}
// `;

interface IPostsProps {
	subforum: ISubforum;
}

const Posts = (props: IPostsProps) => {
	const { data, loading, error } = useQuery<IGetPostsRes>(GET_POSTS, { variables: { subforumID: props.subforum.id}});
	if (loading) return <LoadingSpinner />;
	if (error) return <span className='warn'>{error.message}</span>;
	if (!data) return null;
	if (!data.getPostsBySubforum.length) return <span className='warn'>I've got puppies to show you...</span>;

	return (
		<div className={''}>
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
