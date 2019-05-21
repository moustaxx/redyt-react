import * as React from 'react';
import { Link } from 'react-router-dom';

import Settings from './Settings/Settings';
import subforumHeadStyles from './SubforumHead.style';

interface ISubforumHeadProps {
	subforumName: string;
}

const SubforumHead = (props: ISubforumHeadProps) => {
	const classes = subforumHeadStyles();

	return (
		<div style={{width: '100%'}}>
			<div className={classes.titleContainer}>
				<Link to={`/r/${props.subforumName}`}>
					<div className={classes.title}>
						{props.subforumName}
					</div>
				</Link>
			</div>
			<Settings />
		</div >
	);
};

export default React.memo(SubforumHead);
