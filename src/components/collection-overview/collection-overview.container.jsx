import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { isCollectionFetching } from "../../redux/shop/shop.selector";
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from "./collection-overview.component";
import { compose } from "redux";

const mapStateToProp = createStructuredSelector({
 isLoading: isCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProp),
  withSpinner
)(CollectionsOverview);


export default CollectionOverviewContainer;
