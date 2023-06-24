// import React, { useEffect, useState } from "react";
// import { useGetUserID } from "../hooks/useGetUserID";
// import axios from "axios";

// function Appliedjobs() {
//     const [apliedJobes, setAppliedJobes] = useState([]);
//     const userID = useGetUserID();

//     useEffect(() => {

//         const fetchSavedJob = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3002/jobpost/appliedjobs/ids/${userID}`,
//                     { userID }
//                 );
//                 setAppliedJobes(response.data);
//                 console.log(response.data);
//             } catch (err) {
//                 console.log(err);
//             }
//         };


//         fetchSavedJob();
//     }, [])

//     console.log(apliedJobes)
//     return (
//         <div className="mt-[8rem] mb-[12rem] text-white text-center">
//             <h1>Applied Jobs :</h1>
//             <ul>
               


//                 <li >
//                     {apliedJobes[1]}
                    
//                 </li>

//             </ul>
//         </div>
//     );
// };

// export default Appliedjobs
