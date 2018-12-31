import * as React from 'react';
import styled from 'Theme/';
import { Link } from 'react-router-dom';

import * as logo from 'Assets/logo.png';

interface ILogoProps {
	className?: string;
}

const Img = styled.img`
	width: 107px;
	height: 48px;
`;

class Logo extends React.Component<ILogoProps> {
	public render() {
		return (
			<Link to='/'>
				<div className={this.props.className}>
					<Img src={logo}/>
				</div>
			</Link>
		);
	}
}

const styledLogo = styled(Logo)`
	font-size: 19px;
	font-family: "Comic Sans MS", sans-serif;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 15px;
`;
export default styledLogo;
