import * as React from 'react';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import voteStyles from './Vote.style';

const Vote = ({ className, voteBalance = 0 }: { className?: string; voteBalance?: number }) => {
	const classes = voteStyles();
	return (
		<div className={classes.root}>
			<MdThumbUp className={classes.voteUp} />
			<div className={classes.voteSummary}>{voteBalance}</div>
			<MdThumbDown className={classes.voteDown} />
		</div>
	);
};

export default Vote;
