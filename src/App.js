import React from "react";

import ShopPage from "./pages/shopPage/shoppage.component ";
import HomePage from "./pages/homePage/homepage.component";
import Header from "./components/header/header.component";
import SigninSignup from "./pages/signin-signup/signin-signup.component";

import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";

import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";
class App extends React.Component {
  unSubscribeFromAuth = null;
  // this session is executed first
  componentDidMount() {
    // check for logged in user to maintain persistance
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    //executes at last
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="body">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninSignup />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
