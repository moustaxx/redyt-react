import * as React from 'react';
import styled from 'Theme/';

import Header from './Header/Header';
import Settings from './Settings/Settings';
import Bookmarks from './Bookmarks/Bookmarks';

const StyledHead = styled.div`
	width: 100%;
`;

interface ISubforumHeadProps {
	subforumName: string;
}

class Head extends React.Component<ISubforumHeadProps> {
	public render() {
		return (
			<StyledHead>
				<Header subforumName={this.props.subforumName}/>
				<Bookmarks />
				<Settings />
			</StyledHead >
		);
	}
}
export default Head;
