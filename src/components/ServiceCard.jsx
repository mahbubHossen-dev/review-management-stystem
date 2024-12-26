import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, photo, title, company, website, category, price, deadline, email, description } = service || {}


    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    className='h-44 rounded-lg'
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[#374151]">{title}</h2>
                <p className='text-[#1F2937]'>${price}</p>
                <p className='text-[#1F2937]'>{description}</p>
                <p className='text-[#1F2937]'>Category: {category}</p>
                <div className="card-actions justify-end">
                    <Link to={`/service/details/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;