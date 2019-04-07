import styled from 'Theme/';
import { niceButton } from 'Components/UI/Button/Button';

export const StyledViewAccount = styled.div`
	width: 100%;
	height: calc(100vh - 50px);
	overflow: auto;
	.container {
		.header {
			height: 190px;
			background: #626262;
			position: relative;
			.cnt {
				position: absolute;
				bottom: 0;
				left: 53px;
			
				.heading {
					display: inline;
					font-size: 34px;
					text-shadow: 1px 1px 7px black;
					color: white;
					margin: 0 30px;
				}
				@media screen and (max-width: 500px) {
					left: 10px;
				}
			}
		}
		.content {
			background: ${props => props.theme.background.secondary};
			margin: 0 53px 39px 53px;
			padding: 32px;
			position: relative;
			.caption {
				font-size: 26px;
			}
			.nothing {
				margin: 90px 0;
				font-size: 36px;
				text-align: center;
				color: ${props => props.theme.iconColor};
			}
			@media screen and (max-width: 500px) {
				margin: 0px;
			}
		}
	}
`;

export const Avatar = styled.div`
	width: 150px;
	height: 150px;
	background: black;
	font-size: 68px;
	font-weight: 600;
	color: white;

	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
`;

export const Button = styled(niceButton)`
	position: absolute;
	top: 30px;
	right: 50px;

	height: 40px;
	width: 150px;
`;
