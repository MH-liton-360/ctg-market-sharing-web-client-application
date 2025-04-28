import Swal from 'sweetalert2'

const AddMovies = () => {
    const handleAddMovie = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const year = form.year.value;
        const rating = form.rating.value;
        const summary = form.summary.value;

        const newMovie = { photo, name, genre, duration, year, rating, summary };
        console.log(newMovie);

        //send data to the server
        fetch('https://movie-portal-server-bay-seven.vercel.app/movie', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                console.log('hello', data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }

            })

    }
    return (
        <div className="p-10 text-center">
            <h2 className="text-2xl text-blue-700 font-bold">Add a New Movie</h2>
            {/* Add your form here later */}


            <form onSubmit={handleAddMovie} className="pt-10">
                {/* Movie poster row */}
                <div className="md:flex justify-center gap-20">
                    <div className="w-full">
                        <label className="fieldset-label">Movie Poster</label>
                        <input name="photo" type="text" className="input w-full" placeholder="Movie Poster" />
                    </div>

                </div>

                {/* Title and Genre row */}
                <div className="md:flex justify-center gap-20">
                    <div className="md:w-1/2">
                        <label className="fieldset-label">Movie Title</label>
                        <input name="name" type="text" className="input w-full" placeholder="Movie Title" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="fieldset-label">Genre</label>
                        <input name="genre" type="text" className="input w-full" placeholder="Genre" />
                    </div>

                </div>

                {/* Duration and Release Year row */}
                <div className="md:flex justify-center gap-20">
                    <div className="md:w-1/2">
                        <label className="fieldset-label">Duration</label>
                        <input name="duration" type="text" className="input w-full" placeholder="Duration" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="fieldset-label">Release Year</label>
                        <input name="year" type="text" className="input w-full" placeholder="Release Year" />
                    </div>
                </div>

                {/* rating row*/}
                <div className="md:flex justify-center gap-20">
                    <div className="md:w-1/2">
                        <label className="fieldset-label">Rating</label>
                        <input name="rating" type="text" className="input w-full" placeholder="Rating" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="fieldset-label">Summary</label>
                        <textarea name="summary" id="" cols="2" rows="2" className="w-full border-2 border-amber-50 pl-2"></textarea>
                    </div>
                </div>

                <input type="submit" value="Add Movie" className="btn btn-block" />

            </form>
        </div>



    );
};

export default AddMovies;