import * as React from 'react';
import clsx from 'clsx';

import clickOutsideStyles from './ClickOutside.style';

type TDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const ClickOutside = ({ className, ...props }: TDiv) => {
	const classes = clickOutsideStyles();
	return (
		<div
			className={clsx(classes.root, className)}
			{...props}
		/>
	);
};

export default React.memo(ClickOutside);
