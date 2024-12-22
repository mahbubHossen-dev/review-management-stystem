import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <div className=''>
                <div className='max-w-6xl mx-auto py-8'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;