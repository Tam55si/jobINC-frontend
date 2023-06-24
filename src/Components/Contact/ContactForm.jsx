// import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
// import { BsHouseDoor } from 'react-icons/bs';
// import { CiLocationOn } from 'react-icons/ci';

function ContactForm() {
  return (
    // <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
    // <div className='text-[#808080] font-semibold'>
    //   <h1>Enter your details and we will get back to you :-</h1>
    // </div>
    //   <form action="">
    //     <div className="firstDiv flex justify-center items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
    //     <div className="flex gap-2 items-center">
    //       <AiOutlineSearch className='text-[25px] icon'/>
    //       <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here...'/>
    //       <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
    //     </div>

    //     {/* <div className="flex gap-2 items-center">
    //       <BsHouseDoor className='text-[25px] icon'/>
    //       <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Company...'/>
    //       <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
    //     </div> */}

    //     {/* <div className="flex gap-2 items-center">
    //       <CiLocationOn className='text-[25px] icon'/>
    //       <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Location...'/>
    //       <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
    //     </div> */}


    //     {/* <button className='bg-blue-300 h-full p-5 px-10 rounded-[10px] text-slate-600 cursor-pointer hover:bg-blueColor hover:text-textColor'>Search</button> */}


    //     </div>
    //   </form>
    //   <form action="">
    //     <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
    //     <div className="flex gap-2 items-center">
    //       <AiOutlineSearch className='text-[25px] icon'/>
    //       <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here...'/>
    //       <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
    //     </div>
    //     </div>
    //   </form>
    //   <form action="">
    //     <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
    //     <div className="flex gap-2 items-center">
    //       <AiOutlineSearch className='text-[25px] icon'/>
    //       <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here...'/>
    //       <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
    //     </div>
    //     </div>
    //   </form>
    //   <button className='bg-blue-300 h-full p-5 px-10 rounded-[10px] text-slate-600 cursor-pointer hover:bg-blueColor hover:text-textColor'>Search</button>
    // </div>
    <div className="p-[5rem] mb-4  rounded-[10px] gap-8  m-auto">
      <h1 className='text-center text-gray-400 p-4 text-2xl'>Contact Us</h1>
      <div
        name="contact"
        className="w-full h-screen bg-[#C7D2FE] rounded-[10px] p-[3rem]">

        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8 text-center">
            {/* <p className="text-4xl font-bold inline border-b-4 py-2 border-yellow-500">
              Contact me
            </p> */}
            <p className="py-6">Submit the form below to get in touch with us</p>
          </div>

          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-[#C4B5FD] border-2 rounded-md focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let us talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
