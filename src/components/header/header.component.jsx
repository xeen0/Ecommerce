import React from 'react'

import {auth } from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'


import './header.styles.scss'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'
const Header = ({currentUser , hidden}) => (

    <div className='header'>
        <Link to='/'>
            <Logo className='logo-container' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>contact</Link>
            {
                currentUser?
                (<div className='option ' onClick={()=>auth.signOut() }>Sign Out </div>)
                :
                (<Link className='option' to='/signin'>SignIn</Link>)
            }
        <CartIcon/> 
        {
            hidden?null:
        <CartDropDown/>
        }
        </div>
    </div>
)
const mapStateToProp = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default connect( mapStateToProp )(Header)