import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectcartTotal, selectCartItems } from '../../redux/cart/cart.selector'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'


const CheckoutPage = ({cartTotal ,cartItems}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product </span>
            </div>
            <div className='header-block'>
                <span> Description </span>
            </div>
            <div className='header-block'>
                <span> Qunatity </span>
            </div>
            <div className='header-block'>
                <span> Price </span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>

        </div>
        {
            cartItems.map(cartItem => <CheckoutItem cartItem={cartItem } key={cartItem.id}/>)
        }
        <div className='total'>
            <span >TOTAL : ${cartTotal}</span>
        </div>
        <StripeCheckoutButton price={cartTotal}/> 
    </div>
)

const mapStateToProp = createStructuredSelector({
    cartItems:selectCartItems,
    cartTotal: selectcartTotal
})

export default connect(mapStateToProp)(CheckoutPage)