import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'Components/UI/Button/Button';
import errorStyles from './Error.style';

interface IError {
	location?: Location;
	path?: string;
	message?: string;
}

const Error = (props: IError) => {
	const classes = errorStyles();
	let pathname = {};

	if (props.path) pathname = props.path;
	else if (props.location) pathname = props.location.pathname;

	return (
		<div className={classes.root}>
			<div className={classes.caption}>
				{props.message
					? <span>{props.message}</span>
					: <><span className={classes.link}>{pathname}</span><span> does not exist</span></>
				}
			</div>
			<Link to='/'><Button className={classes.btn}>Back home</Button></Link>
		</div>
	);
};

export default Error;
