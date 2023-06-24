import { BiTimeFive } from 'react-icons/bi';
import React from 'react';
import { MdWorkOutline, MdOutlineLocationOn } from "react-icons/md";
import bmw from '../../assets/bmw.png';
import shell from '../../assets/shell.png';
import acc from '../../assets/acc.png';
import tesla from '../../assets/tesla.png';
import g from '../../assets/g.png';
import a from '../../assets/apple.png';
import { Link } from 'react-router-dom';


const Data = [
  {
    id: 1,
    image: bmw,
    title: 'Front-end Developer',
    time: 'Now',
    location: 'Bangalore, India',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aperiam nisi voluptate commodi dolores. Culpa laborum dolores reiciendis. Vel sint tenetur cumque eveniet impedit perferendis atque architecto error eaque illo!',
    company: 'BMW Ltd, India',
    level: 'Fresher',
    type: 'Full-Time',
    work: 'Hybrid'
  },
  {
    id: 2,
    image: shell,
    title: 'Full Stack Developer',
    time: 'Now',
    location: 'Hyderabad, India',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aperiam nisi voluptate commodi dolores. Culpa laborum dolores reiciendis. Vel sint tenetur cumque eveniet impedit perferendis atque architecto error eaque illo!',
    company: 'Shell Ltd, India',
    level: 'Fresher',
    type: 'Full-Time',
    work: 'Hybrid'
  },
  {
    id: 3,
    image: acc,
    title: 'Full Stack Developer',
    time: 'Now',
    location: 'Kolkata, India',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aperiam nisi voluptate commodi dolores. Culpa laborum dolores reiciendis. Vel sint tenetur cumque eveniet impedit perferendis atque architecto error eaque illo!',
    company: 'Accenture, India',
    level: 'Intermediate',
    type: 'Full-Time',
    work: 'Hybrid'
  },
  {
    id: 4,
    image: tesla,
    title: 'Full Stack Developer',
    time: 'Now',
    location: 'Chennai, India',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aperiam nisi voluptate commodi dolores. Culpa laborum dolores reiciendis. Vel sint tenetur cumque eveniet impedit perferendis atque architecto error eaque illo!',
    company: 'Tesla Ltd, India',
    level: 'Fresher',
    type: 'Full-Time',
    work: 'WFO'
  },
  {
    id: 5,
    image: g,
    title: 'Back-end Developer',
    time: 'Now',
    location: 'Hyderabad, India',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aperiam nisi voluptate commodi dolores. Culpa laborum dolores reiciendis. Vel sint tenetur cumque eveniet impedit perferendis atque architecto error eaque illo!',
    company: 'Google, India',
    level: 'Senior',
    type: 'Full-Time',
    work: 'WFH'
  },
  {
    id: 6,
    image: a,
    title: 'Full-Stack Developer',
    time: 'Now',
    location: 'Chennai, India',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aperiam nisi voluptate commodi dolores. Culpa laborum dolores reiciendis. Vel sint tenetur cumque eveniet impedit perferendis atque architecto error eaque illo!',
    company: 'Apple, India',
    level: 'Advanced',
    type: 'Full-Time',
    work: 'Hybrid'
  },
]



function Jobs() {

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({ id, image, title, time, location, desc, company, level, type, work }) => {
            return (
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-300 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor">{title}</h1>
                  <span className='flex items-center text-[#48466e] gap-1 group-hover:text-blueColor'><BiTimeFive />{time}</span>
                </span>
                <h6 className=' text-blueColor group-hover:text-slate-800 font-semibold'>{level}</h6>
                <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white py-2'>{desc}</p>
                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold  text-textColor hover:bg-[#987ffc] group-hover:text-white bg-[#C4B5FD]' ><Link to={{ pathname: "/jobdescription", props: { id: id, image: image, title: title, time: time, location: location, desc: desc, company: company, level: level, type: type, work: work } }}>Know More</Link></button>

                <p className='text-[15px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black text-[#48466e] flex items-center gap-x-1 py-2'><MdOutlineLocationOn />{location}</p>
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[13px] font-semibold text-textColor">{type}</h1>
                  <span className='flex items-center text-[#48466e] gap-1 group-hover:text-blueColor'><MdWorkOutline />{work}</span>
                </span>
                {/* <p className='text-[13px] text-[#95959]  group-hover:text-white '>, </p> */}
                <div className='company flex items-center gap-2'>
                  <img src={image} alt='Company Logo' className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block'>{company}</span>

                </div>


                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold  text-textColor hover:bg-blueColor group-hover:text-white bg-yellow-200'>Apply Now</button>
              </div>
            )
          })
        }
      </div>

      {/* <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-300 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
        <span className="flex justify-between items-center gap-4">
          <h1 className="tex-[16px] font-semibold text-textColor group-hover:text-black">Developer</h1>
          <span className='flex items-center text-blue-300 gap-1 group-hover:text-blueColor'><BiTimeFive />Now</span>
        </span>
        <h6 className='text-[#ccc] group-hover:text-slate-800'>Canada</h6>
        <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aperiam nisi voluptate commodi dolores. Culpa laborum dolores reiciendis. Vel sint tenetur cumque eveniet impedit perferendis atque architecto error eaque illo!</p>
        <div className='company flex items-center gap-2'>
          <img src={bmw} alt='Company Logo' className='w-[10%]' />
          <span className='text-[14px] py-[1rem] block'>Company Name</span>
        </div>
        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold  text-textColor hover:bg-blueColor group-hover:text-white'>Apply Now</button>
        </div> */}

    </div>
  )
}

export default Jobs;
