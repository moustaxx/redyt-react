import * as React from 'react';
import { StyledVote, VoteSummary, VoteUp } from './Vote.style';

const Vote = () => (
	<StyledVote>
		<VoteUp className='icon voted' />
		<VoteSummary>22</VoteSummary>
		<button className='icon voteDown' />
	</StyledVote>
);

export default Vote;
