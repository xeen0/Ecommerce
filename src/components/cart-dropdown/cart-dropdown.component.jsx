import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItems from "../cart-items/cart-items.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
const CartDropDown = ({ cartItem, history, dispatch }) => (
  <div className="cart-dropdown">
    {cartItem.length ? (
      <div className="cart-items">
        {cartItem.map(cartItem => (
          <CartItems key={cartItem.id} item={cartItem} />
        ))}
      </div>
    ) : (
      <span className="empty-message">Your cart is empty</span>
    )}
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      {" "}
      Go To CheckOut{" "}
    </CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
