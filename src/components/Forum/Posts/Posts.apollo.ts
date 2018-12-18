import gql from 'graphql-tag';

export const GET_POSTS = gql`
	query($subforumID: ID!) {
		getPostsBySubforum(
			subforum: $subforumID
		){
			id
			title
			content
			author {
				name
				id
			}
			createdAt
		}
	}
`;

export interface IPost {
	id: string;
	title: string;
	content: string;
	author: {
		name: string;
		id: string;
	};
	createdAt: string;
}

export interface IGetPostsRes {
	getPostsBySubforum: IPost[];
}
