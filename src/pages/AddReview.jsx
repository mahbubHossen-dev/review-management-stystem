import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const AddReview = () => {
    const {user} = useContext(AuthContext)
    const {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(id)
    const [startDate, setStartDate] = useState(new Date())
    const [rating, setRating] = useState(3);
    
    console.log(location)

    const handleReview =async (e) => {
        
        e.preventDefault()
        const form = e.target;
        const description = form.description.value;
        const reviewRating = rating;
        const deadline = startDate;
        

        const review = { service_id: id,name: user?.displayName, email: user?.email, photo: user?.photoURL, description, reviewRating, deadline }
        console.log(review)

        try {
            const { data } = await axios.post('https://reviewsystem-zeta.vercel.app/addReview', review)
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: "Review added successfully!",
                    icon: "success"
                });
                navigate(`/service/details/${id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleReview} className="card-body">
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

                

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;