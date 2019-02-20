import styled from 'Theme/';
import { niceButton } from 'Components/UI/Button/Button';

export const StyledNotLoggedIn = styled.div`
	border: 1px solid  ${props => props.theme.borderColor};
	border-radius: 5px;
	margin: 15px 5px;
	color: #878a8c;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;

	.cnt {
		display: flex;
	}
`;

export const Button = styled(niceButton)`
	margin: 2px 5px;
	font-size: 14px;
	width: 100px;
`;
