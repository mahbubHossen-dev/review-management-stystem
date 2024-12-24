import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import { Rating } from '@smastrom/react-rating';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())
    const [rating, setRating] = useState(0);
    const[id,setId] = useState('')

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        

        fetchReviewsDataByEmail()

    }, [])


    const fetchReviewsDataByEmail = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/all-review?email=${user?.email}`)
            setReviews(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(reviews)


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

                fetch(`http://localhost:5000/review/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            const filter = reviews.filter(service => service._id !== id)
                            setReviews(filter)
                        }
                    })
            }
        });
    }


    const handleUpdateReview = (id, reviewRating) => {
        console.log(id)
        document.getElementById('my_modal_1').showModal()
        setId(id)
        setRating(reviewRating)
    }
    console.log(rating)
    const submitUpdateReview =async (e) => {
        e.preventDefault()
        const form = e.target;
        const description = form.description.value;
        const reviewRating = rating;
        const review = {description, reviewRating}
        try {
            const {data} =await axios.patch(`http://localhost:5000/reviewUpdate/${id}`, review)
            console.log(data)
            if(data.modifiedCount){
                fetchReviewsDataByEmail()
            }
        } catch (error) {
            console.log(error)
        }

        console.log('click')
        console.log(id)
    }

    return (
        <div>
            <div className='space-y-3 max-w-2xl mx-auto'>
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
            </div>
            <button className="btn">open modal</button>
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
                            <button className="btn btn-primary">Add Review</button>
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