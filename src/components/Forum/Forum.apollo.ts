import gql from 'graphql-tag';

export const GET_SUBFORUM = gql`
	query($name: String!) {
		getSubforum(name: $name) {
			id
			description
			name
			colors {
				primary
				secondary
				tertiary
			}
		}
	}
`;

export interface ISubforum {
	id: string;
	description: string;
	name: string;
	colors: IColors;
}

export interface IColors {
	primary: string;
	secondary: string;
	tertiary: string;
}

export interface IGetSubforumRes {
	getSubforum: ISubforum;
}
