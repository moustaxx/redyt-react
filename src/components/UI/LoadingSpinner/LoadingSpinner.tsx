import * as React from 'react';
import clsx from 'clsx';

import loadingSpinnerStyles from './LoadingSpinner.style';

type TDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const LoadingSpinner = ({ className, ...props }: TDiv) => {
	const classes = loadingSpinnerStyles();
	return (
		<div className={clsx(classes.root, className)}>
			<div />
			<div />
			<div />
		</div>
	);
};

export default LoadingSpinner;
