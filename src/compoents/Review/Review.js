import React from 'react';
import './Review.css'
const Review = (props) => {
    console.log(props)
    const { name, descriptions, img } = props.review
    return (
        <div className="review-section">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{descriptions}</p>
        </div>
    );
};

export default Review;