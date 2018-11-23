import * as React from 'react';
import styled from 'styled-components';
import { niceButton } from 'Components/Shared/Button/Button';
import Comment from './Comment';

const StyledDiscussion = styled.div`
	width: 95%;
	margin: 0 auto;
`;

const AddComment = styled.div`
	border: 1px solid  ${props => props.theme.borderColor};
	border-radius: 5px;
	margin: 15px 5px;
	color: #878a8c;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;
`;

const SortOptions = styled.div`
	text-transform: uppercase;
	margin: 10px 10px;
	font-size: 14px;
	.sort {
		text-transform: uppercase;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.5px;
		color: ${props => props.theme.iconColor};
		padding: 0 10px;
		span, svg {
			display: inline;
			vertical-align: middle;
		}
		.slide {
			margin-left: 10px;
			color: ${props => props.theme.secondarySubforumColor};
		}
		svg {
			width: 17px;
			height: 17px;
			margin-bottom: 3px;
			fill: ${props => props.theme.secondarySubforumColor};
		}
	}
`;

const Button = styled(niceButton)`
	margin: 0 5px;
	font-size: 14px;
	@media screen and (min-width: 460px) {
		width: 100px;
	}
`;

class Discussion extends React.Component {
	public render() {
		return (
			<StyledDiscussion>
				<AddComment>
					<span>Log in to add a comment.</span>
					<div>
						<Button>Log in</Button>
						<Button>Sign up</Button>
					</div>
				</AddComment>
				<SortOptions>
					<button className='sort' id='sortButton'>
					<span>Sort</span>
					<span className='slide'>HOT</span>
					<svg viewBox='0 0 20 20'>
						<g><path fill='inherit' d='M14.1711599,9.3535 L9.99925636,13.529 L5.82735283
						,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,
						8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535'></path></g>
					</svg>
					</button>
					{/* <SortMenu /> */}
				</SortOptions>
				<div className='comments'>
					<Comment />
				</div>
			</StyledDiscussion>
		);
	}
}
export default Discussion;
