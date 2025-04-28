import { useLoaderData } from "react-router-dom";
import AddMovieCard from "./addMovieCard";
import { useState } from "react";

const MyFavorites = () => {

    const loadedMovies = useLoaderData();
    const [movies, setMovies] = useState(Array.isArray(loadedMovies) ? loadedMovies : []);


    return (
        <div className="text-center m-20">
            <h2 className="text-2xl my-20 text-blue-700 font-bold">My Favorites</h2>

            <div className="grid md:grid-cols-2 gap-4">

                {Array.isArray(movies) && movies.map(movie => (
                    <AddMovieCard
                        key={movie._id}
                        movie={movie}
                        movies={movies}
                        setMovies={setMovies}
                    />
                ))}

            </div>
        </div>
    );
};

export default MyFavorites;