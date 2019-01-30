import gql from 'graphql-tag';

export const CREATE_USER = gql`
	mutation($name: String! $email: String! $password: String!) {
		createUser(name: $name, email: $email, password: $password) {
	 		id
			name
 		}
	}
`;

interface IRegister {
	id: string;
	name: string;
}

export interface IRegisterRes {
	verifyLogin: IRegister;
}
