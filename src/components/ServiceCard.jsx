import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, serviceImage, title, company, website, category, price, deadline, email, description } = service || {}


    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={serviceImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>${price}</p>
                <p>{description}</p>
                <p>Category: {category}</p>
                <div className="card-actions justify-end">
                    <Link to={`/service/details/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;