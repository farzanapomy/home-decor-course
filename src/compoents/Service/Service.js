import React from 'react';

const Service = (props) => {
    console.log(props)
    const { name, description, price, img } = props.service

    return (
        <div>
            <img src={img} alt="" />
            <h3>Course Name :{name}</h3>
            <p>{description}</p>
            <h4>Course Fee: $ {price}</h4>
        </div>
    );
};

export default Service;