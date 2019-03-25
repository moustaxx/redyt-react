import gql from 'graphql-tag';
import { ISubforum } from 'Components/Forum/Forum.apollo';

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
			commentCounter
			createdAt
			subforum {
				name
				description
			}
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
	commentCounter: number;
	createdAt: string;
	subforum: ISubforum;
}

export interface IGetPostRes {
	getPostByID: IWindowPost;
}
