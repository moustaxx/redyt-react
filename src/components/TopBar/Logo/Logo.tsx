import * as React from 'react';
import { Link } from 'react-router-dom';

import * as logo from 'Assets/logo.png';
import { StyledLogo, Img } from './Logo.style';

// interface ILogoProps {}

const Logo = () => (
	<Link to='/' aria-label='Go to home page'>
		<StyledLogo>
			<Img src={logo} alt='Redyt'/>
		</StyledLogo>
	</Link>
);

export default Logo;
