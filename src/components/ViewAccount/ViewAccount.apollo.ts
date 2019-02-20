import gql from 'graphql-tag';

export const GET_USER_DATA = gql`
	query($name: String!) {
		getUserByName(name: $name) {
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
	getUserByName: IUser;
}
