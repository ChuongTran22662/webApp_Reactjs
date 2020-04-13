import React from 'react';
import { withRouter } from 'react-router-dom';


import './menu-item.styles.scss';

const MenuItem = ({ item, history, match }) => {

    return (
        <div className={`${item.size} menu-item`}
            onClick={() => history.push(`${match.url}${item.linkUrl}`)}
        >
            <div className='background-image' style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
            <div className='content'>
                <div className='title'>{item.title.toUpperCase()}</div>
                <div className='subtitle'>SHOP NOW</div>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);