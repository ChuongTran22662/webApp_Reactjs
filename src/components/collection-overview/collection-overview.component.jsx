import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

const CollectionOverview = ({ collections }) => {
    return (
        collections.map(collection => (
            <CollectionPreview key={collection.id} collection={collection} />
        ))
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);