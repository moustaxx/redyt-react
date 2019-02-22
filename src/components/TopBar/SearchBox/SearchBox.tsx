import * as React from 'react';
import { Form, StyledTextBox } from './SearchBox.style';
import { MdSearch } from 'react-icons/md';

const SearchBox = () => (
	<Form>
		<MdSearch />
		<StyledTextBox type='text' placeholder='Search' aria-label='Search' />
	</Form>
);

export default SearchBox;
