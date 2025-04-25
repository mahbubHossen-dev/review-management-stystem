import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import { Rating } from '@smastrom/react-rating';
import useAxiosSecure from '../hook/useAxiosSecure';
import { toast } from 'react-toastify';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())
    const [rating, setRating] = useState(0);
    const [id, setId] = useState('')
    const axiosInstance = useAxiosSecure()

    const [reviews, setReviews] = useState([])

    useEffect(() => {

        const fetchReviewsDataByEmail = async () => {
            try {
                const { data } = await axiosInstance.get(`/all-review?email=${user?.email}`)
                setReviews(data)

            } catch (error) {
                toast.error(error)
            }
        }
        fetchReviewsDataByEmail()

    }, [axiosInstance, user?.email])


    const handleDeleteReview = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                axiosInstance.delete(`/review/${id}`,)
                    .then(data => {
                        if (data.data.deletedCount) {
                            const filter = reviews.filter(service => service._id !== id)
                            setReviews(filter)
                        }
                    })
            }
        });
    }


    const handleUpdateReview = (id, reviewRating) => {
        document.getElementById('my_modal_1').showModal()
        setId(id)
        setRating(reviewRating)
    }
    const submitUpdateReview = async (e) => {
        e.preventDefault()
        const form = e.target;
        const description = form.description.value;
        const reviewRating = rating;
        const review = { description, reviewRating }
        try {
            const { data } = await axiosInstance.patch(`/reviewUpdate/${id}`, review)

            if (data.modifiedCount) {
                try {
                    const { data } = await axiosInstance.get(`/all-review?email=${user?.email}`)
                    setReviews(data)

                } catch (error) {
                    toast.error(error)
                }
                document.getElementById('my_modal_1').close()
            }
        } catch (error) {
            toast.error(error)
        }

    }

    return (
        <div className='bg-base-300 dark:bg-[#0F172A]'>
            <div className='space-y-3 max-w-5xl mx-auto pt-24 pb-6 min-h-[calc(100vh-220px)]'>
                {
                    reviews.length ?<div className='grid md:grid-cols-2 gap-4'>
                    {
                        reviews.map(review => <ReviewCard
                            handleDeleteReview={handleDeleteReview}
                            prevTitle={true} photoButton={false}
                            key={review._id}
                            review={review}
                            handleUpdateReview={handleUpdateReview}
                            setRating={setRating}
                        ></ReviewCard>)
                    }
                </div> : <h3 className='text-center text-2xl'>No Review</h3>
                }
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={submitUpdateReview} className="card-body">
                        {/* Text area */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' className="w-full textarea textarea-bordered" placeholder="Bio" required></textarea>
                        </div>

                        {/* Rating */}
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                        />

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <DatePicker
                                className='border p-2 rounded-md w-full'
                                selected={startDate}
                                disabled={true} />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Review</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyReviews;