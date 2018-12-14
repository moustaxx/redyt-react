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
			createdOn
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
	createdOn: string;
}

export interface IGetPostsRes {
	getPostsBySubforum: IPost[];
}
