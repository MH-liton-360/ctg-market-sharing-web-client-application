import { useLoaderData, useParams } from "react-router-dom";

const PosterDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();


    const poster = data.find(poster => poster.id.toString() === id);

    const { movie_poster, movie_Title, genre, release_year, rating, duration, language, country, cast, summary } = poster;
    return (

        <section className="justify-items-center pt-10">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={movie_poster}
                        className="p-2 rounded-4xl"
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{movie_Title}</h2>
                    <p>{genre}</p>

                    <div className="divider"></div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-md mx-auto">
                        <div className="flex flex-col space-y-3">
                            <p><strong>Rating:</strong> {rating}</p>
                            <p><strong>Release_year:</strong> {release_year}</p>
                            <p><strong>language:</strong> {language}</p>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <p><strong>Duration:</strong> {duration}</p>
                            <p><strong>Country:</strong> {country}</p>
                            <p><strong>Cast:</strong> {cast}</p>
                        </div>
                    </div>
                    <div>
                        <p><strong>Summary:</strong> {summary}</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PosterDetails;