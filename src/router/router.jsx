import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddServices from "../pages/AddServices";
import MyServices from "../pages/MyServices";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyReviews from "../pages/MyReviews";

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
                element: <AddServices />
            },
            {
                path: '/myServices',
                element: <MyServices />
            },
            {
                path: '/myReviews',
                element: <MyReviews />
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