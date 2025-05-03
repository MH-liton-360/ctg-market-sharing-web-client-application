import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../LayOuts/HomeLayout";
import AuthLayout from "../LayOuts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";
import AddCars from "../Components/AddCars";
import ManageService from "../Components/ManageService";
import BookedServices from "../Components/BookedServices";
import ServiceToDo from "../Components/ServiceToDo";
import CarDetails from "../Components/CarDetails";
import EngineCleaning from "../Components/EngineCleaning";
import BookedCar from "../Components/BookedCar";
const router = createBrowserRouter([

    {
        path: "/",
        element: <HomeLayout></HomeLayout>,

        children: [
            {
                path: "car/:id",
                element: (
                    <PrivateRoute>
                        <CarDetails></CarDetails>
                    </PrivateRoute>
                ),
                loader: () => fetch('/CarCleaningBlogs.json'),
                errorElement: <Error />,
            },
            {
                path: "/dashboard/add-service",
                element: (
                    <PrivateRoute>
                        <AddCars></AddCars>
                    </PrivateRoute>
                )
            },
            {
                path: "/dashboard/booked-service",
                element: (
                    <PrivateRoute>
                        <BookedServices></BookedServices>
                    </PrivateRoute>
                )
            },
            {
                path: "/dashboard/service-todo",
                element: (
                    <PrivateRoute>
                        <ServiceToDo></ServiceToDo>
                    </PrivateRoute>
                )
            },
            {
                path: "/dashboard/manage-service",
                loader: async () => {
                    try {
                        const res = await fetch('https://ctg-market-sharing-web-server.vercel.app/cars');
                        const data = await res.json();
                        return Array.isArray(data) ? data : [];
                    } catch (error) {
                        console.error("Loader failed:", error);
                        throw new Response("Failed to load favorite cars", { status: 500 });
                    }
                },
                element: (
                    <PrivateRoute>
                        <ManageService></ManageService>
                    </PrivateRoute>
                ),
                errorElement: <Error />
            },

            // routes path services 
            {
                path: "/services/engine-cleaning",
                element: <EngineCleaning></EngineCleaning>
            },
            {
                path: "/BookedCar/:id",
                element: <BookedCar></BookedCar>
            },


        ]
    },









    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    },

]);

export default router;