import gql from 'graphql-tag';

export const GET_COMMENTS = gql`
	query($postID: ID!) {
		getCommentsByPost(postID: $postID) {
			id
			content
			author {
				id
				name
			}
			createdAt
		}
	}
`;

export interface IComment {
	id: string;
	content: string;
	author: {
		name: string;
		id: string;
	};
	createdAt: string;
}


export interface IGetCommentsByPostRes {
	getCommentsByPost: IComment[];
}
