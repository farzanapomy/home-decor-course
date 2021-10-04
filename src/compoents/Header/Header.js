import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/logo.jpg';
import './Header.css'
const Header = () => {
    return (
        <div >
            <div className="header-section">
                <img src={img} alt="" />
                <div className="title">
                    <h1>Gardiva.com</h1>
                    <div>
                        <h4>"We may think we are nurturing our garden, but of course it's our garden that is really nurturing us." Jenny Uglow</h4>
                        </div>
                </div>

            </div>

            <br />
            <div className="nav-ber">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/review">Reviews</NavLink>
            </div>
        </div>
    );
};

export default Header;