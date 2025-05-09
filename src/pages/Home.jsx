import React, { useEffect, useState } from 'react';
import BannerSlider from '../components/BannerSlider';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';
import { toast } from 'react-toastify';
import MeetPartners from '../components/MeetPartners';
import WhyChoose from '../components/WhyChoose';
import Achievements from '../components/Achievements';
import {
    useQuery,
} from '@tanstack/react-query'

const Home = ({isDarkMood}) => {
    const [limitedServices, setLimitedServices] = useState([])
    console.log(isDarkMood)
    useEffect(() => {
        const fetchAllServicesData = async () => {
            try {
                const { data } = await axios.get('https://review-management-2.vercel.app/limitedServices')
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

            <div className='container mx-auto mt-12 md:mt-24'>
                <h1 className='text-3xl font-medium my-6 text-center'>Our Services</h1>
                <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-12'>
                    {
                        limitedServices.map(service => <ServiceCard isDarkMood={isDarkMood} key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>

            <MeetPartners />

            <Achievements />

            <WhyChoose />


        </div>
    );
};

export default Home;