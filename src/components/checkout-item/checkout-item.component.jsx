import React from 'react'
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { removeCartItem , removeItem , addItems} from '../../redux/cart/cart.actions'

const CheckoutItem =({cartItem , removeCartItem , removeItem , addItems}) =>{
    const {name , imageUrl , price ,quantity} = cartItem
    return (
    <div className ='checkout-item'>
        <div className ='image-container'>
            <img src = {imageUrl } alt='ItemImage'/>
        </div>
    <span className ='name'>{name}</span>
    <span className ='quantity'>
    <div className='arrow' onClick={()=>removeItem(cartItem)}>    &#10094;</div>
      <div className ='value'> {quantity} </div> 
    <div className='arrow' onClick ={()=>addItems(cartItem)}>&#10095;   </div>
    </span>

    <span className ='price'>{price}</span>
    <div className ='remove-button' onClick={()=>removeCartItem(cartItem)}>&#10006;</div>
    
    </div>
)}




const mapDispatchToProp = dispatch => ({
    removeCartItem :item => dispatch(removeCartItem(item)),
    removeItem : item => dispatch(removeItem(item)),
    addItems : item  => dispatch(addItems(item))
    
})
export default connect(null , mapDispatchToProp)(CheckoutItem)