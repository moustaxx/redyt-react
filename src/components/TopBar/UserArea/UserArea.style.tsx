import styled from 'Theme/';

export const StyledUserArea = styled.div`
	flex-shrink: 0;
	max-width: 150px;
	height: 34px;
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	border: 1px solid transparent;
	padding: 0 10px;
	user-select: none;
	cursor: pointer;
	& > span {
		overflow: hidden;
	}
	& > svg {
		flex-shrink: 0;
		color: ${props => props.theme.iconColor};
		width: 20px;
		height: 20px;
	}
	& > * {
		display: inline;
		vertical-align: middle;
	}

	&:hover {
		border-color: ${props => props.theme.borderColor};
	}
	&:active {
		border-color: ${props => props.theme.borderColor};
	}
`;

const avilableColors = new Array('#000000', '#0fa21c', '#3300ff', '#984527');
const randomColor = () => {
	return avilableColors[Math.floor((Math.random() * avilableColors.length))];
};

export const Avatar = styled.div`
	flex-shrink: 0;
	width: 26px;
	height: 26px;
	margin-right: 5px;
	border-radius: 50%;
	background: ${randomColor};

	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	font-weight: 600;
`;
