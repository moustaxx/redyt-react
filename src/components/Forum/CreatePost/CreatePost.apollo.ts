import gql from 'graphql-tag';

export const CREATE_POST = gql`
	mutation createPost($title: String! $content: String! $subforum: ID!) {
		createPost(
			title: $title
			content: $content
			subforum: $subforum
		) {
			id
			title
			author {
				id
				name
			}
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
	commentCounter: string;
	createdAt: string;
}

export interface ICreatePostRes {
	createPost: IPost;
}
