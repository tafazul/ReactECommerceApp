import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg'; 
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
    console.log('in header');
    console.log(currentUser);
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
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
