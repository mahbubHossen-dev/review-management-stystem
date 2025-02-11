import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const Services = () => {

    const [filter, setFilter] = useState([])

    const { isPending, error, data:allServices=[] } = useQuery({
        queryKey: ['repoData', filter],
        queryFn: async () => {
            const {data} = await axios.get(`http://localhost:5000/all-services?filter=${filter}`)
            return data 
        }
    })

    console.log(allServices)

    if(isPending){
        return <span className="mt-24 mx-auto text-center loading loading-spinner loading-lg"></span>
    }


    

    return (
        <div>
            <div className='container mx-auto pt-14'>
                <div className='flex flex-col gap-2 w-60 mt-12 mb-8 mx-auto'>
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
                        <option value='Design'>Design</option>
                        <option value='Photography'>Photography</option>
                        <option value='Cleaning'>Cleaning</option>
                        <option value='Health'>Health</option>
                        <option value='Event'>Event</option>
                        <option value='Education'>Education</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        allServices?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;