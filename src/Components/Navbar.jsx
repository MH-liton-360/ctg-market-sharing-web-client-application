import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/ctg-logo.jpg'
import userLogo from "../assets/white-profile-icon-png-7.png"
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <div className="navbar-center hidden lg:flex justify-center items-center">
            <ul className="menu menu-horizontal px-1 flex gap-4 items-center">
                <li><NavLink to="/">Home</NavLink></li>

                <li tabIndex={0} className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn btn-ghost m-1">Services</label>
                    <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 left-1/2 -translate-x-1/2">
                        <li><NavLink to="/services/all-service">Our All Service</NavLink></li>
                    </ul>
                </li>
                {user?.email && (
                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn btn-ghost m-1">Dashboard</label>
                        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 left-1/2 -translate-x-1/2">
                            <li><NavLink to="/dashboard/add-service">Add Service</NavLink></li>
                            <li><NavLink to="/dashboard/manage-service">Manage Services</NavLink></li>
                            <li><NavLink to="/dashboard/booked-service">Booked Services</NavLink></li>
                            <li><NavLink to="/dashboard/service-todo">Service To-Do</NavLink></li>
                        </ul>
                    </li>
                )}
            </ul>
        </div>

    </>

    return (
        <div className="navbar py-5 bg-[#F3F3F3] border-b border-b-amber-400">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='h-[50px] rounded-2xl' src={logo} alt="" />
                <p className='text-center'><strong className='text-cyan-900 px-1'>mar<strong className='text-amber-500'>k</strong>et</strong></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-1">

                {
                    user && user?.email ? <div>
                        <img className='w-12 h-11 rounded-2xl' src={user.photoURL} alt="" />
                        {/* <p>{user.displayName}</p> */}
                    </div>
                        :
                        <img className='h-[50px]' src={userLogo} alt="" />
                }

                {
                    user && user?.email ? <button onClick={logOut} className='btn btn-neutral'>Logout</button> : <Link to="/auth/login" className='btn btn-neutral'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;