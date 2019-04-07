import styled from 'Theme/';

export const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 8px;
`;

export const Img = styled.img`
	width: 107px;
	height: 48px;
	filter: invert(${p => p.theme.lightTheme ? 1 : 0});
`;
