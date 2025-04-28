import banner from "../assets/Nissan-gtr.webp"

const Banner = () => {
    return (
        <div>
            <img src={banner}
                className="rounded-3xl mt-5"
                alt="car-cleaning" />
        </div>

    );
};

export default Banner;