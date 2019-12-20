import {compose } from 'redux'
import { connect } from 'react-redux';

import { isCollectionLoaded } from "../../redux/shop/shop.selector";
import withSpinner from '../../components/with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect';
import CollectionPage from '../../pages/collectionPage/collections.component';

const mapStatetoProp = createStructuredSelector({
    isLoading : state => !isCollectionLoaded(state)
})
const collectionPageContainer = compose(
    connect(mapStatetoProp),
    withSpinner
)(CollectionPage)

export default collectionPageContainer