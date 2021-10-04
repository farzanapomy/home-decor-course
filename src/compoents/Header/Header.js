import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/logo.jpg';
import './Header.css'
const Header = () => {
    const icon = <FontAwesomeIcon icon={faHome} />

    return (
        <div >
            <div className="header-section">
                <img src={img} alt="" />
                <div className="title">
                    <h1>{icon} Gardiva.com</h1>
                    <br />
                    <div>
                        <h4>"We may think we are nurturing our garden, but of course it's our garden that is really nurturing us." Jenny Uglow</h4>
                    </div>
                </div>
            </div>

            <br />
            <div className="nav-ber">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/review">Reviews</NavLink>
                <NavLink to="/login">Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Header;