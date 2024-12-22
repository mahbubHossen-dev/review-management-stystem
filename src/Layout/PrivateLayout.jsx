import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateLayout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <Loading/>
    }

    if(user){
        return children
    }
    
    return (
        <Navigate state={location.pathname} to='/login'>
            
        </Navigate>
    );
};

export default PrivateLayout;