import * as React from 'react';
import styled from 'Theme/';
import { Redirect } from 'react-router-dom';

import Header from './Header/Header';
import Left from './Left/Left';
import Aside from 'Components/Forum/Aside/Aside';

const StyledPostWindow = styled.div`
	position: fixed;
	background: #4c4c4c;
	width: 100%;
	height: 100%;
	z-index: 100;
`;

const Content = styled.div`
	width: 90%;
	height: calc(100% - 50px);
	max-width: 1400px;
	margin: 0 auto;
	background: ${props => props.theme.mainBgColor};
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

const Container = styled.div`
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

class PostWindow extends React.Component {
	public render() {
		return (
			<StyledPostWindow onClick={this.closePostWindow}>
				<Content onClick={this.stopPropagation}>
					<Header />
					<Container>
						<Left />
						<Aside />
					</Container>
				</Content>
			</StyledPostWindow >
		);
	}
	private closePostWindow() {
		console.log('closePostWindow');
		return <Redirect to='/somewhere/else' />;
	}
	private stopPropagation(event: any) {
		event.stopPropagation();
	}
}
export default PostWindow;
