
import { FaTwitterSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] lg:gap-8 grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>job</strong>INC.
          </h1>
        </div>
        <p className="text-white pb-[13px]  leading-7 ">
          We always make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>


      <div className="grid">
        <span className="divTitle text-[18px] font-semibold md:pb-[1.25rem] pb-0 text-white">Company</span>
        <div className="grid md:gap-3 sm:gap-0 md:pb-[0.75rem] pb-0">
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/about'>About Us</Link></li>
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/blogs'>Features</Link></li>
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/blogs'>News</Link></li>
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/about'>FAQ</Link></li>
        </div>
      </div>
      {/* md:visible invisible */}
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold md:pb-[1.25rem] pb-0 text-white">Resources</span>
        <div className="grid md:gap-3 sm:gap-0 md:pb-[0.75rem] pb-0">
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/about'>Account</Link></li>
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/about'>Support Center</Link></li>
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/about'>Feedback</Link></li>
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/about'>Contact Us</Link></li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold md:pb-[1.25rem] pb-0 text-white">Support</span>
        <div className="grid md:gap-3 sm:gap-0 md:pb-[0.75rem] pb-0">
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/blogs'>Events</Link></li>
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/blogs'>Promo</Link></li>
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/blogs'>Req Demo</Link></li>
          <li className="text-white opacity-[.7] hover:opacity-[1]"><Link to='/'>Careers</Link></li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Contact Info</span>
        <div className="text-[14px] text-white">
          <small className='opacity-[.7] hover:opacity-[1]'>tanmoy.si20@gmail.com</small>
          <div className="icons flex gap-4 py-[1rem]">
            <a href='https://www.linkedin.com/in/tanmoy-si-1a2329b4/' target="_blank" rel="noreferrer"> <FaLinkedin className='opacity-[.7] hover:opacity-[1] icons h-[35px] w-[35px]' /></a>
            <a href='https://github.com/Tam55si' target="_blank" rel="noreferrer"><FaGithub className='opacity-[.7] hover:opacity-[1] icons h-[35px] w-[35px]' /></a>
            <a href='https://twitter.com/tanmoy_si' target="_blank" rel="noreferrer"><FaTwitterSquare className='opacity-[.7] hover:opacity-[1] icons h-[35px] w-[35px]' /></a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
