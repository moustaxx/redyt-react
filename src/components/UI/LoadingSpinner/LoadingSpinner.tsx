import { FaSpinner } from 'react-icons/fa';
import styled from 'Theme/';

const LoadingSpinner = styled(FaSpinner)`
	color: ${props => props.theme.fontColor};
	position: relative;
	left: 49%;
	padding: 70px 0;
	height: 50px;
	width: 50px;
	animation: spin 2s infinite linear;
	@keyframes spin {
		from {transform:rotate(0deg);}
		to {transform:rotate(360deg);}
	}
`;
export default LoadingSpinner;
