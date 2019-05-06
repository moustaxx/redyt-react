import gql from 'graphql-tag';

export const GET_SUBFORUM = gql`
	query($name: String!) {
		getSubforum(name: $name) {
			id
			description
			name
			colors {
				subforum {
					primary
					secondary
					tertiary
				}
				button {
					primary
					secondary
				}
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
	subforum: {
		primary: string;
		secondary: string;
		tertiary: string;
	};
	button: {
		primary: string;
		secondary: string;
	};
}

export interface IGetSubforumRes {
	getSubforum: ISubforum;
}
