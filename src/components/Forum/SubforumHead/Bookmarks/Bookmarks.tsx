import * as React from 'react';
import { StyledBookmarks, Bookmark } from './Bookmarks.style';

class Bookmarks extends React.Component {
	public render() {
		return (
			<StyledBookmarks>
				<Bookmark className='active'>Posts</Bookmark>
			</StyledBookmarks >
		);
	}
}
export default Bookmarks;


