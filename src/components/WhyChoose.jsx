import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { MdContactSupport, MdHomeRepairService, MdVerified } from 'react-icons/md';
import { GrSecure } from "react-icons/gr";

const WhyChoose = () => {
    return (
        <div className='md:mb-12 md:mt-24'>
            <h1 className="text-3xl font-medium text-center mb-6 mt-20 dark:text-white/90">Why Choose Us?</h1>
            <div className='bg-gray-200 rounded-md py-6 grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 bg-base gap-6 container mx-auto dark:bg-gray-600 dark:px-8'>
                <div className='text-center border p-6 rounded-md'>
                    <FaUserFriends className='text-4xl mx-auto' />
                    <h4 className='text-xl font-medium'>User Friendly</h4>
                    <p>Our platform is designed with simplicity in mind, making it easy for everyone to use</p>
                </div>
                <div className='text-center border p-6 rounded-md'>
                    <MdVerified className='text-4xl mx-auto' />
                    <h4 className='text-xl font-medium'>Verified Reviews</h4>
                    <p>All reviews are verified to ensure genuine feedback from real users.</p>
                </div>
                <div className='text-center border p-6 rounded-md'>
                    <MdHomeRepairService className='text-4xl mx-auto' />
                    <h4 className='text-xl font-medium'>Affordable Services</h4>
                    <p>We ensure cost-effective solutions for your needs</p>
                </div>
                <div className='text-center border p-6 rounded-md'>
                    <GrSecure className='text-4xl mx-auto' />
                    <h4 className='text-xl font-medium'>Secure & Reliable</h4>
                    <p>Your data is secure with us, and our system is built for reliability.</p>
                </div>
                <div className='text-center border p-6 rounded-md'>
                    <MdContactSupport className='text-4xl mx-auto' />
                    <h4 className='text-xl font-medium'>24/7 Customer Support</h4>
                    <p>Our support team is always here to help you, anytime you need.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;