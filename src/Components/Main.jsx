import { useEffect, useState } from "react";
import Poster from "./poster";
const Main = () => {

    const [posters, setPosters] = useState([]);

    useEffect(() => {
        fetch('CarCleaningBlogs.json')
            .then((res) => res.json())
            .then((data) => setPosters(data));

    }, [])

    return (
        <div>
            <h2 className="text-3xl font-bold py-10">All Available Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    posters.map(poster => <Poster poster={poster} key={poster.id}></Poster>)
                }
            </div>

        </div>
    );
};

export default Main;