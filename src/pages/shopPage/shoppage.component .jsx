import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CategoryPage from "../collectionPage/collections.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { UpdateCollection } from "../../redux/shop/shop.actions";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner  =  withSpinner(CollectionsOverview)
const CategoeyPageWithSpinner = withSpinner(CategoryPage)
class ShopPage extends React.Component {
  unSubscribeFromAuth = null;
  state = {
    isLoading : true
  }
  componentDidMount() {
    
      const {UpdateCollection} = this.props 
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const mapCollection = convertCollectionsSnapshotToMap(snapshot);
      UpdateCollection(mapCollection)
      this.setState({isLoading : false})
    });
  }

  render() {
    
    const { match } = this.props;
    const {isLoading} = this.state
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={isLoading}{...props}/>} />

        <Route path={`${match.path}/:collectionId`} render ={ props => <CategoeyPageWithSpinner isLoading={isLoading}{...props}/>} />
      </div>
    );
  }
}

const mapToDispatch = dispatch => ({
  UpdateCollection: mapCollection => dispatch(UpdateCollection(mapCollection))
});

export default connect(
  null,
  mapToDispatch
)(ShopPage);
