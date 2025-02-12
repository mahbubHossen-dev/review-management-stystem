import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import DatePicker from 'react-datepicker';
import { Rating } from '@smastrom/react-rating';
import "react-datepicker/dist/react-datepicker.css";
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { id } = useParams()
    const [service, setService] = useState({})
    const [serviceReviews, setServiceReviews] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [rating, setRating] = useState(3);
    
    useEffect(() => {
        const handleSeeDetails = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/details/${id}`)
                setService(data)
                
            } catch (error) {
                toast.error(error)
            }
        }

        handleSeeDetails()

    }, [id])


    useEffect(() => {
        const handleSeeDetails = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/reviews/${id}`)
                setServiceReviews(data)
                
            } catch (error) {
                toast.error(error)
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
        

        try {
            const { data } = await axios.post('http://localhost:5000/addReview', review)
            
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
                    
                } catch (error) {
                    toast.error(error)
                }
            }
        } catch (error) {
            toast.error(error)
        }
    }


    return (
        <div>
            <div className='container mx-auto pt-24 pb-6'>
                <div className="card card-compact  bg-[#FFFFFF] shadow-xl">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                        <figure>
                            <img
                                className=''
                                src={service.photo}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p className='text-2xl font-medium'>Reviews {serviceReviews.length}</p>
                            <p>${service.price}</p>
                            <p>{service.description}</p>
                            <p>{service.category} Category</p>
                            <div className='md:flex gap-4 items-center'>
                                <div className='border py-2 px-2 rounded-md'>
                                    <Link to={service.website} target='_blank' className=''>
                                        <p className='text-xl font-500'>{service.website}</p>
                                        <p>visit here</p>
                                    </Link>
                                </div>
                                <div className="card-actions justify-end ">
                                    
                                    <button className="btn border w-full border-[#1F2937] flex flex-col gap-2" onClick={() => document.getElementById('my_modal_1').showModal()}>

                                        Add Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box mx-auto">
                            <div className="mx-auto card bg-[#1F2937] w-full max-w-sm shrink-0 shadow-2xl">
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
                                        <button className="btn bg-white">Add Review</button>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn bg-primary text-white">Close</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </dialog>
                </div>

                {/* reviews */}
                <div className='pt-12'>

                    {
                        serviceReviews.length ? <h1 className='text-xl mb-4'>This Service All Reviews</h1> : <h1 className='text-xl mb-4'>There are no reviews</h1>
                    }
                    <div className='space-y-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                serviceReviews.map(review => <ReviewCard photoButton={true} key={review._id} prevTitle={false} review={review}></ReviewCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;