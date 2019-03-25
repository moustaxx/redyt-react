import gql from 'graphql-tag';

export const GET_SESSION_OWNER = gql`
	query {
		getSessionOwner {
			name
			id
		}
	}
`;

export interface IUser {
	id: string;
	name: string;
	email: string;
	updatedAt: Date;
	createdAt: Date;
}

export interface IUserRes {
	getSessionOwner: IUser;
}

export const CREATE_POST = gql`
	mutation($content: String! $postID: ID!) {
		createComment(content: $content postID: $postID) {
			author {
				name
				id
			}
			content
		}
	}
`;

