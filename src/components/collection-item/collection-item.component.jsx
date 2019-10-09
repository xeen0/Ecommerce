import React from 'react'

import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {addItems} from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CollectionItem = ({item,  addItems }) => {
    const { id, name, imageUrl, price } = item
    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    background: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span key={id} className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick = {()=>addItems(item)} className='custom-button' inverted > Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProp = dispatch => ({
    addItems: item => dispatch(addItems(item))
})

export default connect(null, mapDispatchToProp)(CollectionItem)