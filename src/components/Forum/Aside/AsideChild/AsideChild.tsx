import * as React from 'react';

import asideChildStyles from './AsideChild.style';
import clsx from 'clsx';

type TDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const AsideChild = ({ className, children, ...props }: TDiv ) => {
	const classes = asideChildStyles();

	return (
		<div className={clsx(classes.root, className)}>
			{children}
		</div>
	);
};

export default AsideChild;
