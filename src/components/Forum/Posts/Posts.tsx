import * as React from 'react';
import styled from 'Theme/';

import Post from './Post/Post';

const StyledPosts = styled.div`
	background: ${props => props.theme.secondaryBgColor};
	height: fit-content;
	flex-grow: 1;
	border-radius: 4px;
	margin-right: 8px;
`;

class Posts extends React.Component {
	public render() {
		return (
			<StyledPosts>
				{/* <span className='nothingToShow'>Nothing to show...</span> */}
				<Post />
			</StyledPosts >
		);
	}
}
export default Posts;
