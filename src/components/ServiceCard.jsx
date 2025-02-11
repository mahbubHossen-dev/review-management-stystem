import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as motion from "motion/react-client"
const ServiceCard = ({ service }) => {
    const { _id, photo, title, company, website, category, price, deadline, email, description } = service || {}

    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            
            transition={{
                duration: 3,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="card card-compact bg-base-100 shadow-xl">
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
                <div className="card-actions justify-end">
                    <Link to={`/service/details/${_id}`}><button className="btn text-white/50 bg-[#1F2937]">See Details</button></Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;