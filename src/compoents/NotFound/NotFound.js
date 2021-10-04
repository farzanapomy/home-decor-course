import React from 'react';
import { NavLink } from 'react-router-dom';
import invalid from '../../images/notFound.jpg';
const NotFound = () => {
    return (
        <div>
            <NavLink to="*">
                <img src={invalid} alt="" />
            </NavLink>
        </div>
    );
};

export default NotFound;