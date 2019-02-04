import * as React from 'react';
import { Form, Input } from './SearchBox.style';

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
