import * as React from 'react';
import { StyledVote, VoteSummary, VoteUp } from './Vote.style';

class Vote extends React.Component {
	public render() {
		return (
			<StyledVote>
				<VoteUp className='icon voted' />
				<VoteSummary>22</VoteSummary>
				<button className='icon voteDown' />
			</StyledVote>
		);
	}
}
export default Vote;
