import styled from 'Theme/';

export const StyledBookmarks = styled.div`
	width: inherit;
	height: 40px;
	background: ${props => props.theme.background.primary};
	display: flex;
	align-items: center;
	padding-left: 16px;
	box-sizing: border-box;
`;

export const Bookmark = styled.div`
	color: ${props => props.theme.subforum.primary};
	padding: 9px 14px;
	font-size: 14px;
	font-weight: 500;

	&.active {
		border-bottom: ${props => props.theme.subforum.secondary} 3px solid;
		color: ${props => props.theme.subforum.secondary};
	}
`;
