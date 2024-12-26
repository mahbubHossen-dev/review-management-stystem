import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#1F2937] '>
            <footer className="footer text-base-content  p-10 max-w-7xl mx-auto">
                <aside className='text-white'>
                    <h1 className='text-3xl font-medium italic'>RateMate</h1>
                    <p className='w-60'>
                        RM Industries Ltd.
                        <br />
                        <p className='w-72'>RateMate is a user-friendly rating and review platform that helps users choose the best services and products.</p>
                    </p>
                </aside>
                <nav className='text-white'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="footer-title">Social</h6>
                    <div className='flex gap-4'>
                        <Link to='https://www.facebook.com/mahbub.hossen.1/' target='_blank'><FaFacebook className='text-3xl' /></Link>
                        <Link to='https://github.com/MahbubHosssen' target='_blank'><FaLinkedin className='text-3xl' /></Link>
                        <Link to='https://github.com/MahbubHosssen' target='_blank'><FaGithub className='text-3xl' /></Link>
                    </div>

                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-[#1F2937] border-t border-gray-600">
                <aside className='text-white'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by RM Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;