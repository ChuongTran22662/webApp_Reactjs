import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ collection }) => {

    const { title, items } = collection;

    return (
        <div className='collection-preview'>
            <div className='title'>{title.toUpperCase()}</div>
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

export default CollectionPreview;
