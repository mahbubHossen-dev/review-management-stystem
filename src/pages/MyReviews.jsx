import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyReviews = () => {

    const [allReview, setAllReview] = useState([])

    useEffect(() => {
        const fetchAllServicesData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/all-review')
                setAllReview(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchAllServicesData()

    }, [])
    console.log(allReview)

    return (
        <div>
            my reviews
        </div>
    );
};

export default MyReviews;