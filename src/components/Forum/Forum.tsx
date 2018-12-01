import * as React from 'react';
import styled from 'Theme/';

import Posts from './Posts/Posts';
import Aside from './Aside/Aside';
import SubforumHead from './SubforumHead/SubforumHead';

const StyledForum = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 50px);
	overflow: auto;
	@media screen and (max-width: 800px) {
		margin: 25px 0;
	}
	.nothingToShow {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px 0;
		font-size: 24px;
	}
`;

const Cnt = styled.div`
	display: inline-flex;
	margin: 5px 0;
`;

class Forum extends React.Component {
	public render() {
		return (
			<StyledForum>
				<SubforumHead />
				<Cnt>
					<Aside />
					<Posts />
				</Cnt>
			</StyledForum >
		);
	}
}
export default Forum;
