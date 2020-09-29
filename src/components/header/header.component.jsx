import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg'; 
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHideDropdown } from '../../redux/cart/cart.selectors';

const Header = ({currentUser, hideCartDropdown}) => {
    return (
        
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to="/signin">SIGN IN</Link>
                }
                <CartIcon />
                
            </div>
            {
                hideCartDropdown ?
                null :
                <CartDropdown />                
            }

            
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hideCartDropdown: selectCartHideDropdown
})

export default connect(mapStateToProps)(Header);

