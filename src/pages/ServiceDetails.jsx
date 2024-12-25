import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import DatePicker from 'react-datepicker';
import { Rating } from '@smastrom/react-rating';
import "react-datepicker/dist/react-datepicker.css";
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { id } = useParams()
    const [service, setService] = useState({})
    const [serviceReviews, setServiceReviews] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [rating, setRating] = useState(3);
    console.log(location)
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

    const handleReview = async (e) => {

        e.preventDefault()
        const form = e.target;
        const description = form.description.value;
        const reviewRating = rating;
        const deadline = startDate;


        const review = { service_id: id, service_title: service.title, name: user?.displayName, email: user?.email, photo: user?.photoURL, description, reviewRating, deadline }
        console.log(review)

        try {
            const { data } = await axios.post('http://localhost:5000/addReview', review)
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: "Review added successfully!",
                    icon: "success"
                });
                navigate(`/service/details/${id}`)

                document.getElementById('my_modal_1').close()

                try {
                    const { data } = await axios.get(`http://localhost:5000/reviews/${id}`)
                    setServiceReviews(data)
                    // console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }


    console.log(service.title)
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
                        {/* <Link to={`/addReview/${service._id}`} ><button className="btn">Add Review</button></Link> */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Review</button>
                    </div>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box mx-auto">
                        <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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

                    </div>
                </dialog>
            </div>
            <div className='pt-12'>
                <h1>{serviceReviews.length} reviews</h1>
                <div className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            serviceReviews.map(review => <ReviewCard photoButton={true} key={review._id} prevTitle={false} review={review}></ReviewCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;