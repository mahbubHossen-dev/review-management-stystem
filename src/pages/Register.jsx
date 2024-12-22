import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

    const { user, userLoginWithGoogle, createUser, updateUserProfile } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        setErrorMessage('')

        if(password.length < 6){
            return setErrorMessage('Password must contain at least 6 characters')
        }

        const lowerRegex = /^(?=.*[a-z]).+$/;
        const upperRegex = /^(?=.*[A-Z]).+$/;
        
        if(!lowerRegex.test(password)){
            return setErrorMessage('Password must contain at least one Lower Case')
        }

        if(!upperRegex.test(password)){
            return setErrorMessage('Password must contain at least one Upper Case')
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile({ displayName: name, photoURL: photo, email })
                toast.success("Account created successfully! Welcome to the platform.")
                navigate(`${location.state ? location.state : '/'}`)
                console.log('login with email', result.user)
            })
            .catch(err => {
                toast.error(err.message)
                console.log('login -->', err.message)
            })
    }

    const handleGoogleLogin = () => {
        userLoginWithGoogle()
            .then(() => {
                toast.success("Account created successfully! Welcome to the platform.")
                console.log('goggle login succes')
                navigate('/')
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
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                            <button className="btn btn-primary">Register</button>
                        </div>

                    </form>
                    <div className="form-control mt-6">
                        <button onClick={handleGoogleLogin} className="btn">Google</button>
                    </div>
                    <p>Already have an account? <Link to='/login'>Login here</Link></p>

                    {
                        errorMessage && <p>{errorMessage}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;