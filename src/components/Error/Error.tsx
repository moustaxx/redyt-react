import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { niceButton } from 'Components/Shared/Button/Button';

const StyledError = styled.div`
	display: flex;
	height: 80vh;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 21px;
`;

const Button = styled(niceButton)`
	width: 145px;
	height: 39px;
	margin: 30px 0 0 0;
`;

const Error = (props: any) => {
	console.log('props', props);
	return <StyledError>
		<div>r{ props.location.pathname } does not exist</div>
		<Link to='/'><Button>Back home</Button></Link>
	</StyledError>;
};

export default Error;
