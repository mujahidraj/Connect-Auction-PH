import React from 'react';
import { IoNotifications } from "react-icons/io5";
import userIcon from "../../assets/3.jpg";


const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm fixed z-50 opacity-70 top-0 left-0 right-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Auctions</a>
                                <ul className="p-2">
                                    <li><a>Parmanent</a></li>
                                    <li><a>Temporary</a></li>
                                </ul>
                            </li>
                            <li><a>Categories</a></li>
                            <li><a>How to Works</a></li>
                        </ul>
                    </div>
                    <a className="hover:text-2xl duration-300 btn-ghost text-xl text-blue-500">Connect <span className='text-amber-300 font-bold'>Auction</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 text-lg font-semibold">
                            <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Auction</summary>
                                <ul className="p-2">
                                    <li><a>Temporary</a></li>
                                    <li><a>Parmanent</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Categories</a></li>
                        <li><a>How to Works</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <a className="btn"><IoNotifications  size={23}/></a>
                <img className={`w-12 h-12 rounded-full object-cover  hover:w-20  duration-300`} src={userIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;