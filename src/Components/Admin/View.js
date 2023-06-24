import React from 'react';
import { Link } from "react-router-dom";

export default function View({ _id, title, company, postDate }) {
    return (
        <tr className="border-b border-neutral-500">
            <td className="whitespace-nowrap  px-6 py-4 font-medium">{title}</td>
            <td className="whitespace-nowrap  px-6 py-4">{company}</td>
            <td className="whitespace-nowrap  px-6 py-4">{postDate}</td>
            <td className="whitespace-nowrap  px-6 py-4">
                {/* <button className='px-4 bg-yellow-300 m-1 p-1' ><Link to={`/editjobs/${job._id}`}>Edit</Link></button>
                <button className='px-4 bg-red-400 m-1 p-1' onClick={() => { deleteHandler(job._id) }}>Delete</button> */}
                <button className='px-4 bg-green-400 m-1 p-1' ><Link to={`/jobdescription/${_id}`}>View</Link></button>
            </td>
        </tr>
    );
}


