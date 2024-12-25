import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {

    const [allServices, setAllServices] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {
        const fetchAllServicesData = async () => {

            try {
                const { data } = await axios.get(`http://localhost:5000/all-services?filter=${filter}`)
                setAllServices(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }


        fetchAllServicesData()

    }, [filter])
    console.log(allServices)





    return (
        <div>
            <div>
                <div className='flex flex-col gap-2 w-60 my-12'>
                    <label className='text-gray-700 ' htmlFor='category'>
                        Filter By Category
                    </label>
                    <select
                        onChange={e => setFilter(e.target.value)}
                        name='category'
                        id='category'
                        className='border p-2 rounded-md'
                    >
                        <option value='Filter By Category'>Filter By Category</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Food'>Food</option>
                        <option value='IT'>IT</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;