import * as React from 'react';
import styled from 'styled-components';

const Form = styled.form`
	height: 70%;
	width: 100%;
	margin: 0 5px;
`;

const Input = styled.input`
	height: 100%;
	width: 100%;
	background: ${props => props.theme.searchBoxBgColor};
	border: 1px solid ${props => props.theme.searchBoxBgColor};
	border-radius: 5px;
	padding-left: 15px;
	box-sizing: border-box;
	color: #b3b3b3;

	&:focus {
	outline: 0;
	border: 1px solid ${props => props.theme.mainSubforumColor};
	}
`;

class SearchBox extends React.Component {
	public render() {
		return (
			<Form>
				<Input type='text' placeholder='Search' />
			</Form>
		);
	}
}

export default SearchBox;
