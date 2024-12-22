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