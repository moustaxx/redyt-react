import gql from 'graphql-tag';

export const GET_USER_DATA = gql`
	query($id: ID!) {
		getUserData(id: $id) {
			name
			id
			email
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
	getUserData: IUser;
}
