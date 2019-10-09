import React from 'react'
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom'
import CategoryPage from '../collectionPage/collections.component'
const ShopPage = ({ match }) => (
    < div className='shop-page' >
        
        <Route exact path = {`${match.path}`}  component={CollectionsOverview}/>
        <Route path ={`${match.path}/:collectionId`} component={CategoryPage}/>
    </div >
)
export default ShopPage