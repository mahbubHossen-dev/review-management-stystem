import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase_init';
import axios from 'axios';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            if (currUser) {
                setUser(currUser)
                

                const email = currUser?.email;

                axios.post('http://localhost:5000/jwt', { email }, {withCredentials: true})
                    .then(data => console.log(data.data))

            } else {
                setUser(null)
                axios.post('http://localhost:5000/logout', {}, {withCredentials: true})
                    .then(data => console.log(data.data))
            }
            setLoading(false)

        })


        return () => {
            unsubscribe()
        }

    }, [])

    const provider = new GoogleAuthProvider()

    const userLoginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (updatedData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }

    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        loginUser,
        logOut,
        userLoginWithGoogle,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;