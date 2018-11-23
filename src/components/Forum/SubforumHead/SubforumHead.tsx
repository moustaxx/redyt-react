import * as React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Settings from './Settings/Settings';
import Bookmarks from './Bookmarks/Bookmarks';

const StyledHead = styled.div`
	width: 100%;
`;

class Head extends React.Component {
	public render() {
		return (
			<StyledHead>
				<Header />
				<Bookmarks />
				<Settings />
			</StyledHead >
		);
	}
}
export default Head;
