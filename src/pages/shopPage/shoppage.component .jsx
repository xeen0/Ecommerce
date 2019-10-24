import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CategoryPage from "../collectionPage/collections.component";

import { connect } from "react-redux";
import { collectionsFecthingStartAsync } from "../../redux/shop/shop.actions";
import { isCollectionFetching,isCollectionLoaded} from "../../redux/shop/shop.selector";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
const CategoeyPageWithSpinner = withSpinner(CategoryPage);
class ShopPage extends React.Component {
  componentDidMount() {
    const { collectionsFecthingStartAsync } = this.props;
    collectionsFecthingStartAsync();
  }

  render() {
    const { match } = this.props;
    const { isCollectionFetching ,isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />

        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CategoeyPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProp = createStructuredSelector({
  isCollectionFetching,
  isCollectionLoaded
});
const mapToDispatch = dispatch => ({
  collectionsFecthingStartAsync: () => dispatch(collectionsFecthingStartAsync())
});

export default connect(
  mapStateToProp,
  mapToDispatch
)(ShopPage);
