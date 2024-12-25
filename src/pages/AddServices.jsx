import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'

const AddServices = () => {
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())

    const handleAddService =async (e) => {
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value
        const title = form.title.value
        const company = form.company.value
        const website = form.website.value
        const category = form.category.value
        const price = form.price.value
        const deadline = startDate
        const email = form.email.value
        const description = form.description.value
        // const email = form.email.value
        const service = {photo, title, company, website, category, price, deadline, email, description}
        
        try {
            const {data} = await axios.post('http://localhost:5000/services', service, {withCredentials: true})
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Service added successfully!",
                    icon: "success"
                  });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleAddService} className="card-body ">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="photo-url" className="input input-bordered" required />
                    </div>

                    {/* Title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name='title' placeholder="title" className="input input-bordered" required />
                    </div>

                    {/* Company Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" name='company' placeholder="company-name" className="input input-bordered" required />
                    </div>

                    {/* Website URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Website URL</span>
                        </label>
                        <input type="url" name='website' placeholder="website-url" className="input input-bordered" required />
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="category" className="input input-bordered" required />
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                    </div>

                    {/* Added date (Not as input) */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <DatePicker 
                        className='border p-2 rounded-md w-full'
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} />
                    </div>

                    {/* userEmail (from auth) */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user.email} disabled={true} placeholder="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" required />
                    </div>
                </div>



                {/* Description */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' className="w-full textarea textarea-bordered" placeholder="Bio" required></textarea>
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary w-full">Add Service</button>
                </div>

            </form>
        </div>
    );
};

export default AddServices;