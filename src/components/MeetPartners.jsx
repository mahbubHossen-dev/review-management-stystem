import React from 'react';
import partner1 from '../assets/images/partners/1.jpg'
import partner2 from '../assets/images/partners/2.webp'
import partner3 from '../assets/images/partners/3.jpg'
import partner4 from '../assets/images/partners/4.jpg'
import partner5 from '../assets/images/partners/5.webp'

const MeetPartners = () => {
    return (
        <div>
            <h1 className='text-center font-medium text-3xl mb-6 md:mt-12'>Meet Our Partners</h1>
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto'>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto' src={partner1} alt="" />
                    <h3 className='text-lg font-medium'>Tommaso Zerbi</h3>
                    <p className='text-sm'>Pioneers in the tech industry, delivering cutting-edge solutions that transform ideas into reality. Together, we shape the future of innovation.</p>
                </div>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto' src={partner2} alt="" />
                    <h3 className='text-lg font-medium'>Asgiqur Rahman</h3>
                    <p className='text-sm'>With a shared commitment to quality and excellence, our partners set industry standards, inspiring trust and loyalty among their clients</p>
                </div>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto' src={partner3} alt="" />
                    <h3 className='text-lg font-medium'>Mahbub Hossen</h3>
                    <p className='text-sm'>Bring decades of expertise and a global perspective, driving impactful results across diverse markets and industries.</p>
                </div>
            </div>
            <div className='md:flex justify-evenly my-12'>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto' src={partner4} alt="" />
                    <h3 className='text-lg font-medium'>asia Begum</h3>
                    <p className='text-sm md:w-72'>Create synergistic opportunities, fostering innovation and growth through strategic collaboration.</p>
                </div>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto' src={partner5} alt="" />
                    <h3 className='text-lg font-medium'>Maria Islam</h3>
                    <p className='text-sm md:w-72'>Expert in their domain, delivering exceptional craftsmanship and unmatched professionalism.</p>
                </div>
            </div>
        </div>
    );
};

export default MeetPartners;