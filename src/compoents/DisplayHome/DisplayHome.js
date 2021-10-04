import React from 'react';
import './DisplayHome.css'


const DisplayHome = (props) => {
    const { img, title, details } = props.displayHome
    return (
        <div className='home-style'>

            <img src={img} alt="" />
            <h4>{title}</h4>
            <p>{details}</p>

        </div>
    );
};

export default DisplayHome;