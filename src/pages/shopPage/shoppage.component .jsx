import React ,{useEffect} from "react";
import { Route } from "react-router-dom";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../../pages/collectionPage/collecction.container";

import { connect } from "react-redux";
import { collectionsFecthingStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ collectionsFecthingStart, match }) => {
  useEffect(() => {
    collectionsFecthingStart();
  },[collectionsFecthingStart]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapToDispatch = dispatch => ({
  collectionsFecthingStart: () => dispatch(collectionsFecthingStart())
});

export default connect(null, mapToDispatch)(ShopPage);
