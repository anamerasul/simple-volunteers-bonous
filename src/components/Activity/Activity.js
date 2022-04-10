import React from 'react';
import './Activity.css';

const Activity = ({ activity }) => {
    // console.log(activity);
    const { title, img } = activity;
    // console.log(img);
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default Activity;