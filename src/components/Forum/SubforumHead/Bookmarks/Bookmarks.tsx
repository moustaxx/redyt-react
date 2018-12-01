import * as React from 'react';
import styled from 'Theme/';

const StyledBookmarks = styled.div`
	width: inherit;
	height: 40px;
	background: ${props => props.theme.mainBgColor};
	display: flex;
	align-items: center;
	padding-left: 16px;
	box-sizing: border-box;
`;

const Bookmark = styled.div`
	color: ${props => props.theme.mainSubforumColor};
	padding: 9px 14px;
	font-size: 14px;
	font-weight: 500;

	&.active {
		border-bottom: ${props => props.theme.secondarySubforumColor} 3px solid;
		color: ${props => props.theme.secondarySubforumColor};
	}
`;

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


