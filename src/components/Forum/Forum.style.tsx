import styled from 'Theme/';

export const StyledForum = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 50px);
	overflow: auto;
	@media screen and (max-width: 800px) {
		margin: 25px 0;
	}
	.content {
		display: inline-flex;
		margin: 5px 0;
	}
	.nothingToShow {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px 0;
		font-size: 24px;
	}
`;
