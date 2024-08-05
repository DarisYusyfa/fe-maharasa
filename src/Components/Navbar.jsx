import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn] = useState(true); // Simulasi login state
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleReservasiClick = () => {
    setIsModalOpen(true);
  };

  const handleUserChoice = (role) => {
    setIsModalOpen(false);
    if (role === 'admin') {
      navigate('/Daftar');
    } else {
      navigate('/register');
    }
  };

  const isServicePage = location.pathname === '/service'; // Sesuaikan dengan rute halaman service Anda

  return (
    <nav className="bg-gray-200 shadow-md py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden mx-3 flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <span className="text-gray-800 text-xl font-bold pr-3 font-Lusitana">RM MAHARASA</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2"></div>
        <div className="hidden md:flex space-x-8">
          <a href="/#home" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
            Home
          </a>
          <a href="/#About" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
            About
          </a>
          <a href="/#Fasilitas" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
            Fasilitas
          </a>
          <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
            Contact
          </a>
        </div>
        <div className="hidden md:block">
          {isLoggedIn && isServicePage ? (
            <button
              onClick={() => {
                /* Logic untuk logout */
                navigate('/');
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
            >
              Keluar
            </button>
          ) : (
            <button onClick={handleReservasiClick} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Reservasi Sekarang →
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 px-6">
          <a href="/#home" className="block text-gray-600 hover:text-gray-900 py-2 transition-colors duration-300">
            Home
          </a>
          <a href="/#About" className="block text-gray-600 hover:text-gray-900 py-2 transition-colors duration-300">
            About
          </a>
          <a href="/#Fasilitas" className="block text-gray-600 hover:text-gray-900 py-2 transition-colors duration-300">
            Fasilitas
          </a>
          <a href="/#contact" className="block text-gray-600 hover:text-gray-900 py-2 transition-colors duration-300">
            Contact
          </a>
          {isLoggedIn && isServicePage ? (
            <button
              onClick={() => {
                /* Logic untuk logout */
                navigate('/');
              }}
              className="block bg-red-500 text-white px-4 py-2 rounded-full text-center mt-2 hover:bg-red-700 transition-colors duration-300"
            >
              Keluar
            </button>
          ) : (
            <button onClick={handleReservasiClick} className="block bg-blue-500 text-white px-4 py-2 rounded-full text-center mt-2 hover:bg-blue-700 transition-colors duration-300">
              Reservasi Sekarang →
            </button>
          )}
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
              <FaTimes size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Masuk Sebagai Pelanggan Admin?</h3>
            <div className="flex justify-around mt-4">
              <button onClick={() => handleUserChoice('user')} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                Pelanggan
              </button>
              <button onClick={() => handleUserChoice('admin')} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
