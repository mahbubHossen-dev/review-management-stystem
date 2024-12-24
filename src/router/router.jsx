import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddServices from "../pages/AddServices";
import MyServices from "../pages/MyServices";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyReviews from "../pages/MyReviews";
import PrivateLayout from "../Layout/PrivateLayout";
import ServiceDetails from "../pages/ServiceDetails";
import AddReview from "../pages/AddReview";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/addServices',
                element: <PrivateLayout><AddServices /></PrivateLayout>
            },
            {
                path: '/myServices',
                element: <PrivateLayout><MyServices /></PrivateLayout>
            },
            {
                path: '/myReviews',
                element: <PrivateLayout><MyReviews /></PrivateLayout>
            },
            {
                path: '/service/details/:id',
                element: <PrivateLayout><ServiceDetails /></PrivateLayout>
            },
            {
                path: '/addReview/:id',
                element: <PrivateLayout><AddReview /></PrivateLayout>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])

export default router;