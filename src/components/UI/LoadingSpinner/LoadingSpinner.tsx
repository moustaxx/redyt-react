import * as React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons/lib/cjs';
import loadingSpinnerStyles from './LoadingSpinner.style';

const LoadingSpinner = ({ className, ...props }: IconBaseProps) => {
	const classes = loadingSpinnerStyles();
	return (
		<FaSpinner
			className={
				classes.root +
				(className ? (' ' + className) : '')
			}
			{...props}
		/>
	);
};

export default LoadingSpinner;
