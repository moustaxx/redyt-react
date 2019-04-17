import * as React from 'react';
import { Portal } from 'react-portal';
import { withStyles } from '@material-ui/styles';

import topBarStyles, { TTopBarStyles } from './TopBar.style';
import Button from '../UI/Button/Button';

const LoginForm = React.lazy(() => import('Components/LoginForm/LoginForm'));
const Register = React.lazy(() => import('Components/Register/Register'));

import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import Navigation from './Navigation/Navigation';
import { LoginStatusContext } from 'Components/App';
import UserArea from './UserArea/UserArea';

// tslint:disable-next-line:no-empty-interface
interface ITopBarProps extends TTopBarStyles { }

interface ITopBarState {
	isLoginFormOpen: boolean;
	isRegisterOpen: boolean;
}

class TopBar extends React.Component<ITopBarProps, ITopBarState> {
	public state = {
		isLoginFormOpen: false,
		isRegisterOpen: false
	};

	protected closeForm = () => {
		this.setState(() => ({ isLoginFormOpen: false, isRegisterOpen: false }));
	}

	public render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<LoginStatusContext.Consumer>{loginStatus => (
					<>
						<Logo />
						<Navigation />
						<SearchBox />
						{loginStatus === true ? <UserArea /> : (
							<React.Suspense fallback={null}>
								<Button className={classes.btn} onClick={() => this.setState(() => ({ isLoginFormOpen: true }))}>
									Log in
								</Button>
								<Button secondary className={classes.btn} onClick={() => this.setState(() => ({ isRegisterOpen: true }))}>
									Sign up
								</Button>
								{this.state.isLoginFormOpen ?
									<Portal>
										<LoginForm closeForm={this.closeForm} />
									</Portal>
									: null}
								{this.state.isRegisterOpen ?
									<Portal>
										<Register closeForm={this.closeForm} />
									</Portal>
									: null}
							</React.Suspense>
						)}
					</>
				)}</LoginStatusContext.Consumer>
			</div>
		);
	}
}
export default withStyles(topBarStyles)(TopBar);
