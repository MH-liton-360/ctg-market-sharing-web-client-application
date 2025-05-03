import { useLoaderData } from "react-router-dom";
import AddCarCard from "./AddCarCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";



const ManageService = () => {
    const loadedCars = useLoaderData();
    const [cars, setCars] = useState(Array.isArray(loadedCars) ? loadedCars : []);


    return (
        <div className="text-center m-20">
            <Helmet>
                <title>Dashboard || Manage service</title>
            </Helmet>
            <h2 className="text-2xl my-20 text-blue-700 font-bold">Manage Services</h2>

            <div className="grid md:grid-cols-2 gap-4">

                {Array.isArray(cars) && cars.map(car => (
                    <AddCarCard
                        key={car._id}
                        car={car}
                        cars={cars}
                        setCars={setCars}
                    />
                ))}

            </div>
        </div>
    );
};

export default ManageService;