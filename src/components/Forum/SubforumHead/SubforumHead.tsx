import * as React from 'react';

import Settings from './Settings/Settings';
import subforumHeadStyles from './SubforumHead.style';

interface ISubforumHeadProps {
	subforumName: string;
}

const SubfrorumHead = (props: ISubforumHeadProps) => {
	const classes = subforumHeadStyles();

	return (
		<div style={{width: '100%'}}>
			<div className={classes.titleContainer}>
				<div className={classes.title}>{props.subforumName}</div>
			</div>
			<Settings />
		</div >
	);
};

export default SubfrorumHead;
