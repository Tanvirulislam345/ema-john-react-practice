import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, signOutUsingGoogle } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user?.email &&
                    <span style={{ color: 'red' }}>{user.displayName}</span>
                }
                {
                    user?.email ?
                        <NavLink to="/login" onClick={signOutUsingGoogle}>Sign Out</NavLink>
                        :
                        <NavLink to="/login">Log In</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;