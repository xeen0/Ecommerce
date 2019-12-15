import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_etRqnFLDntKLN0sq3Rghkvpg00G2hRxJFI'
   const onToken = (token) => { 
        console.log(token)
        alert('Payment Succeful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='crown clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $ ${price}`}
            amount={priceForStripe}
            panelLable='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />  
    )
}

export default StripeCheckoutButton