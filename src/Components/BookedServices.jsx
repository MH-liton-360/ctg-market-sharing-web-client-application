import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const BookedServices = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("https://ctg-market-sharing-web-server.vercel.app/bookings")
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(error => console.error("Failed to fetch bookings:", error));
    }, []);


    const deleteBooking = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://ctg-market-sharing-web-server.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your car has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(Booking => Booking._id !== id)
                            setBookings(remaining);
                        }
                    })
            }
        });
    };

    return (
        <div className="text-center m-20">
            <Helmet>
                <title>Dashboard || Booking service</title>
            </Helmet>
            <h2 className="text-2xl my-20 text-blue-700 font-bold">Booking Service</h2>
            {bookings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookings.map((car, idx) => (
                        <div key={idx} className="card bg-base-100 shadow-md p-4">
                            <img src={car.service_image} alt={car.service_name} />
                            <h3 className="text-xl font-semibold">{car.service_name}</h3>
                            <p>{car.service_location}</p>
                            <p><strong>Provider:</strong> {car.provider_name}</p>
                            <p><strong>Price:</strong> {car.service_price}</p>
                            <p><strong>Description:</strong> {car.service_description}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => deleteBooking(car._id)} className="btn btn-primary bg-amber-50 text-blue-700 btn  hover:bg-blue-700 hover:text-white transition-colors duration-300 rounded-xl">Delete</button>
                            </div>
                        </div>

                    ))}
                </div>
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
    );
};

export default BookedServices;
