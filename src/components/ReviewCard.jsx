import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ReviewCard = ({ review }) => {
    const { reviewRating, description, photo, name } = review || {}
    console.log(reviewRating)
    // console.log(rating)
    return (
        <div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body space-y-3">
                    <div className='mx-auto'>
                        <Rating
                            style={{ maxWidth: 170 }}
                            value={reviewRating}
                            readOnly
                        />
                    </div>
                    <p>{description}</p>
                    <div className="card-actions flex justify-between">
                        <div className='flex gap-2 items-center'>
                            <img className='w-10 h-10 rounded-full' src={photo} alt="" />
                            <p>{name}</p>
                        </div>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;