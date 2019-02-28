import * as React from 'react';
import { StyledVote, VoteSummary } from './Vote.style';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';

const Vote = ({ className, voteBalance = 0 }: { className?: string; voteBalance?: number }) => (
	<StyledVote className={className}>
		<MdThumbUp className='voteUp voted' />
		<VoteSummary>{voteBalance}</VoteSummary>
		<MdThumbDown className='voteDown' />
	</StyledVote>
);

export default Vote;
