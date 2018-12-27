import styled from 'Theme/';
import { niceButton } from 'Components/Shared/Button/Button';

export const Button = styled(niceButton)`
	margin: 10px 0;
	height: 45px;
	width: 100%;
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
		/* height: 300px; */
		background: ${props => props.theme.secondaryBgColor};
		position: fixed;
		box-shadow: hsla(0, 0%, 0%, 0.4) 1px 7px 17px 2px;
		border-radius: 5px;
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
export const Input = styled.input`
	height: 45px;
	width: 100%;
	border: 1px solid transparent;
	border-radius: 5px;
	background: ${props => props.theme.mainBgColor};
	padding-left: 15px;
	margin: 6px 0;
	color: ${props => props.theme.fontColor};;
	box-sizing: border-box;
	&:focus {
		outline: 0;
		border: 1px solid ${props => props.theme.secondarySubforumColor};
	}
`;