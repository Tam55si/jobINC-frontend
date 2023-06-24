import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/FooterDiv/Footer';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blogs/Blogs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { Auth } from './Components/Login-register/Auth';
import Jobpost from './Components/Jobpost/Jobpost';
import Register from './Components/Login-register/Register';
import Appliedjobs from './Components/Appliedjobs/Appliedjobs';
import Jobpost2 from './Components/Jobpost/Jobpost2';
import Navbar2 from './Components/NavBar/Navbar2';
import Navbar3 from './Components/NavBar/Navbar3';
import JobDescription from './Components/JobDiv/JobDescription';
import Jobpost3 from './Components/Jobpost/Jobpost3';
import Admin from './Components/Admin/Admin';
import EditJobs from './Components/Admin/EditJobs';
import JobDash from './Components/Admin/JobDash';
import View from './Components/Admin/View';
import NotFound from './Components/Notfound/NotFound'
import AddBlogs from './Components/Blogs/AddBlogs';
import Profile from './Components/Profile/Profile';



function App() {


  return (
    <div className='w-[85%] m-auto bg-[rgb(8, 2, 37)]'>
      <Router>
        <Navbar3 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobdescription/:id' element={<JobDescription />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/addblog' element={<AddBlogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/jobpost' element={<Jobpost3 />} />
          <Route path='/jobsdash' element={<JobDash />} />
          <Route path='/editjobs/:id' element={<EditJobs />} exact />
          <Route path='/viewjobs' element={<View />} />
          {/* <Route path='/appliedjobs' element={<Appliedjobs />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  )
}

export default App;
