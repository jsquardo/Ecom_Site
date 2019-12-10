import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { setCurrentUser } from './Redux/User/userActions';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
			else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
