import * as React from 'react';
import clsx from 'clsx';

import dropDownStyles from './DropDown.style';

type TDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface IDropDownProps extends TDiv {
	slim?: boolean;
	navigation?: boolean;
	userArea?: boolean;
	onClick?: (e: any) => void;
}

const DropDown = ({ className, slim, navigation, userArea, ...props }: IDropDownProps) => {
	const classes = dropDownStyles();
	return (
		<div
			className={clsx(classes.root, slim && classes.slim, navigation && classes.navigation,
				userArea && classes.userArea, className)}
			{...props}
		/>
	);
};

export default DropDown;
