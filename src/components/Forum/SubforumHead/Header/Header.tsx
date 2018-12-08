import * as React from 'react';
import styled from 'Theme/';

const StyledHeader = styled.div`
	height: 80px;
	background: ${props => props.theme.mainSubforumColor};
	display: flex;
	padding: 25px 20px;
	box-sizing: border-box;
`;
const Title = styled.div`
	font-size: 23px;
	color: white;
	align-self: flex-end;
`;

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
