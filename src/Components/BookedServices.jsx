import { useLocation } from "react-router-dom";


const BookedServices = () => {

    const location = useLocation();
    const bookedCar = location.state?.bookedCar;


    return (
        <div className="text-center m-20">
            <h2 className="text-2xl my-20 text-blue-700 font-bold">Booked Service</h2>

        </div>
    );
};

export default BookedServices;