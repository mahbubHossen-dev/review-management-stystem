import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { format } from 'date-fns';
import useAxiosSecure from '../hook/useAxiosSecure';


const MyServices = () => {
    const [startDate, setStartDate] = useState(new Date())
    const { user } = useContext(AuthContext)
    const [myServices, setMyServices] = useState([])
    const [singleService, setSingleService] = useState({})
    const [search, setSearch] = useState('')
    const axiosInstance = useAxiosSecure()
    



    useEffect(() => {
        const fetchAllServicesData = async () => {
            try {
                const { data } = await axiosInstance.get(`/services?email=${user.email}&search=${search}`)
                setMyServices(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllServicesData()
    }, [axiosInstance, search, user.email])


    const handleUpdate = (id) => {
        document.getElementById('my_modal_4').showModal()
        fetch(`https://reviewsystem-zeta.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }

    const handleUpdateSubmit = async (e) => {
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
        const description = form.description.value;
        const service = { photo, title, company, website, category, price, deadline, email, description }

        try {
            const { data } = await axiosInstance.put(`/serviceUpdate/${singleService._id}`, service)
            if (data.modifiedCount) {
                document.getElementById('my_modal_4').close()
                toast.success('update Successfully')

                try {
                    const { data } = await axiosInstance.get(`/services?email=${user.email}&search=${search}`)
                    setMyServices(data)
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (id) => {
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

                axiosInstance.delete(`/service/${id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            const filter = myServices.filter(service => service._id !== id)
                            setMyServices(filter)

                        }
                    })

            }
        });
    }

    return (
        <div>

            <div className="overflow-x-auto  max-w-6xl mx-auto my-12">
                <div className='flex justify-end mr-8 mb-2'>
                    <div className='w-72 '>
                        <label className="input input-bordered flex items-center gap-2">
                            <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search By Title" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                </div>
                <table className="table bg-gray-200">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <td>Title</td>
                            <td>company</td>
                            <td>category</td>
                            <td>Created Date</td>
                            <td>Price</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myServices.map((service, idx) => <tr key={service._id}>
                                <th>{idx + 1}</th>
                                <td>{service.title}</td>
                                <td>{service.company}</td>
                                <td>{service.category}</td>
                                <td>{service.deadline && format(new Date(service.deadline), 'P')}</td>
                                <td>{service.price}</td>
                                <td>
                                    <button onClick={() => handleUpdate(service._id)} className='btn'>
                                        <CiEdit className='text-xl cursor-pointer' />
                                    </button>
                                </td>
                                <td>
                                    <MdDelete onClick={() => handleDelete(service._id)} className='text-xl cursor-pointer' />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <div>
                    {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button> */}
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">

                            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                                <form onSubmit={handleUpdateSubmit} className="card-body ">
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                        <div className="form-control">
                                            {/* <label className="label">
                                                <span className="label-text">Photo URL</span>
                                            </label> */}
                                            <input defaultValue={singleService.photo} type="url" name='photo' placeholder="photo-url" className="input input-bordered" required />
                                        </div>

                                        {/* Title */}
                                        <div className="form-control">
                                            {/* <label className="label">
                                                <span className="label-text">Title</span>
                                            </label> */}
                                            <input defaultValue={singleService.title} type="text" name='title' placeholder="title" className="input input-bordered" required />
                                        </div>

                                        {/* Company Name */}
                                        <div className="form-control">
                                            {/* <label className="label">
                                                <span className="label-text">Company Name</span>
                                            </label> */}
                                            <input defaultValue={singleService.company} type="text" name='company' placeholder="company-name" className="input input-bordered" required />
                                        </div>

                                        {/* Website URL */}
                                        <div className="form-control">
                                            {/* <label className="label">
                                                <span className="label-text">Website URL</span>
                                            </label> */}
                                            <input defaultValue={singleService.website} type="url" name='website' placeholder="website-url" className="input input-bordered" required />
                                        </div>

                                        {/* Category */}
                                        <div className="form-control">
                                            {/* <label className="label">
                                                <span className="label-text">Category</span>
                                            </label> */}
                                            <input defaultValue={singleService.category} type="text" name='category' placeholder="category" className="input input-bordered" required />
                                        </div>

                                        {/* Price */}
                                        <div className="form-control">
                                            {/* <label className="label">
                                                <span className="label-text">Price</span>
                                            </label> */}
                                            <input defaultValue={singleService.price} type="number" name='price' placeholder="price" className="input input-bordered" required />
                                        </div>

                                        {/* Added date (Not as input) */}
                                        <div className="form-control">
                                            {/* <label className="label">
                                                <span className="label-text">Date</span>
                                            </label> */}
                                            <DatePicker
                                                className='border p-2 rounded-md w-full'
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)} />
                                        </div>

                                        {/* userEmail (from auth) */}
                                        <div className="form-control">
                                            {/* <label className="label">
                                                <span className="label-text">Email</span>
                                            </label> */}
                                            <input type="email" name='email' defaultValue={user?.email} disabled={true} placeholder="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" required />
                                        </div>
                                    </div>



                                    {/* Description */}

                                    <div className="form-control">
                                        {/* <label className="label">
                                            <span className="label-text">Description</span>
                                        </label> */}
                                        <textarea defaultValue={singleService.description} name='description' className="w-full textarea textarea-bordered" placeholder="Bio" required></textarea>
                                    </div>


                                    <div className="modal-action">
                                        <div method="dialog" className='w-full'>
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn w-full bg-primary text-white">Update Service</button>
                                        </div>
                                    </div>

                                </form>
                            </div>


                            {/* close button */}
                            <div className="modal-action">
                                <form method="dialog" className=''>
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn text-white bg-primary">Close</button>
                                </form>
                            </div>

                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default MyServices;