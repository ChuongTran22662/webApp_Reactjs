import React from 'react';
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync();
    }

    render() {

        const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    render={(props) => (
                        <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                    )}
                />
                <Route exact path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);