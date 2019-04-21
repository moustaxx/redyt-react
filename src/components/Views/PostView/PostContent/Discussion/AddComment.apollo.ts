import gql from 'graphql-tag';
import { CommentFragment, IComment } from '../../PostView.apollo';

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

export const CREATE_COMMENT = gql`
	mutation createComment($content: String! $postID: ID!) {
		createComment(content: $content postID: $postID) {
			...CommentFragment
		}
	}
	${CommentFragment}
`;
export interface ICreateComment {
	createComment: IComment;
}
