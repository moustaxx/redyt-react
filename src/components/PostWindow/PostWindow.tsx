import * as React from 'react';
import { Redirect } from 'react-router-dom';

import Header from './Header/Header';
import Left from './Left/Left';
import Aside from 'Components/Forum/Aside/Aside';
import { Content, Container, StyledPostWindow } from './PostWindow.style';

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
