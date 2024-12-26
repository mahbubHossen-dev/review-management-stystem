import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {

    const { user, userLoginWithGoogle, createUser, updateUserProfile } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        setErrorMessage('')

        if (password.length < 6) {
            return setErrorMessage('Password must contain at least 6 characters')
        }

        const lowerRegex = /^(?=.*[a-z]).+$/;
        const upperRegex = /^(?=.*[A-Z]).+$/;

        if (!lowerRegex.test(password)) {
            return setErrorMessage('Password must contain at least one Lower Case')
        }

        if (!upperRegex.test(password)) {
            return setErrorMessage('Password must contain at least one Upper Case')
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile({ displayName: name, photoURL: photo, email })
                toast.success("Account created successfully! Welcome to the platform.")
                navigate(`${location.state ? location.state : '/'}`)
                
            })
            .catch(err => {
                toast.error(err.message)
                
            })
    }

    const handleGoogleLogin = () => {
        userLoginWithGoogle()
            .then(() => {
                toast.success("Account created successfully! Welcome to the platform.")
                
                navigate('/')
            })
            .catch(err => {
                toast.error(err.message)
                
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen py-12">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <h1 className='text-3xl font-bold text-center'>Register now</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="photo-url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-[#3B82F6] text-white">Register</button>
                    </div>

                </form>
                <div className="form-control px-8">
                    <button onClick={handleGoogleLogin} className="btn text-white bg-[#3B82F6]"><FaGoogle /> Google</button>
                </div>
                <p className='py-6 text-center'>Already have an account? <Link to='/login' className='border-b-2 font-bold'>Login here</Link></p>

                {
                    errorMessage && <p className='text-center text-red-500 pb-4'>{errorMessage}</p>
                }
            </div>
        </div>
    );
};

export default Register;