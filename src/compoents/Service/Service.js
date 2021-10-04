import { Button } from '@mui/material';
import React from 'react';
import './Service.css'
const Service = (props) => {

    console.log(props)
    const { name, description, price, img } = props.service

    return (
        <div className="service-section">
            <img src={img} alt="" />
            <h3>Course Name : </h3>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>Course Fee: $ {price}</h4>
            <Button variant="contained" color="success">
                Buy Course
            </Button>
        </div>
    );
};

export default Service;