import * as React from 'react';
import { StyledVote, VoteSummary } from './Vote.style';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';

const Vote = (props: { className?: string }) => (
	<StyledVote className={props.className}>
		<MdThumbUp className='voteUp voted' />
		<VoteSummary>22</VoteSummary>
		<MdThumbDown className='voteDown' />
	</StyledVote>
);

export default Vote;
