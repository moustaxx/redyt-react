import gql from 'graphql-tag';
import { CommentFragment, IComment } from '../../PostWindow.apollo';

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
	mutation createComment($content: String! $postID: ID!) {
		createComment(content: $content postID: $postID) {
			...Comment
		}
	}
	${CommentFragment}
`;
export interface ICreateComment {
	createComment: IComment;
}
