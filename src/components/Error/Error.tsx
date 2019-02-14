import * as React from 'react';
import styled from 'Theme/';
import { Link } from 'react-router-dom';
import { niceButton } from 'Components/UI/Button/Button';

const StyledError = styled.div`
	display: flex;
	height: 80vh;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 21px;
	a {
		margin-top: 10px;
	}
`;

const Button = styled(niceButton)`
	width: 145px;
	height: 39px;
`;

const Caption = styled.div`
	margin: 20px 0;
	.link {
		color: ${props => props.theme.secondarySubforumColor};
	}
`;

const Error = (props: any) => {
	const pathname = props.path ? props.path : props.location.pathname;
	return (
		<StyledError>
			<Caption>
				<span className='link'>{pathname}</span> does not exist
			</Caption>
			<Link to='/'><Button>Back home</Button></Link>
		</StyledError>
	);
};

export default Error;
