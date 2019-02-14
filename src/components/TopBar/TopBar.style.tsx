import styled from 'Theme/';

import { niceButton, invertedButton } from 'Components/UI/Button/Button';

export const StyledTopBar = styled.div`
	background: ${props => props.theme.secondaryBgColor};
	position: sticky;
	top: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid ${props => props.theme.mainBgColor};
	z-index: 10;
	box-sizing: border-box;
	padding: 0 19px;
`;

export const Button = styled(niceButton)`
	width: 120px;
	margin: 0 5px;
	flex-shrink: 0;
`;
export const Button2 = styled(invertedButton)`
	width: 120px;
	margin: 0 5px;
	flex-shrink: 0;
`;
