import * as React from 'react';
import styled from 'styled-components';

const StyledVote = styled.div`
	display: flex;
	> * {
		height: 25px;
		width: 25px;
		font-size: 17px;
		background: transparent;
	}
	.voteDown::before {
		content: " \\F108";
	}
	.voteDown:hover {
		color: dodgerblue;
	}

	@media screen and (max-width: 500px) {
		display: none;
	}
`;

const VoteSummary = styled.div`
	width: 34px;
	text-align: center;
	font-weight: 600;
	font-size: 13px;
	line-height: 2em;
	cursor: default;
`;

const VoteUp = styled.button`
	&::before {
		content: "\\F12B";
	}
	&:hover {
		color: red;
	}
`;

class Vote extends React.Component {
	public render() {
		return (
			<StyledVote>
				<VoteUp className='icon voted'></VoteUp>
				<VoteSummary>22</VoteSummary>
				<button className='icon voteDown'></button>
			</StyledVote>
		);
	}
}
export default Vote;
