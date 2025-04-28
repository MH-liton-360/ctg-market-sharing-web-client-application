import Swal from "sweetalert2";

const AddMovieCard = ({ movie, movies, setMovies }) => {

    const { _id, photo, name, genre, duration, year, rating, summary } = movie;

    const handleDelete = _id => {
        console.log(_id);

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

                fetch(`https://movie-portal-server-bay-seven.vercel.app/movie/${_id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your movie has been deleted.",
                                icon: "success"
                            });
                            const remaining = movies.filter(mov => mov._id !== _id)
                            setMovies(remaining);
                        }
                    })
            }
        });

    }
    return (
        <div>
            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={photo}
                            className="h-[150px] p-4 rounded-3xl"
                            alt="Movie" />
                    </figure>
                    <div className="flex justify-between w-full p-4">
                        <div className="pl-12 pt-3">
                            <h2><strong>Name: </strong> {name}</h2>
                            <p><strong>Genre: </strong> {genre}</p>
                            <p><strong>Duration: </strong> {duration}</p>
                            <p><strong>Year: </strong> {year}</p>
                            <p><strong>Rating: </strong> {rating}</p>
                            <p><strong>Summary: </strong> {summary}</p>
                        </div>

                        <div className="card-actions justify-end">
                            <div className="join join-vertical space-y-3">
                                <button className="btn join-item btn-info rounded-lg">View</button>
                                <button className="btn join-item btn-warning rounded-lg">Edit</button>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn join-item btn-error rounded-lg">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMovieCard;