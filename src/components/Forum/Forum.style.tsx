import styled from 'Theme/';

export const StyledForum = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 50px);
	overflow: auto;
	.content {
		display: inline-flex;
		margin: 5px 8px;
	}
	.nothingToShow {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px 0;
		font-size: 24px;
	}
	.aside {
		margin-left: 0;
	}
`;
