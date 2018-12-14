import * as React from 'react';
import styled from 'Theme/';
import { Query } from 'react-apollo';

import Post from './Post/Post';
import { ISubforum } from '../Forum.apollo';
import { GET_POSTS, IGetPostsRes } from './Posts.apollo';

const StyledPosts = styled.div`
	background: ${props => props.theme.secondaryBgColor};
	height: fit-content;
	flex-grow: 1;
	border-radius: 4px;
	margin-right: 8px;
	.warn {
		height: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 21px;
	}
`;

interface IPostsProps {
	subforum: ISubforum;
}

class Posts extends React.Component<IPostsProps> {
	public render() {
		return (
			<StyledPosts>
				<Query<IGetPostsRes> query={GET_POSTS} variables={{ subforumID: this.props.subforum.id }}>{
					({ loading, error, data }) => {
						console.log('data.getPostsBySubforum', data!.getPostsBySubforum);
						if (loading) return 'Loading...';
						if (error || !data) return <span className='warn'>{error}</span>;
						if (!data.getPostsBySubforum.length) return <span className='warn'>I've got puppies to show you...</span>;
						return (
							data.getPostsBySubforum.map(({ id, title, content, author, createdOn }) =>
								<Post key={id} post={{
									id,
									title,
									content,
									author,
									createdOn}} />
								)
						);
					}
				}
				</Query>
			</StyledPosts >
		);
	}
}
export default Posts;
