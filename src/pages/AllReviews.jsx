import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loading from '../components/Loading';
import ReviewCard from '../components/ReviewCard';
import { Rating } from '@smastrom/react-rating'
const AllReviews = () => {

    const { isPending, data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/all-reviews`)
            return data
        }
    })
    console.log(reviews)

    if (isPending) {
        return <Loading></Loading>
    }

    return (
        <div className='pt-24 pb-6 '>
            <div className='container mx-auto min-h-[calc(100vh-220px)]'>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ]">
                    {
                        reviews.map(review => <div key={review._id} className="card rounded-md bg-gray-300 shadow-xl">
                            <div className="card-body">
                                <Rating
                                    style={{ maxWidth: 170 }}
                                    value={review.reviewRating}
                                    readOnly
                                />
                                <h2 className="card-title">{review.service_title}</h2>
                                <p>{review.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReviews;