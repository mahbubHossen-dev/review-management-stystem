import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { user, setUser, userLoginWithGoogle, loginUser } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

       

        loginUser(email, password)
            .then(result => {
                setUser(result.user)
                toast.success("Welcome back! You have successfully logged in.")
                
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(err => {
                toast.error(err.message)
                
            })
    }

    const handleGoogleLogin = () => {
        userLoginWithGoogle()
            .then((result) => {
                toast.success("Welcome back! You have successfully logged in.")
                
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(err => {
                toast.error(err.message)
                
            })
    }



    return (
        <div className='bg-[#F3F4F6] pt-24 pb-6'>
            <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
                <h1 className="text-2xl font-bold text-center -mb-6 pt-4">Login now!</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered bg-[#D1D5DB]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered bg-[#D1D5DB]" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn bg-[#3B82F6] hover:bg-[#1F2937] text-white">Login</button>
                    </div>

                </form>
                <div className="form-control px-8">
                    <button onClick={handleGoogleLogin} className="hover:bg-[#1F2937] btn -mt-4 text-white bg-[#3B82F6]"><FaGoogle /> Google</button>
                </div>
                <p className='text-center text-gray-500 py-4'>Don&apos;t have an account?  <Link to='/register' state={location.state} className='font-medium border-b-2 text-[#1F2937]'>Register here</Link></p>

            </div>
        </div>
    );
};

export default Login;