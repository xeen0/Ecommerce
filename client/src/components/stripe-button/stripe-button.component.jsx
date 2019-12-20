import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_etRqnFLDntKLN0sq3Rghkvpg00G2hRxJFI";
  const onToken = token => {
    let url = "http://localhost:5000/payment";
    axios({
      url: url,
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert("payment Successfull");
      })
      .catch(err => {
        console.log("sad");
        alert("Invalid payment");
        // console.log(url);
        console.log("Error", JSON.parse(err));
      });
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="crown clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $ ${price}`}
        amount={priceForStripe}
        panelLable="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
      <h1>4242 4242 4242 4242 01/20 123</h1>
    </div>
  );
};

export default StripeCheckoutButton;
