import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {

    const location = useLocation()
    
    useEffect(() => {
        const titles = {
            '/': 'Home | RateMate',
            '/services': 'All Services',
            '/addServices': 'Add Service',
            '/myServices': 'My Services',
            '/myReviews': 'My Reviews',
            '/login': 'Login | RateMate',
            '/register': 'Register | RateMate'
        }
         document.title = titles[location.pathname] || 'RateMate'
    }, [location.pathname])

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