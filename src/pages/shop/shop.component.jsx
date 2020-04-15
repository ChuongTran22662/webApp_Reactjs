import React from 'react';
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({
                loading: false
            })
        })
    }

    render() {

        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    render={(props) => (
                        <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                    )}
                />
                <Route exact path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionsPageWithSpinner isLoading={loading} {...props} />
                    )}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);