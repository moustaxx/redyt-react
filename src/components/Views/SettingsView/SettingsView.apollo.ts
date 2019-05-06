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
