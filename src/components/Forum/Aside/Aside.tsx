import * as React from 'react';
import styled from 'Theme/';

import { ISubforum } from '../Forum.apollo';

import CommunityDetails from './CommunityDetails/CommunityDetails';

const StyledAside = styled.div`
	width: 310px;
	flex-shrink: 0;
	margin: 0 5px;
	@media screen and (max-width: 750px) {
		display: none;
	}
`;

interface IAsideProps {
	subforum: ISubforum;
	className?: string;
}

class Aside extends React.Component<IAsideProps> {
	public render() {
		const className = this.props.className ? this.props.className : '';
		return (
			<StyledAside className={className}>
				<CommunityDetails subforum={this.props.subforum}/>
			</StyledAside>
		);
	}
}
export default Aside;
