import * as React from 'react';
import styled from 'Theme/';
// import './Logo.style.scss';

interface INavProps {
	classNameName?: string;
}

const StyledNavMenu = styled.div`
	width: 270px;
	height: 70%;
	flex-shrink: 0;
	border: 1px solid transparent;
	border-radius: 5px;
	box-sizing: border-box;;
	font-size: 15px;
	cursor: pointer;
	user-select: none;
	margin: 0 5px;
	&:hover, &.active {
		border: 1px solid ${props => props.theme.iconColor};
	}
	.cnt {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 5px;
		box-sizing: border-box;
		.cnt2 {
			padding-left: 8px;
		}
		& > svg {
			width: 20px;
			height: 20px;
			fill: ${props => props.theme.fontColor};
		}
		& > * {
			display: inline;
			vertical-align: middle;
		}
	}
`;

const NavIcon = styled.div`
	background: #0079d3;
	border-radius: 40px;
	width: 22px;
	height: 22px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin: 0 2px;
	svg {
		width: 16px;
		height: 16px;
		fill: white;
	}
`;

class NavMenu extends React.Component<INavProps> {
	public render() {
		return (
			<StyledNavMenu>
				<div className='cnt'>
					<div className='cnt2'>
						<NavIcon>
							<svg viewBox='0 0 20 20'>
								<path d='M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,
								11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,
								3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,
								5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,
								10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,
								14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,
								14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,
								15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,
								5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,
								3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,
								1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,
								8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,
								16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,
								16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,
								18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,
								16.1138 18.2706,14.2988 16.7526,11.8998'></path>
							</svg>
						</NavIcon>
						<span></span>
					</div>
					<svg viewBox='0 0 20 20'>
						<g><path fill='inherit' d='M14.1711599,9.3535 L9.99925636,
						13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,
						8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535'></path></g>
					</svg>
				</div>
				{/* <Navigation></Navigation> */}
			</StyledNavMenu>
		);
	}
}
export default NavMenu;
