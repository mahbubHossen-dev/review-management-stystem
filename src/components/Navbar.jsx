import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import moonThemeIcon from '../assets/images/moon_icon.png'
import sunIcon from '../assets/images/sun_icon.png'

const Navbar = ({ isDarkMood, setIsDarkMood, scrollToSection }) => {
    const { user, logOut } = useContext(AuthContext)
    const menuLinks = <>
        <li className='hover:bg-[#3B82F6] hover:rounded-md'><NavLink to='/'>Home</NavLink></li>
        <li className='hover:bg-[#3B82F6] hover:rounded-md'><NavLink to='/services'>Services</NavLink></li>
        {
            user && <>
                <li className='hover:bg-[#3B82F6] hover:rounded-md'><NavLink to='/addServices'>Add Services</NavLink></li>
                <li className='hover:bg-[#3B82F6] hover:rounded-md'><NavLink to='/myServices'>My Services</NavLink></li>

            </>
        }
        {
            user ? <li className='hover:bg-[#3B82F6] hover:rounded-md'><NavLink to='/myReviews'>My Reviews</NavLink></li> : <li className='hover:bg-[#3B82F6] hover:rounded-md'><NavLink to='/reviews'>Reviews</NavLink></li>
        }

    </>

    const handleLogout = () => {
        logOut()
    }

    return (
        <div className='bg-[#1F2937] fixed w-full text-[#E5E7EB] z-50'>
            <div className="container xl:max-w-7xl mx-auto navbar bg-[#1F2937]">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuLinks}
                        </ul>
                    </div>
                    <Link className=" md:text-2xl italic">RateMate</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img onClick={() => setIsDarkMood(!isDarkMood)} src={isDarkMood ? sunIcon : moonThemeIcon} alt="" className='w-6 cursor-pointer mr-6' />
                    {
                        user ?
                            <div className='flex items-center gap-4'>
                                <Link onClick={handleLogout} to='/login' className="btn">Logout</Link>
                                <div className='tooltip tooltip-info tooltip-bottom' data-tip={user.displayName}>
                                    <img referrerPolicy='no-referrer' className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                </div>

                            </div>
                            :
                            <div className='flex items-center gap-3'>
                                <Link to='/register' className="border-b">Register</Link>
                                <Link to='/login' className="py-2 px-4 rounded-md font-medium bg-white text-[#1F2937]">Login</Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;