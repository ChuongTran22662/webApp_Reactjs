import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser, selectSignHidden } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { clearCart } from '../../redux/cart/cart.actions'
import SignDropdown from '../sign-dropdown/sign-dropdown.component';
import { toogleSign } from '../../redux/user/user.actions'

const Header = ({ currentUser, hidden, clearCart, hiddenSign,toogleSign }) => {

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? (
                        <div className='option' onClick={() => {
                            auth.signOut();
                            clearCart()
                        }}>
                            SIGN OUT
                        </div>
                    ) : (
                            <div className='option' to='/signin' onClick={() => toogleSign()}>
                                ACCOUNT
                                {
                                    hiddenSign === false ? <SignDropdown /> : ''
                                }
                            </div>
                        )
                }
                <CartIcon />
            </div>
            {
                hidden === false ? <CartDropdown /> : ''
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    hiddenSign: selectSignHidden
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart()),
    toogleSign: () => dispatch(toogleSign())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);