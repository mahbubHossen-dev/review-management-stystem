import React from 'react';
import { Rating } from '@smastrom/react-rating'
import { format } from "date-fns";

import '@smastrom/react-rating/style.css'

const ReviewCard = ({ review, photoButton, prevTitle, handleDeleteReview, handleUpdateReview }) => {
    // console.log(photo)
    const { _id, reviewRating, description, photo, name, deadline, service_title } = review || {}





    return (
        <div>

            <div className="card bg-base-100 shadow-xl border ">
                <div className="card-body space-y-3">
                    <div className='mx-auto'>
                        <Rating
                            style={{ maxWidth: 170 }}
                            value={reviewRating}
                            readOnly
                        />
                    </div>
                    {prevTitle && <p>{service_title}</p>}
                    <p className='text-[#6B7280]'>{description}</p>
                    <div className='flex justify-between items-center'>
                        <p>{format(new Date(deadline), 'P')}</p>
                        {
                            prevTitle && <div>
                                <button onClick={() => handleUpdateReview(_id, reviewRating)} className='btn mr-4'>Edit</button>
                                <button onClick={() => handleDeleteReview(_id)} className='btn'>Delete</button>
                            </div>
                        }
                    </div>
                    {
                        photoButton
                        &&
                        <div className="card-actions flex justify-between">
                            <div className='flex gap-2 items-center'>
                                <img className='w-10 h-10 rounded-full' src={photo} alt="" />
                                <p className='text-[#111827] font-bold'>{name}</p>
                            </div>
                            
                        </div>

                    }
                </div>

            </div>
            
        </div>
    );
};

export default ReviewCard;