// import React, { useState } from 'react';
// import axios from 'axios';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import r from '../../assets/registerbg.jpg';
// import reg from '../../assets/registerbg.jpg';


// // const Login = () => {
// //     const [username, setUsername] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [_, setCookies] = useCookies(["access_token"]);
// //     const navigate = useNavigate();
// //     const onSubmit = async (event) => {
// //         event.preventDefault();
// //         try {
// //             const response = await axios.post("http://localhost:3002/auth/login", { username, password });
// //             alert("Registration Completed! Now Login.");
// //             setCookies("access_token", response.data.token);
// //             window.localStorage.setItem("userID", response.data.userID);
// //             navigate("/");
// //             console.log(response);
// //         } catch (err) {
// //             console.error(err);
// //         }
// //     }
// //     return (
// //         <Form username={username} setUsername={setUsername} password={password} setPassword={setPassword} label="Login" onSubmit={onSubmit} />
// //     );
// // };
// function Register() {
//     const [firstname, setFirstname] = useState("");
//     const [lastname, setLastname] = useState("");
//     const [emailid, setEmailid] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     // const handleAlertSuccess = () => {
//     //     toast("Registration Completed! Now Login.");
//     // }
//     // const handleAlertSFail = () => {
//     //     toast("User already Registered");
//     // }
//     const onSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             await axios.post("http://localhost:3002/auth/register", { firstname, lastname, emailid, username, password });
//             alert("Registration Completed! Now Login.")
//             navigate("/");
//         } catch (err) {
//             console.error(err);
//         }
//     };
//     // return (
//     //     <Form firstname={firstname} setFirstname={setFirstname} lastname={lastname} setLastname={setLastname} emailid={emailid} setEmailid={setEmailid} username={username} setUsername={setUsername} password={password} setPassword={setPassword} label="Register" onSubmit={onSubmit} registerbg={registerbg} />
//     // );
//     // };

//     // const Form = ({ firstname, setFirstname, lastname, setLastname, emailid, setEmailid, username, setUsername, password, setPassword, label, onSubmit, registerbg }) => {
//     return (
//         <div className="p-[5rem] mb-4  rounded-[10px] gap-8  m-auto">
//             <h1 className='text-center text-gray-400 p-4 text-2xl'>Please Register here</h1>
//             <div className='grid grid-cols-2 bg-[#C7D2FE] rounded-[10px] p-[2rem] mb-2'>

//                 <div className=' items-center justify-center'>

//                     <img src={reg} className='p-[1.25rem]' alt='' />
//                 </div>
//                 <form onSubmit={onSubmit} className='grid gap-4'>
//                     <div className='grid grid-cols-2'>
//                         <h2 className=''>Registration Form</h2>
//                         <h3>All the fields are important</h3>
//                     </div>

//                     <div className='grid grid-cols-2'>
//                         <label htmlFor='firstname'>First Name: </label>
//                         <input type='text' value={firstname} id='firstname' onChange={(e) => setFirstname(e.target.value)} className='bg-[#C4B5FD] px-1' />
//                     </div>
//                     <div className='grid grid-cols-2'>
//                         <label htmlFor='lastname'>Last Name: </label>
//                         <input type='text' value={lastname} id='lastname' onChange={(e) => setLastname(e.target.value)} className='bg-[#C4B5FD] px-4' />
//                     </div>
//                     <div className='grid grid-cols-2'>
//                         <label htmlFor='emailid'>Email Id: </label>
//                         <input type='email' value={emailid} id='emailid' onChange={(e) => setEmailid(e.target.value)} className='bg-[#C4B5FD] px-4' />
//                     </div>
//                     <div className='grid grid-cols-2'>
//                         <label htmlFor='username'>User Name: </label>
//                         <input type='text' value={username} id='username' onChange={(e) => setUsername(e.target.value)} className='bg-[#C4B5FD] px-4' />
//                     </div>
//                     <div className='grid grid-cols-2'>
//                         <label htmlFor='password'>Password: </label>
//                         <input type='password' value={password} id='password' onChange={(e) => setPassword(e.target.value)} className='bg-[#C4B5FD] px-4' />
//                     </div>
//                     <button type='submit' className='bg-white'>Register</button>

//                 </form>
//                 {/* <ToastContainer
//                 position="top-center"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
//             /> */}
//             </div>

//         </div>
//     )

// };


// export default Register;

import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate, Link } from 'react-router-dom';
// import reg from '../../assets/registerbg.jpg';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import registerpic from '../../assets/Welcome_Back-removebg-preview.png';

function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [emailid, setEmailid] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accounttype, setAccountType] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("https://jobinc-backend.onrender.com/auth/register", { firstname, lastname, emailid, username, password, accounttype });
            toast.success("Registration Completed! Now Login.");
            // alert("Registration Completed! Now Login.");
            navigate("/login");
        } catch (err) {
            alert("Please enter details");
            console.error(err);
        }
    };
    return (
        // <div className="p-[5rem] mb-4  rounded-[10px] gap-8  m-auto">
        //     <h1 className='text-center text-gray-400 p-4 text-2xl'>Please Register here</h1>
        //     <div className='grid grid-cols-2 bg-[#C7D2FE] rounded-[10px] p-[2rem] mb-2'>

        //         <div className=' items-center justify-center'>

        //             <img src={reg} className='p-[1.25rem]' alt='' />
        //         </div>
        //         <form onSubmit={onSubmit} className='grid gap-4'>
        //             <div className='grid grid-cols-2'>
        //                 <h2 className=''>Registration Form</h2>
        //                 <h3>All the fields are important</h3>
        //             </div>

        //             <div className='grid grid-cols-2'>
        //                 <label htmlFor='firstname'>First Name: </label>
        //                 <input type='text' value={firstname} id='firstname' onChange={(e) => setFirstname(e.target.value)} className='bg-[#C4B5FD] px-1' />
        //             </div>
        //             <div className='grid grid-cols-2'>
        //                 <label htmlFor='lastname'>Last Name: </label>
        //                 <input type='text' value={lastname} id='lastname' onChange={(e) => setLastname(e.target.value)} className='bg-[#C4B5FD] px-4' />
        //             </div>
        //             <div className='grid grid-cols-2'>
        //                 <label htmlFor='emailid'>Email Id: </label>
        //                 <input type='email' value={emailid} id='emailid' onChange={(e) => setEmailid(e.target.value)} className='bg-[#C4B5FD] px-4' />
        //             </div>
        //             <div className='grid grid-cols-2'>
        //                 <label htmlFor='username'>User Name: </label>
        //                 <input type='text' value={username} id='username' onChange={(e) => setUsername(e.target.value)} className='bg-[#C4B5FD] px-4' />
        //             </div>
        //             <div className='grid grid-cols-2'>
        //                 <label htmlFor='password'>Password: </label>
        //                 <input type='password' value={password} id='password' onChange={(e) => setPassword(e.target.value)} className='bg-[#C4B5FD] px-4' />
        //             </div>
        //             <button type='submit' className='hover:bg-blueColor hover:text-white cursor-pointer bg-blue-400 rounded-lg'>Register</button>

        //         </form>

        //     </div>

        // </div>



        // <div className='min-h-screen py-40'>
        //     <div className='container mx-auto'>
        //         <div className='flex w-8/12 bg-[#C7D2FE] rounded-xl mx-auto shadow-lg overflow-hidden'>
        //             <div className='w-2/5 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center' >
        //                 <h1 className='text-3xl'>Welcome</h1>
        //                 <img src={registerpic} className='h-[50%]' alt='' />

        //                 <div>
        //                     <p className=''>Fill up personal information and start journey with us.</p>
        //                 </div>
        //             </div>
        //             <div className='w-3/5 py-16 px-12 bg-[#C4B5FD]'>
        //                 <h2 className='text-3xl mb-4'>Sign up</h2>
        //                 <p className='mb-4'>Create your account. It's free and only takes a minute.</p>
        //                 <form onSubmit={onSubmit}>
        //                     <div className='grid grid-cols-2 gap-5'>
        //                         <input type='text' placeholder='Firstname' className='border border-gray-400 py-1 px-2' value={firstname} id='firstname' onChange={(e) => setFirstname(e.target.value)} />
        //                         <input type='text' placeholder='Lastname' className='border border-gray-400 py-1 px-2' value={lastname} id='lastname' onChange={(e) => setLastname(e.target.value)} />
        //                     </div>
        //                     <div className='mt-5'>
        //                         <input type='email' placeholder='Email' className='border border-gray-400 py-1 px-2 w-full' value={emailid} id='emailid' onChange={(e) => setEmailid(e.target.value)} />
        //                     </div>
        //                     <div className='mt-5'>
        //                         <input type='text' placeholder='User Name' className='border border-gray-400 py-1 px-2 w-full' value={username} id='username' onChange={(e) => setUsername(e.target.value)} />
        //                     </div>
        //                     <div className='mt-5'>
        //                         <input type='password' placeholder='Password' className='border border-gray-400 py-1 px-2 w-full' value={password} id='password' onChange={(e) => setPassword(e.target.value)} />
        //                     </div>
        //                     <div className='mt-5'>
        //                         <input type='checkbox' className='border border-gray-400' />
        //                         <span> I accept the <a href="/" className='text-blue-500 font-semibold'>Terms of Use </a>and <a href="/" className='text-blue-500 font-semibold'>Privacy Policy</a></span>
        //                     </div>
        //                     <div className='mt-5'>
        //                         <button className='w-full bg-blue-500 py-3 text-center text-white hover:text-blue-500 hover:bg-white'>Register Now</button>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className=' mt-24' >
            <div className='antialiased'>
                <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className='bg-[#C7D2FE] flex flex-col space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white md:flex-row md:space-x-6 md:space-y-0 mb-14'>
                        <div className='flex flex-col justify-between space-y-8'>

                            <div>
                                <h1 className='font-bold text-4xl tracking-wide text-center text-black'>Welcome</h1>
                                <p className='tracking-wide text-center text-black p-4 text-2xl'>Create your account. It's free and only takes a minute.</p>
                                <img src={registerpic} alt='registerpic' className='lg:w-[80%] md:p-4' />

                            </div>

                        </div>
                        <div className='py-9'>
                            <div className='bg-[#C4B5FD] rounded-xl shadow-lg p-8 text-gray-600 md:w-[80] mb-4'>
                                <h1 className='text-xl py-3 text-black'>Fill up personal information and start journey with us.</h1>
                                <form onSubmit={onSubmit} className='flex flex-col space-y-4'>


                                    <div>

                                        <input type='text' placeholder='Enter First Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' value={firstname} id='firstname' onChange={(e) => setFirstname(e.target.value)} />
                                    </div>
                                    <div>

                                        <input type='text' placeholder='Enter Last Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' value={lastname} id='lastname' onChange={(e) => setLastname(e.target.value)} />
                                    </div>
                                    <div>

                                        <input type='email' placeholder='Enter Email ID' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' value={emailid} id='emailid' onChange={(e) => setEmailid(e.target.value)} />
                                    </div>
                                    <div>


                                        <input type='text' placeholder='Enter User ID' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' value={username} id='username' onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div>


                                        <input type='password' placeholder='Enter Password' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' value={password} id='password' onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div>
                                        <label for="accounttype">Choose account type:</label>
                                        <select name="accounttype" id="accounttype" value={accounttype} onChange={(e) => setAccountType(e.target.value)} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'>
                                            <option value=""></option>
                                            <option value="Employee">Employee</option>
                                            <option value="Employeer">Employeer</option>

                                        </select>
                                    </div>

                                    <div>
                                        <input type='checkbox' className='border border-gray-400' />
                                        <span> I accept the <a href="/" className='text-blue-500 font-semibold'>Terms of Use </a>and <a href="/" className='text-blue-500 font-semibold'>Privacy Policy</a></span>
                                    </div>

                                    <button className='inline-block self-center bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Register</button>
                                    <div>
                                        <span className=''> Already have an account? Click here to <Link to="/login" className='text-blue-500 font-semibold'>Login</Link></span>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};


export default Register;