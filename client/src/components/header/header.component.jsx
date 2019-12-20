import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";

import { SignOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, SignOutStart }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo-container" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        contact
      </Link>
      {currentUser ? (
        <div className="option " onClick={SignOutStart}>
          SignOut
        </div>
      ) : (
        <Link className="option" to="/signin">
          SignIn
        </Link>
      )}
      <CartIcon />
      {hidden ? null : <CartDropDown />}
    </div>
  </div>
);
const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
const mapDispatchToProp = dispatch => ({
  SignOutStart: () => dispatch(SignOutStart())
});
export default connect(mapStateToProp, mapDispatchToProp)(Header);
