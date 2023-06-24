import React from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

function Search() {
    return (



        <div className='antialiased'>
            <div className='bg-[#1E293B] p-7 mb-4 mt-24 rounded-xl shadow-lg'>
                <div>

                    <form className="flex items-center">
                        {/* <label for="simple-search" className="sr-only">Search</label> */}
                        <div className=" w-full ">

                            {/* <div className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div> */}
                            <input type="text" id="simple-search" className="bg-gray-50 sm:h-20 h-14 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder:tracking-widest
                             " placeholder="🔎 Search Job, Company, Location Here..." required />
                        </div>
                        <button type="submit" className="sm:p-7 p-4 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                    <div className='pt-6 pb-4 text-center flex-row-4'>
                        <label htmlFor='level' className='text-[#808080] font-semibold  py-4 m-4'>Level:</label>
                        <select name='level' id='level' className='bg-white rounded-[3px] m-1 mb-2 p-1'>
                            <option value="">Fresher</option>
                            <option value="">Intermediate</option>
                            <option value="">Senior</option>
                            <option value="">Advanced</option>
                        </select>

                        <label htmlFor='type' className='text-[#808080] font-semibold  py-4 m-4'>Type:</label>
                        <select name='type' id='type' className='bg-white rounded-[3px]  m-1 mb-2 p-1'>
                            <option value="">Full - Time</option>
                            <option value="">Part - Time</option>
                            <option value="">Contractual</option>

                        </select>

                        <label htmlFor='sort' className='text-[#808080] font-semibold  py-4 m-4'>Sort-by:</label>
                        <select name='sort' id='sort' className='bg-white rounded-[3px]  m-1 mb-2 p-1'>
                            <option value="">Work From Office</option>
                            <option value="">Hybrid</option>
                            <option value="">Work From Home</option>

                        </select>

                        <span className='text-[#a1a1a1] hover:text-blueColor cursor-pointer py-4 m-4'> Clear-All </span>
                    </div>

                </div>
            </div>
        </div>





    )
}

export default Search
