import * as React from 'react';
import styled from 'Theme/';

import CommunityDetails from './CommunityDetails/CommunityDetails';

const StyledAside = styled.div`
	width: 310px;
	flex-shrink: 0;
	margin: 0 5px;
	margin-left: 8px;
`;

class Aside extends React.Component {
	public render() {
		return (
			<StyledAside>
				<CommunityDetails />
			</StyledAside>
		);
	}
}
export default Aside;
