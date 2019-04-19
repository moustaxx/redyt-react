import * as React from 'react';

import { ISubforum } from '../Forum.apollo';

import CommunityDetails from './CommunityDetails/CommunityDetails';
import asideStyles from './Aside.style';

type TDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface IAsideProps extends TDiv {
	subforum: ISubforum;
}

const Aside = ({subforum, style}: IAsideProps) => {
	const classes = asideStyles();

	return (
		<div style={style} className={classes.root}>
			<CommunityDetails subforum={subforum}/>
		</div>
	);
};

export default Aside;
