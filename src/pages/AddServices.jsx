import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'
import useAxiosSecure from '../hook/useAxiosSecure';
import { toast } from 'react-toastify';

const AddServices = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())
    const axiosInstance = useAxiosSecure()

    const handleAddService = async (e) => {
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
        const service = { photo, title, company, website, category, price, deadline, email, description }

        try {
            const { data } = await axiosInstance.post('/services', service)
            
            if (data.insertedId) {
                Swal.fire({
                    title: "Service added successfully!",
                    icon: "success"
                });
            }
        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <div className='pt-24 pb-6'>
            <div className="card bg-[#506585] w-full shrink-0 shadow-xl container mx-auto ">
            <form onSubmit={handleAddService} className="card-body ">
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Photo Image URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="photo-url" className="input input-bordered" required />
                    </div>

                    {/* Title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Title</span>
                        </label>
                        <input type="text" name='title' placeholder="title" className="input input-bordered" required />
                    </div>

                    {/* Company Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Company Name</span>
                        </label>
                        <input type="text" name='company' placeholder="company-name" className="input input-bordered" required />
                    </div>

                    {/* Website URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Website URL</span>
                        </label>
                        <input type="url" name='website' placeholder="website-url" className="input input-bordered" required />
                    </div>



                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                    </div>

                    {/* Added date (Not as input) */}


                    {/* userEmail (from auth) */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user.email} disabled={true} placeholder="email" className="block w-full px-4 py-3  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" required />
                    </div>


                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300">Description</span>
                        </label>
                        <textarea name='description' className=" textarea textarea-bordered" placeholder="Bio" required></textarea>
                    </div>

                    {/* Category */}
                    <div className='flex flex-col gap-2 w-60'>
                        <label className="label ">
                            <span className="label-text text-gray-300">Category</span>
                        </label>
                        <select
                            name='category'
                            id='category'
                            className='border p-2 rounded-md'
                        >
                            <option value='Filter By Category' disabled>Select Category</option>
                            <option value='Marketing'>Marketing</option>
                            <option value='Food'>Food</option>
                            <option value='IT'>IT</option>
                            <option value='Design'>Design</option>
                            <option value='Photography'>Photography</option>
                            <option value='Cleaning'>Cleaning</option>
                            <option value='Health'>Health</option>
                            <option value='Event'>Event</option>
                            <option value='Education'>Education</option>
                        </select>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#1F2937] outline-none border-none text-white hover:bg-white hover:text-[#1F2937] w-full">Add Service</button>
                </div>

            </form>
        </div>
        </div>
    );
};

export default AddServices;