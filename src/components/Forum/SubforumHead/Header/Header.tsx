import * as React from 'react';
import { StyledHeader, Title } from './Header.style';

interface IHeaderProps {
	subforumName: string;
}

class Header extends React.Component<IHeaderProps> {
	public render() {
		return (
			<StyledHeader>
				<Title>{this.props.subforumName}</Title>
			</StyledHeader >
		);
	}
}
export default Header;
