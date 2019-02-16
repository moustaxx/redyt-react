import styled from 'Theme/';

export const StyledVote = styled.div`
	display: flex;
	padding: 8px 5px 0 5px;
	& > svg {
		height: 16px;
		width: 16px;
	}
	.voteDown:hover {
		color: dodgerblue;
	}
	.voteUp:hover {
		color: red;
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
	line-height: 1.5em;
	cursor: default;
`;
