import React from 'react';
import { connect } from 'react-redux';

import {toogleCartHidden} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toogleCartHidden }) => {
    return (
        <div className='cart-icon' onClick={toogleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return ({
        toogleCartHidden: () => dispatch(toogleCartHidden())
    })
}

export default connect(null, mapDispatchToProps)(CartIcon);