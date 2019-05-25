import gql from 'graphql-tag';
import { ISubforum } from 'Components/Forum/Forum.apollo';

export const CommentFragment = gql`
	fragment CommentFragment on Comment {
		id
		content
		author {
			id
			name
		}
		createdAt
	}
`;
export const PostFragment = gql`
	fragment PostFragment on Post {
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
		comments {
			...CommentFragment
		}
	}
	${CommentFragment}
`;

export const GET_POST = gql`
	query getPostByID($postID: ID! $commentsOrder: Order) {
		getPostByID( id: $postID, commentsOrder: $commentsOrder ){
			...PostFragment
		}
	}
	${PostFragment}
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
	comments: IComment[];
}

export interface IComment {
	id: string;
	content: string;
	author: {
		name: string;
		id: string;
	};
	postID?: string;
	createdAt: string;
}

export interface IGetPostRes {
	getPostByID: IWindowPost;
}
