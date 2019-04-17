import * as React from 'react';
import { MdSearch } from 'react-icons/md';

import searchboxStyles from './SearchBox.style';
import TextBox from 'Components/UI/TextBox/TextBox';

const SearchBox = () => {
	const classes = searchboxStyles();
	return (
		<form className={classes.root}>
			<MdSearch />
			<TextBox className={classes.txtbx} type='text' placeholder='Search' aria-label='Search' />
		</form>
	);
};

export default SearchBox;
