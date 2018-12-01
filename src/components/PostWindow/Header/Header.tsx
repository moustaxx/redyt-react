import * as React from 'react';
import styled from 'Theme/';
import Vote from 'Components/Shared/Vote/Vote';

const StyledHeader = styled.div`
	flex: 0 0 48px;
	background: black;
	.group {
		margin: 0 auto;
		max-width: 1220px;
		display: flex;
		align-items: center;
		height: 100%;
		.voteHere {
			align-items: center;
			padding: 0 10px;
			color: #d7dadc;
			&::before {
				border: 1px solid white;
				height: 16px;
			}
			&::after {
				border: 1px solid white;
				height: 16px;
			}
		}
		.title {
			color: #d4d4d4;
		}
		.space {
			flex-grow: 1;
		}
	}
	`;

const ExitButton = styled.div`
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

class Header extends React.Component {
	public render() {
		return (
			<StyledHeader>
				<div className='group'>
					{/* <Vote className='voteHere'></Vote> */}
					<Vote />
					<div className='title'> Post title goes here </div>
					<div className='space' />
					<ExitButton>
						<svg width='15' fill='grey' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<polygon fill='inherit'
								points='11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5
								3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264
								18.262 16.497'>
							</polygon>
						</svg>
						<span>CLOSE</span>
					</ExitButton>
				</div>
			</StyledHeader>
		);
	}
}
export default Header;
