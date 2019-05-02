import * as React from 'react';
import { Query } from 'react-apollo';
import { MdArrowDropDown, MdAccountBox, MdSentimentVeryDissatisfied, MdAccessTime } from 'react-icons/md';
import { withRouter, RouteComponentProps } from 'react-router';
import clsx from 'clsx';

import navigationStyles from './Navigation.style';

import SubforumIcon from 'Components/UI/Svgs/SubforumIcon';
import { IGetSubforumRes, GET_SUBFORUM } from './Navigation.apollo';
import NavMenu from './NavMenu/NavMenu';

const Navigation = (props: RouteComponentProps) => {
	const splitedPath = props.location.pathname.split('/');
	const dispatcher = splitedPath[1];
	const name = splitedPath[2];

	const [isNavMenuOpen, setNavStatus] = React.useState(false);

	const toggleNavStatus = () => setNavStatus(!isNavMenuOpen);
	const stopPropagation = (e: Event) => e.stopPropagation();

	const classes = navigationStyles();
	const skip = dispatcher !== 'r';
	return (
		<div className={clsx(classes.root, isNavMenuOpen && 'active')}>
			<div className={classes.cnt} onClick={toggleNavStatus}>
				<Query<IGetSubforumRes> query={GET_SUBFORUM} variables={{ name }} skip={skip}>{
					({ loading, error, data }) => {
						let nameee: string;
						let Icon = MdAccessTime;

						if (loading) nameee = 'Loading...';
						else if (!data || error) {
							nameee = 'Error... :(';
							Icon = MdSentimentVeryDissatisfied;
						}
						else {
							if (skip) nameee = name;
							else nameee = data.getSubforum.name;

							switch (dispatcher) {
								case 'user': Icon = MdAccountBox; break;
								case 'r': Icon = SubforumIcon;
							}
						}

						return (
							<div className={classes.cnt2}>
								<div className={classes.navIcon}><Icon /></div>
								<div className={classes.subforumName}>{nameee}</div>
							</div>
						);
					}
				}</Query>
				<MdArrowDropDown size={20} />
			</div>
			{isNavMenuOpen &&
				<>
					<div className={classes.clickOutside} onClick={toggleNavStatus} />
					<NavMenu onClick={stopPropagation} />
				</>
			}
		</div>
	);
};

export default withRouter(Navigation);
