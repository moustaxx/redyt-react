import * as React from 'react';
import headerStyles from './Header.style';

interface IHeaderProps {
	subforumName: string;
}

const Header = (props: IHeaderProps) => {
	const classes = headerStyles();
	return (
		<div className={classes.root}>
			<div className={classes.title}>{props.subforumName}</div>
		</div >
	);
};

export default Header;
