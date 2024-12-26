import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://reviewsystem-zeta.vercel.app',
    
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {

            if(error.status === 401 || error.status === 403){
                // user logout
                logOut()
                .then(() => {
                    navigate('/login')
                })
            }

            return Promise.reject(error)
        })
    }, [logOut, navigate])

    return axiosInstance
};

export default useAxiosSecure;