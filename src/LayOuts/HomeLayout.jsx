import { Outlet, useLocation } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {

    const location = useLocation();
    return (
        <div className=" bg-[#F3F3F3]">
            <Helmet>
                <title>Ctg-market-sharing-web-application</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>

                {location.pathname === "/" && (
                    <>
                        <Banner />
                        <Main />
                    </>
                )}

                <Outlet></Outlet>

            </div>

            <div className="pt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;