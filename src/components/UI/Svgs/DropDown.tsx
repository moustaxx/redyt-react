import * as React from 'react';
import styled from 'Theme/';

const StyledDropDown = styled.svg`
	width: 20px;
	height: 20px;
	fill: #cecece;
`;

const DropDown = () => (
	<StyledDropDown viewBox='0 0 20 20'>
		<g><path fill='inherit' d='M14.1711599,9.3535 L9.99925636,
		13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,
		8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535' /></g>
	</StyledDropDown>
);

export default DropDown;
