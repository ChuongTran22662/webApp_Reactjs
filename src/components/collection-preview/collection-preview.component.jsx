import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ collection, history, match }) => {

    const { title, items, routeName } = collection;

    return (
        <div className='collection-preview'>
            <div className='title'
            onClick = {() => history.push(`${match.path}/${routeName}`)}
            >{title.toUpperCase()}</div>
            <div className='preview'>
                {
                    items.filter((item, index) => index < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </div>
        </div>
    )
};

export default withRouter(CollectionPreview);
