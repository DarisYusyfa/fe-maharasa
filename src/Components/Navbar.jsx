import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('googleAuthToken');
    const savedUsername = localStorage.getItem('username'); // Assuming the username is saved as 'username' in localStorage
    if (token) {
      setIsAuthenticated(true);
      setUsername(savedUsername);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem('googleAuthToken');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    if (location.pathname === '/service') {
      navigate('/');
    } else {
      navigate('/service');
    }
  };

  return (
    <nav className="bg-gray-200 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-[20px] font-Poppins font-semibold whitespace-nowrap text-primary">Rumah Makan Maharasa</span>
        <div className="flex md:order-2 ml-[2rem]">
          {(location.pathname === '/service' || location.pathname === '/') && !isAuthenticated && (
            <>
              <Link to="/Register">
                <button type="button" className="text-primary bg-yellow-400 font-medium rounded-[99px] border-primary border-[1px] text-sm px-[30px] py-1 mx-[2rem] hover:bg-yellow-300  text-center mr-[5rem] md:mr-auto sm:mr-auto">
                  Daftar
                </button>
              </Link>
              <Link to="/Login">
                <button type="button" className="text-primary  bg-yellow-400 font-medium rounded-[99px] border-primary border-[1px] text-sm px-[30px] py-1 mx-[1rem] hover:bg-yellow-300 text-center mr-[9rem] sm:mr-[20rem] md:mr-auto">
                  Masuk
                </button>
              </Link>
            </>
          )}
          {isAuthenticated && (
            <div className="flex items-center">
              {location.pathname === '/service' && <span className="text-primary font-medium mr-2">{username}</span>}
              <button type="button" className="text-primary font-medium rounded-[99px] border-primary border-[1px] text-sm px-[35px] py-2 mx-2 text-center mr-3 md:mr-0" onClick={handleSignOut}>
                Keluar
              </button>
            </div>
          )}
          <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="text-[1rem] flex flex-col font p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-[99px]  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a href="/#home" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">
                Home
              </a>
            </li>
            <li>
              <a href="/#About" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">
                About
              </a>
            </li>
            <li>
              <a href="/#Fasilitas" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">
                Fasilitas
              </a>
            </li>
            <li>
              <a href="/#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
