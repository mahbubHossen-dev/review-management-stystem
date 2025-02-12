import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {

    const [isDarkMood, setIsDarkMood] = useState(false)


    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "center", 
            });
        }
    };


    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('prefers-color-scheme: dark').matches)) {
            setIsDarkMood(true)
        } else {
            setIsDarkMood(false)
        }
    }, [setIsDarkMood])

    useEffect(() => {
        if (isDarkMood) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = ''
        }
    }, [isDarkMood])

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
    
    // console.log(isDarkMood)

    return (
        <div className={`${isDarkMood ? 'dark:bg-[#0F172A] text-white' : ''}`}>
            <div className=''>
                <Navbar isDarkMood={isDarkMood} setIsDarkMood={setIsDarkMood} scrollToSection={scrollToSection}/>
            </div>
            <div className=''>
            <Outlet isDarkMood={isDarkMood}/>
                
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;