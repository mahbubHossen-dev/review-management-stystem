import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        const fetchAllServicesData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/services')
                setAllServices(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchAllServicesData()

    }, [])



    

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;