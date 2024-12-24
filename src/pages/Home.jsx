import React, { useEffect, useState } from 'react';
import BannerSlider from '../components/BannerSlider';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    const [limitedServices, setLimitedServices] = useState([])

    useEffect(() => {
        const fetchAllServicesData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/limitedServices')
                setLimitedServices(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchAllServicesData()

    }, [])

    // console.log(limitedServices)

    return (
        <div>
            <BannerSlider></BannerSlider>

            <div>
                <h1 className='text-3xl font-medium'>Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        limitedServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;