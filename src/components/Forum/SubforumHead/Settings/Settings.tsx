import * as React from 'react';
import styled from 'Theme/';

const StyledSettings = styled.div`
	width: inherit;
	height: 40px;
	background: ${props => props.theme.secondaryBgColor};
`;

const SortButton = styled.button`
	display: flex;
	align-items: center;
	height: inherit;
	margin-left: 30px;
	text-transform: uppercase;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.5px;
	color: ${props => props.theme.iconColor};
	background: transparent;
	padding: 0 10px;
	.slide {
		margin-left: 8px;
	}
`;

const Svg = styled.svg`
	width: 17px;
	height: 17px;
	margin-bottom: 3px;
	fill:${props => props.theme.secondarySubforumColor};
`;

class Settings extends React.Component {
	public render() {
		return (
			<StyledSettings>
				<SortButton>
					<span>Sort</span>
					<span className='slide'>HOT</span>
					<Svg viewBox='0 0 20 20'>
						<g><path fill='inherit' d='M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,
						9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,
						8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535'></path></g>
					</Svg>
				</SortButton>
				{/* <SortMenu></SortMenu> */}
			</StyledSettings >
		);
	}
}
export default Settings;


