import { Link } from "react-router-dom";

const Car = ({ car }) => {
    const { id, service_image, service_name, service_location, service_price } = car;
    return (
        <div>
            <div className="card bg-amber-50 shadow-sm">
                <figure>
                    <img
                        src={service_image}
                        className="h-[280px] w-[380px] rounded-2xl"
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <p>{service_location}</p>

                    <div className="divider"></div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 ">
                        <div className="flex flex-col space-y-3">
                            <p><strong>Location:</strong> {service_location}</p>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <p><strong>Price:</strong> {service_price}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-amber-50 text-blue-700 btn  hover:bg-blue-700 hover:text-white transition-colors duration-300 rounded-xl"><Link to={`/car/${id}`}>Details</Link></button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Car;