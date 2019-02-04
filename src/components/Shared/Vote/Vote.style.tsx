import styled from 'Theme/';

export const StyledVote = styled.div`
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

export const VoteSummary = styled.div`
	width: 34px;
	text-align: center;
	font-weight: 600;
	font-size: 13px;
	line-height: 2em;
	cursor: default;
`;

export const VoteUp = styled.button`
	&::before {
		content: "\\F12B";
	}
	&:hover {
		color: red;
	}
`;
