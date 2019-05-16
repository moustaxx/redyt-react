import gql from 'graphql-tag';

export const VERIFY_LOGIN = gql`
	query verifyLogin($name: String! $password: String!) {
		verifyLogin(name: $name, password: $password) {
			id
		}
	}
`;

interface ILogin {
	id: string;
}

export interface ILoginRes {
	verifyLogin: ILogin;
}
