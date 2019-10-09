import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ toggleCartHidden, ItemCount }) => {


    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} ></ShoppingIcon>
            <span className='item-count'>{ItemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector ({
    ItemCount:selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)