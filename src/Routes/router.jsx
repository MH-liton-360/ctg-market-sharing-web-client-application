import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../LayOuts/HomeLayout";
import AuthLayout from "../LayOuts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";
import PosterDetails from "../Components/PosterDetails";
import AddCars from "../Components/AddCars";
import BookedServices from "../Components/BookedServices";

const router = createBrowserRouter([

    {
        path: "/",
        element: <HomeLayout></HomeLayout>,

        children: [
            {
                path: "Poster/:id",
                element: (
                    <PrivateRoute>
                        <PosterDetails></PosterDetails>
                    </PrivateRoute>
                ),
                loader: () => fetch('/CarCleaningBlogs.json'),

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
                path: "/dashboard/booked-services",
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
                        <BookedServices></BookedServices>
                    </PrivateRoute>
                ),
                errorElement: <Error />
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