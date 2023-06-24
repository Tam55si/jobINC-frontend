import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Navbar3() {
    let [open, setOpen] = useState(false);
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.clear();
        // alert("Logged out Successfully")
        // navigate("/");
        toast.success(`Logged out Successfully`);
        navigate("/");
    };


    return (
        <>

            <div className='shadow-md w-full fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-[#0a1121] py-6 md:px-10 px-7'>
                    <div className=' text-2xl cursor-pointer flex items-center font-[Poppins]   text-gray-800'>
                        <div className="logo text-[25px] text-blueColor">
                            <NavLink to='/'><strong>job</strong><em className='font-thin'>INC.</em></NavLink>
                        </div>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#0a1121] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in font-[Poppins] text-slate-400 font-semibold ${open ? 'top-20 ' : 'top-[-490px]'}`}>



                        <li className="menuList txt-[#6f6f6f] text-slate-400 md:ml-8 text-l md:my-0 my-7 hover:text-blueColor"><NavLink to="/">Jobs</NavLink></li>
                        <li className="menuList txt-[#6f6f6f] text-slate-400 md:ml-8 text-l md:my-0 my-7 hover:text-blueColor"><NavLink to="/about">About</NavLink></li>
                        <li className="menuList txt-[#6f6f6f] text-slate-400 md:ml-8 text-l md:my-0 my-7 hover:text-blueColor"><NavLink to="/blogs">Blogs</NavLink></li>
                        {/* <li className="menuList txt-[#6f6f6f] text-slate-400 md:ml-8 text-l md:my-0 my-7 hover:text-blueColor">
                            {!cookies.access_token ? (
                                <NavLink to="/login">Login/Register</NavLink>
                            ) : (
                                <button onClick={logout}>Logout</button>
                            )}
                        </li> */}
                        <li className="menuList txt-[#6f6f6f] text-slate-400 hover:text-blueColor md:ml-8 text-l md:my-0 my-7">
                            {!cookies.access_token ? (
                                <NavLink to="/login">Login/Register</NavLink>
                            ) : (

                                <NavLink to="/profile">Profile </NavLink>
                            )}

                        </li>
                        <li className="menuList txt-[#6f6f6f] text-slate-400 hover:text-blueColor md:ml-8 text-l md:my-0 my-7">
                            {!cookies.access_token ? (

                                <NavLink to="/login">Employeers</NavLink>
                            ) : (
                                <>
                                    <NavLink to="/admin">Admin</NavLink>
                                </>
                            )}
                        </li>

                    </ul>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>

        </>
    )
}

export default Navbar3
