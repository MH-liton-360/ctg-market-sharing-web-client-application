import { useEffect, useState } from "react";
import Car from "./Car";

const Main = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('CarCleaningBlogs.json')
            .then((res) => res.json())
            .then((data) => setCars(data));

    }, [])

    return (
        <div>
            <h2 className="text-3xl font-bold py-10">All Available Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    cars.map(car => <Car car={car} key={car._id}></Car>)
                }
            </div>

        </div>
    );
};

export default Main;