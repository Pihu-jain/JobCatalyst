import React, {  useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
// import { useToast } from '@chakra-ui/react';
import SignupForm from '../Login-Signup/SignupForm';
import LoginForm from '../Login-Signup/LoginForm';
import './Navbar.css';

function Navbar({ isAdmin, setIsAdmin }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalShowlogin, setModalShowlogin] = useState(false);
  const [modalShowSignup, setModalShowSignup] = useState(false);
  const isAuthenticated = localStorage.getItem('token') !== null;
  const user = JSON.parse(localStorage.getItem("user"));
  const admin = user ? user.isAdmin : false;
  // const toast = useToast();

  

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  
    
 
  return (
    <div className='bg-slate-800 w-screen'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex items-center justify-between gap-2 h-16 sm:justify-evenly md:justify-between'>
          <div className='flex items-center text-white font-serif text-xl'>
            JobCatalyst
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-white">
              <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300  px-3 py-2 rounded-md text-md'>
                <Link className='text-gray-200 w-full h-full hover:text-gray-800 hover:font-semibold' style={{ textDecoration: 'none' }} to="/">Home</Link>
              </div>
              {isAuthenticated && (
                <>
                  <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300 px-3 py-2 rounded-md text-md'>
                    <Link className='text-gray-200 w-full h-full hover:text-gray-800 hover:font-semibold' style={{ textDecoration: 'none' }} to="/community">Community</Link>
                  </div>
                  <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300 px-3 py-2 rounded-md text-md'>
                    <Link className='text-gray-200 w-full h-full hover:text-gray-800 hover:font-semibold' style={{ textDecoration: 'none' }} to="/jobs">Jobs</Link>
                  </div>
                  <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300 px-3 py-2 rounded-md text-md'>
                    <Link className='text-gray-200 w-full h-full hover:text-gray-800 hover:font-semibold' style={{ textDecoration: 'none' }} to="/salaries">Salaries</Link>
                  </div>
                  <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300 px-3 py-2 rounded-md text-md'>
                    <Link className='text-gray-200 w-full h-full hover:text-gray-800 hover:font-semibold' style={{ textDecoration: 'none' }} to="/experiences">Job Experiences</Link>
                  </div>
                  {admin && <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300 px-3 py-2 rounded-md text-md'>
                    <Link className='text-gray-200 w-full h-full hover:text-gray-800 hover:font-semibold' style={{ textDecoration: 'none' }} to="/people">Search people</Link>
                  </div>}
                  {admin && <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300 px-3 py-2 rounded-md text-md'>
                    <Link className='text-gray-200 w-full h-full hover:text-gray-800 hover:font-semibold' style={{ textDecoration: 'none' }} to="/job-basics">Post Job</Link>
                  </div>}
                  <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300 px-3 py-2 rounded-md text-md'>
                    <Link className='text-gray-200 w-full h-full hover:text-gray-800 hover:font-semibold' style={{ textDecoration: 'none' }} to="/chats">Connections</Link>
                  </div>
                  <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300 hover:text-green-700 px-3 py-2 rounded-md text-md'>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/profile">Profile</Link>
                  </div>
                  <div className='text-white cursor-pointer transition-all duration-200 hover:bg-gray-300 hover:text-green-700 px-3 py-2 rounded-md text-md'>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/add-post">Add Post</Link>
                  </div>
                  <button style={{ '--clr': '#39FF14' }} id="login" className="login" onClick={handleLogout}><span>Log out</span><i></i></button>
                </>
              )}
              {!isAuthenticated && (
                <div className='flex flex-row justify-evenly items-center gap-4 p-2 w-fit '>
                  <button style={{ '--clr': '#39FF14' }} id="login" className="login" onClick={() => setModalShowlogin(true)}><span>Login</span></button>
                  <LoginForm show={modalShowlogin} onHide={() => setModalShowlogin(false)} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
                  <button style={{ '--clr': '#39FF14' }} id="login" className="login" onClick={() => setModalShowSignup(true)}><span>Sign up</span><i></i></button>
                  <SignupForm show={modalShowSignup} onHide={() => setModalShowSignup(false)} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
                </div>
              )}
            </div>
          </div>
          <div className='-mr-2 flex justify-between md:hidden'>
            <button onClick={() => setOpen((open) => !open)} className='inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
              <span className='sr-only'>Open Main Menu</span>
              {open ? <FaTimes className='text-white' /> : <FaBars className='text-white' />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className='md:hidden justify-evenly'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {isAuthenticated && (
              <>
                <li className='text-white transition-all duration-200 hover:bg-gray-300 hover:text-green-700 px-3 py-2 rounded-md text-md'><Link to="/">Community</Link></li>
                <li className='text-gray-300 hover:gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/jobs">Jobs</Link></li>
                <li className='text-gray-300 hover:gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/salaries">Salaries</Link></li>
                <li className='text-gray-300 hover:gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/companies">Companies</Link></li>
                <li className='text-gray-300 hover:gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/connections">Connections</Link></li>
                <li className='text-gray-300 hover:gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/profile">Profile</Link></li>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
