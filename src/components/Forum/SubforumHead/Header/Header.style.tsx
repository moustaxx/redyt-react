import styled from 'Theme/';

export const StyledHeader = styled.div`
	height: 80px;
	background: ${props => props.theme.mainSubforumColor};
	display: flex;
	padding: 25px 20px;
	box-sizing: border-box;
`;
export const Title = styled.div`
	font-size: 23px;
	color: white;
	align-self: flex-end;
`;
