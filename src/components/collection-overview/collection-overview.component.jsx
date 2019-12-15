import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collectionppreview.component'

import './collection-overview.styles.scss';
import {  selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => {
return (
        <div className='collection-overview'>
            {
               
                collections.map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps} />)
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview  //this is selectCollection in lesson
});

export default connect(mapStateToProps)(CollectionsOverview);