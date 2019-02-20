import styled from 'Theme/';

export const StyledHeader = styled.div`
	flex: 0 0 48px;
	background: black;
	.group {
		margin: 0 auto;
		max-width: 1220px;
		display: flex;
		align-items: center;
		height: 100%;
		.voteHere {
			padding: 0 10px;
			&::before {
				border-left: 1px solid ${props => props.theme.iconColor};
				margin-right: 10px;
				height: 16px;
				content: "";
			}
			&::after {
				border-right: 1px solid ${props => props.theme.iconColor};
				margin-left: 10px;
				height: 16px;
				content: "";
			}
		}
		.title {
			color: #d4d4d4;
			@media screen and (max-width: 500px) {
				margin-left: 20px;
			}
		}
		.space {
			flex-grow: 1;
		}
	}
	`;

export const ExitButton = styled.div`
	flex-shrink: 0;
	cursor: pointer;
	user-select: none;
	height: 48px;
	text-align: center;
	font-size: 17px;
	color: gray;
	line-height: 2.7;
	padding: 0 8px;
	transition: 0.2s;
	margin-right: 10px;
	&:hover {
		background: #edeff1;
	}
	* {
		display: inline;
		vertical-align: middle;
	}
`;
