import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const AddCars = () => {
    const handleAddCar = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const location = form.location.value;
        const price = form.price.value;
        const provider = form.provider.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newCar = { photo, name, location, price, provider, rating, description };
        console.log(newCar);

        //send data to the server
        fetch('https://ctg-market-sharing-web-server.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log('hello', data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'car added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }

            })
    }

    return (
        <div>
            <Helmet>
                <title>Dashboard || Add a car service</title>
            </Helmet>
            <div className="p-10 text-center">
                <h2 className="text-2xl text-blue-700 font-bold">Add service a new car</h2>
                {/* Add your form here later */}


                <form onSubmit={handleAddCar} className="pt-10">
                    {/* Movie poster row */}
                    <div className="md:flex justify-center gap-20">
                        <div className="w-full">
                            <label className="fieldset-label">Service image</label>
                            <input name="photo" type="text" className="input w-full" placeholder="Service image" />
                        </div>

                    </div>

                    {/* Title and Genre row */}
                    <div className="md:flex justify-center gap-20">
                        <div className="md:w-1/2">
                            <label className="fieldset-label">Service name</label>
                            <input name="name" type="text" className="input w-full" placeholder="Service name" />
                        </div>
                        <div className="md:w-1/2">
                            <label className="fieldset-label">service_location</label>
                            <input name="location" type="text" className="input w-full" placeholder="service_location" />
                        </div>

                    </div>

                    {/* Duration and Release Year row */}
                    <div className="md:flex justify-center gap-20">
                        <div className="md:w-1/2">
                            <label className="fieldset-label">service_price</label>
                            <input name="price" type="text" className="input w-full" placeholder="service_price" />
                        </div>
                        <div className="md:w-1/2">
                            <label className="fieldset-label">provider</label>
                            <input name="provider" type="text" className="input w-full" placeholder="provider" />
                        </div>
                    </div>

                    {/* rating row*/}
                    <div className="md:flex justify-center gap-20">
                        <div className="md:w-1/2">
                            <label className="fieldset-label">Rating</label>
                            <input name="rating" type="text" className="input w-full" placeholder="Rating" />
                        </div>
                        <div className="md:w-1/2">
                            <label className="fieldset-label">Description</label>
                            <textarea name="description" id="" cols="2" rows="2" className="w-full border-2 border-amber-50 pl-2"></textarea>
                        </div>
                    </div>

                    <input type="submit" value="Add Car" className="btn btn-block" />

                </form>
            </div>
        </div>



    );
};

export default AddCars;