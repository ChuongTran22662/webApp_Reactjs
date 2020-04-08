import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ item }) => (
    <div className={`${item.size} menu-item`}>
        <div className='background-image' style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
        <div className='content'>
            <div className='title'>{item.title.toUpperCase()}</div>
            <div className='subtitle'>SHOP NOW</div>
        </div>
    </div>
)

export default MenuItem;