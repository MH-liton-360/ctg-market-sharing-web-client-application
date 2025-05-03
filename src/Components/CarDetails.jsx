import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const CarDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const navigate = useNavigate();

    const submitCarBooked = async (e) => {
        e.preventDefault();
        navigate("/dashboard/booked-service", {
            state: { bookedCar: car }
        });
        try {
            const response = await fetch("https://ctg-market-sharing-web-server.vercel.app/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(car)
            });

            const result = await response.json();
            console.log("Booking saved:", result);

            navigate("/dashboard/booked-service", {
                state: { bookedCar: car }
            });

        } catch (error) {
            console.error("Failed to book:", error);
        }
    };



    const car = data.find(car => car.id.toString() === id);

    const { service_image, service_name, service_location, service_price, service_description, provider_name, rating } = car;
    return (

        <section className="justify-items-center pt-10">
            <Helmet>
                <title>Car || Car-Details</title>
            </Helmet>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={service_image}
                        className="p-2 rounded-4xl"
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <p>{service_location}</p>

                    <div className="divider"></div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-md mx-auto">
                        <div className="flex flex-col space-y-3">
                            <p><strong>Price:</strong> {service_price}</p>
                            <p><strong>Rating:</strong> {rating}</p>
                        </div>

                        <div className="flex flex-col space-y-3">

                            <p><strong>Provider:</strong> {provider_name}</p>
                        </div>
                    </div>
                    <div>
                        <p><strong>Description:</strong> {service_description}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={submitCarBooked} className="btn btn-primary bg-amber-50 text-blue-700 btn  hover:bg-blue-700 hover:text-white transition-colors duration-300 rounded-xl">Booking</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarDetails;