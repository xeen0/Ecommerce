import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collections.styles.scss'
const CollectionPage = ({collection}) => {
    const {items , title} = collection
    return (
        <div className='collection-page'>
            <div className='title' >{title}</div>
                <div className ='item'>
                    {
                        items.map(item =>  <CollectionItem key={item.id} item={item}></CollectionItem>) 
                    }
                </div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    collection: selectCollection(props.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)