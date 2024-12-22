import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import ServiceTable from '../components/ServiceTable';

const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [myServices, setMyServices] = useState([])
    // console.log(user)

    useEffect(() => {
        const fetchAllServicesData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/services?email=${user.email}`)
                setMyServices(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchAllServicesData()

    }, [user.email])

    // console.log(myServices)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>

                            <td>Title</td>
                            <td>company</td>
                            <td>category</td>
                            <td>Created Date</td>
                            <td>Price</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myServices.map(service => <ServiceTable key={service._id} service={service}></ServiceTable>)
                        }
                        



                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyServices;