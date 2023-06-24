import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

function Searchbar() {
  return (
    <div className="searchDiv grid gap-10 bg-[#1E293B] rounded-[10px] p-[3rem] mt-24 text-slate-400 ">
      <form action="" className='w-[250px] md:w-full'>
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[0.625 rem] bg-white p-5 shadow-lg shadow-greyIsh-700 w-[230px] md:w-full">
          <div className="flex gap-0 md:gap-2 items-center">
            <AiOutlineSearch className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none md:w-[100%] w-[100px]' placeholder='Search Job Here...' />
            <AiOutlineCloseCircle className='text-[30px]  text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <div className="flex gap-0 md:gap-2 items-center md:visible invisible ">
            <BsHouseDoor className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none md:w-[100%] w-0' placeholder='Search by Company...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <div className="flex gap-0 md:gap-2 items-center md:visible invisible">
            <CiLocationOn className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none md:w-[100%] w-0' placeholder='Search by Location...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>


          <button className='bg-blue-300 h-full p-5 md:px-10 rounded-[10px] text-slate-600 cursor-pointer hover:bg-blueColor hover:text-textColor md:visible invisible'>Search</button>


        </div>
      </form>

      <div className='secDiv flex items-center gap-10 justify-center  text-slate-500'>
        {/* <div className='singleSearch flex items-center gap-2 hover:text-textColor'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by:</label>
          <select name='' id='relevance' className='rounded-[3px] px-4 py-1 bg-white'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div> */}

        <div className='singleSearch flex items-center gap-2 hover:text-textColor'>
          <label htmlFor='level' className='text-[#808080] font-semibold'>Level:</label>
          <select name='' id='level' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Fresher</option>
            <option value="">Intermediate</option>
            <option value="">Senior</option>
            <option value="">Advanced</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2 hover:text-textColor md:visible invisible'>
          <label htmlFor='type' className='text-[#808080] font-semibold'>Type:</label>
          <select name='' id='type' className=' rounded-[3px] px-4 py-1 bg-white'>
            <option value="">Full-Time</option>
            <option value="">Part-Time</option>
            <option value="">Contract</option>
          </select>
        </div>



        <div className='secDiv flex items-center gap-10 justify-center  text-slate-500 md:visible invisible'>
          <div className='singleSearch flex items-center gap-2 hover:text-textColor'>
            <label htmlFor='work' className='text-[#808080] font-semibold'>Sort by:</label>
            <select name='' id='work' className='bg-white rounded-[3px] px-4 py-1'>
              <option value="">Work From Office</option>
              <option value="">Hybrid</option>
              <option value="">Work From Home</option>
            </select>
          </div>


          <span className='text-[#a1a1a1] hover:text-blueColor cursor-pointer'>Clear All </span>

        </div>

      </div>

    </div>
  )
}

export default Searchbar;
