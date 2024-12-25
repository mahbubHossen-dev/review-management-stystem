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
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
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
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <div className="form-control mt-6">
                        <button onClick={handleGoogleLogin} className="btn">Google</button>
                    </div>
                    <p>Don&apos;t have an account?  <Link to='/register' state={location.state}>Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;