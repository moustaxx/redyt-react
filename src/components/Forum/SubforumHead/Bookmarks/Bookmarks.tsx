import * as React from 'react';
import bookmarksStyles from './Bookmarks.style';

const Bookmarks = () => {
	const classes = bookmarksStyles();
	return (
		<div className={classes.root}>
			<div className={classes.bookmark + ' active'}>Posts</div>
		</div >
	);
};

export default Bookmarks;
