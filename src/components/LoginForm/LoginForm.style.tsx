import styled from 'Theme/';
import { niceButton } from 'Components/UI/Button/Button';
import TextBox from 'Components/UI/TextBox/TextBox';

export const Button = styled(niceButton)`
	margin: 10px 0;
	height: 45px;
	width: 100%;
	border-radius: 0;
	background: #0067b8;
`;

export const StyledLoginForm = styled.div`
	width: 100%;
	height: 100%;
	top: 0;
	background: hsla(0, 0%, 0%, 0.38);
	position: absolute;
	z-index: 101;
	display: flex;
	justify-content: center;
	align-items: center;
	.window {
		width: 360px;
		min-height: 285px;
		background: ${props => props.theme.secondaryBgColor};
		position: fixed;
		box-shadow: hsla(0, 0%, 0%, 0.4) 1px 7px 17px 2px;
		animation: fadein 0.5s;
		.xButton {
			position: absolute;
			top: 8px;
			right: 5px;
			width: 20px;
			height: 20px;
			cursor: pointer;
		}
		.content {
			margin: 30px;
			.error {
				color: red;
			}
			.comunicate {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 21px;
			}
		}
		@keyframes fadein {
			from { opacity: 0 }
			to { opacity: 1 }
		}
	}
`;

export const Heading = styled.div`
	font-size: 22px;
	padding: 0px 0 20px 0;
	user-select: none;
`;
export const StyledTextBox = styled(TextBox)`
	height: 45px;
	width: 100%;
	margin: 6px 0;
`;
