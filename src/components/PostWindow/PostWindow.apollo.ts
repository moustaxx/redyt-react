import gql from 'graphql-tag';

export const GET_POST = gql`
	query($postID: ID!) {
		getPostByID(
			id: $postID
		){
			id
			title
			author {
				id
				name
			}
			content
			createdAt
		}
	}
`;

export interface IWindowPost {
	id: string;
	title: string;
	content: string;
	author: {
		name: string;
		id: string;
	};
	createdAt: string;
}


export interface IGetPostRes {
	getPostByID: IWindowPost;
}
