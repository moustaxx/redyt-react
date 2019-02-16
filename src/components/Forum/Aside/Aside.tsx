import * as React from 'react';
import styled from 'Theme/';

import { ISubforum } from '../Forum.apollo';

import CommunityDetails from './CommunityDetails/CommunityDetails';

const StyledAside = styled.div`
	width: 310px;
	flex-shrink: 0;
	margin: 0 5px;
	margin-left: 8px;
`;

interface IAsideProps {
	subforum: ISubforum;
}

class Aside extends React.Component<IAsideProps> {
	public render() {
		return (
			<StyledAside>
				<CommunityDetails subforum={this.props.subforum}/>
			</StyledAside>
		);
	}
}
export default Aside;
