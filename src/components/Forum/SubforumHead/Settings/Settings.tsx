import * as React from 'react';
import styled from 'Theme/';
import SortMenu from './SortMenu/SortMenu';

const StyledSettings = styled.div`
	width: inherit;
	height: 40px;
	background: ${props => props.theme.secondaryBgColor};
`;

class Settings extends React.Component {
	public render() {
		return (
			<StyledSettings>
				<SortMenu />
			</StyledSettings >
		);
	}
}
export default Settings;


