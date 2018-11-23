import styled from 'styled-components';

const StyledAsideComponent = styled.div`
	margin-bottom: 27px;
	background: ${props => props.theme.secondaryBgColor};
	overflow: hidden;
	border: 1px solid ${props => props.theme.borderColor};
	border-radius: 4px;
	.componentName {
		text-transform: uppercase;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: .5px;
		height: 36px;
		/* background: ${props => props.theme.tertiarySubforumColor}; */
		color: white;
		padding: 11px;
		box-sizing: border-box;
	}
`;

export default StyledAsideComponent;
