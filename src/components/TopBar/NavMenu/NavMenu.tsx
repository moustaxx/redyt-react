import * as React from 'react';
import { StyledNavMenu, NavIcon } from './NavMenu.style';
import DropDown from 'Components/Shared/Svgs/DropDown';
import SubforumIcon from 'Components/Shared/Svgs/SubforumIcon';

// interface INavProps {
// 	subforumName: string;
// }

// const NavMenu = (props: INavProps) => {
// 		const subforumName = props.subforumName ;
// tslint:disable-next-line:arrow-return-shorthand
const NavMenu = () => {
	return (
		<StyledNavMenu>
			<div className='cnt'>
				<div className='cnt2'>
					<NavIcon>
						<SubforumIcon />
					</NavIcon>
					{/* <span>{subforumName}</span> */}
				</div>
				<DropDown />
			</div>
			{/* <Navigation></Navigation> */}
		</StyledNavMenu>
	);
};

export default NavMenu;
