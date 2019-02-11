import gql from 'graphql-tag';

export const GET_SUBFORUM = gql`
	query($name: String!) {
		getSubforum(name: $name) {
			id
			name
		}
	}
`;

export interface ISubforum {
	id: string;
	name: string;
}

export interface IGetSubforumRes {
	getSubforum: ISubforum;
}
