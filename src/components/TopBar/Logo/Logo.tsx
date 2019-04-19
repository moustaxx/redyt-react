import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from 'Assets/logo.png';
import logoStyles from './Logo.style';

// interface ILogoProps {}

const Logo = () => {
	const classes = logoStyles();
	return (
		<Link to='/' aria-label='Go to home page'>
			<div className={classes.root}>
				<img className={classes.img} src={logo} alt='Redyt'/>
			</div>
		</Link>
	);
};

export default Logo;
