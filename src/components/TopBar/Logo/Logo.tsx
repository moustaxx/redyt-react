import * as React from 'react';
import { Link } from 'react-router-dom';

import * as logo from 'Assets/logo.png';
import { StyledLogo, Img } from './Logo.style';

// interface ILogoProps {}

class Logo extends React.Component {
	public render() {
		return (
			<Link to='/'>
				<StyledLogo>
					<Img src={logo}/>
				</StyledLogo>
			</Link>
		);
	}
}

export default Logo;
