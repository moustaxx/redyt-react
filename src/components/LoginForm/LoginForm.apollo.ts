import gql from 'graphql-tag';

export const VERIFY_LOGIN = gql`
	query($name: String! $password: String!) {
		verifyLogin(name: $name, password: $password) {
			token
		}
	}
`;

interface ILogin {
	token: string;
}

export interface ILoginRes {
	verifyLogin: ILogin;
}
