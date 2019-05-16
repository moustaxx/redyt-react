import gql from 'graphql-tag';

export const LOG_OUT = gql`
	mutation logOut{
		logOut {
			name
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
	logOut: IUser;
}
