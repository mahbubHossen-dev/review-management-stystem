import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const { user, setUser, userLoginWithGoogle, loginUser } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)

        loginUser(email, password)
            .then(result => {
                setUser(result.user)
                toast.success("Welcome back! You have successfully logged in.")
                console.log(result.user)
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err.message)
            })
    }

    const handleGoogleLogin = () => {
        userLoginWithGoogle()
            .then((result) => {
                toast.success("Welcome back! You have successfully logged in.")
                console.log(result.user)
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err.message)
            })
    }



    return (
        <div className='bg-[#F3F4F6] '>
            <div className="hero min-h-screen md:max-w-6xl mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3B82F6] text-white">Login</button>
                            </div>

                        </form>
                        <div className="form-control px-8">
                            <button onClick={handleGoogleLogin} className="btn">Google</button>
                        </div>
                        <p className='text-center text-gray-500 py-4'>Don&apos;t have an account?  <Link to='/register' state={location.state} className='font-medium border-b-2'>Register here</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;