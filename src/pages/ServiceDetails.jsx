import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

const ServiceDetails = () => {
    const { id } = useParams()
    const [service, setService] = useState({})
    const [serviceReviews, setServiceReviews] = useState([])

    useEffect(() => {
        const handleSeeDetails = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/details/${id}`)
                setService(data)
                // console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        handleSeeDetails()

    }, [id])


    useEffect(() => {
        const handleSeeDetails = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/reviews/${id}`)
                setServiceReviews(data)
                // console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        handleSeeDetails()

    }, [id])
    console.log(serviceReviews)

    // console.log(service)
    // console.log(allReviews)

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <h1>feature</h1>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.price}</p>
                    <p>{service.description}</p>
                    <p>Category: {service.category}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/addReview/${service._id}`} ><button className="btn">Add Review</button></Link>

                    </div>
                </div>
            </div>
            <div className='pt-12'>
                <h1>All reviews</h1>
                <div className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            serviceReviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;