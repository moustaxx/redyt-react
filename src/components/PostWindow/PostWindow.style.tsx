import styled from 'Theme/';

export const StyledPostWindow = styled.div`
	position: fixed;
	background: #000000de;
	width: 100%;
	height: 100%;
	z-index: 9;

	.warn {
		height: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 21px;
	}
`;

export const Content = styled.div`
	width: 96%;
	height: calc(100% - 50px);
	max-width: 1300px;
	margin: 0 auto;
	background: ${props => props.theme.background.primary};
	/* .apolloDiv {
		height: 100%;
		background: #dae0e6;
		display: flex;
		flex-direction: column;
	} */
	@media screen and (max-width: 550px) {
		margin: 0 auto;
		width: 100%;
	}
`;

export const Container = styled.div`
	height: calc(100% - 50px);
	padding-top: 30px;
	justify-content: center;
	display: flex;
	overflow: auto;
	box-sizing: border-box;
	.right {
		margin: 0;
		height: 100%;
	}
`;
