import React, { useEffect, useState } from 'react';
import BannerSlider from '../components/BannerSlider';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';
import { toast } from 'react-toastify';
import MeetPartners from '../components/MeetPartners';
import WhyChoose from '../components/WhyChoose';
import Achievements from '../components/Achievements';

const Home = () => {
    const [limitedServices, setLimitedServices] = useState([])

    useEffect(() => {
        const fetchAllServicesData = async () => {
            try {
                const { data } = await axios.get('https://reviewsystem-zeta.vercel.app/limitedServices')
                setLimitedServices(data)
                
            } catch (error) {
                toast.error(error)
            }
        }

        fetchAllServicesData()

    }, [])

    

    return (
        <div>
            <BannerSlider></BannerSlider>

            <div className='container mx-auto mt-24'>
                <h1 className='text-3xl font-medium my-6 text-center'>Our Services</h1>
                <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-12'>
                    {
                        limitedServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>

            <MeetPartners/>

            <Achievements/>

            <WhyChoose/>

            
        </div>
    );
};

export default Home;