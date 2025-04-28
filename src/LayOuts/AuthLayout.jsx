import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <div className="max-w-7xl mx-auto">
                <header>
                    <Navbar></Navbar>
                </header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;