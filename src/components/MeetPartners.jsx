import React from 'react';
import partner1 from '../assets/images/partners/1.jpg'
import partner2 from '../assets/images/partners/2.webp'
import partner3 from '../assets/images/partners/3.jpg'
import partner4 from '../assets/images/partners/4.jpg'
import partner5 from '../assets/images/partners/5.webp'

const MeetPartners = () => {
    return (
        <div>
            <h1 className='text-center font-medium text-3xl mb-6 md:mt-12 dark:text-white/90'>Meet Our Partners</h1>
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto'>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto border-4 border-[#1F2937]' src={partner1} alt="" />
                    <h3 className='text-lg font-medium dark:text-white/90'>Tommaso Zerbi</h3>
                    <p className='text-sm dark:text-white/90'>Pioneers in the tech industry, delivering cutting-edge solutions that transform ideas into reality. Together, we shape the future of innovation.</p>
                </div>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto  border-4 border-[#1F2937]' src={partner2} alt="" />
                    <h3 className='text-lg font-medium dark:text-white/90 dark:text-white/90'>Asgiqur Rahman</h3>
                    <p className='text-sm dark:text-white/90 dark:text-white/90'>With a shared commitment to quality and excellence, our partners set industry standards, inspiring trust and loyalty among their clients</p>
                </div>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto border-4 border-[#1F2937]' src={partner3} alt="" />
                    <h3 className='text-lg font-medium dark:text-white/90'>Mahbub Hossen</h3>
                    <p className='text-sm dark:text-white/90'>Bring decades of expertise and a global perspective, driving impactful results across diverse markets and industries.</p>
                </div>
            </div>
            <div className='md:flex justify-evenly my-12'>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto border-4 border-[#1F2937]' src={partner4} alt="" />
                    <h3 className='text-lg font-medium dark:text-white/90'>asia Begum</h3>
                    <p className='text-sm md:w-72 dark:text-white/90'>Create synergistic opportunities, fostering innovation and growth through strategic collaboration.</p>
                </div>
                <div className='text-center'>
                    <img className='w-40 h-40 rounded-full mx-auto border-4 border-[#1F2937]' src={partner5} alt="" />
                    <h3 className='text-lg font-medium dark:text-white/90'>Maria Islam</h3>
                    <p className='text-sm md:w-72 dark:text-white/90'>Expert in their domain, delivering exceptional craftsmanship and unmatched professionalism.</p>
                </div>
            </div>
        </div>
    );
};

export default MeetPartners;