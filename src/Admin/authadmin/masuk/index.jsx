import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export const Masuk = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}auth/signin`, { email, password });
      if (!response.data.error) {
        localStorage.setItem('googleAuthToken', response.data.token);
        navigate('/pemesanan');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <motion.div
        className="hidden md:block bg-cover w-full md:w-1/2 h-screen relative"
        style={{ backgroundImage: `url('/assets/Azul_3.png')` }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div className="flex items-center justify-center w-full md:w-1/2 p-4 mt-16 md:mt-0" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <motion.div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-4/5 lg:w-2/3 border border-gray-200" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className="text-2xl mb-4 font-bold text-center text-gray-800">Login Admin</h2>
          <p className="text-center mb-6 text-gray-600">
            Belum punya akun?{' '}
            <Link to="/daftar" className="text-blue-500 hover:underline">
              Daftar
            </Link>
          </p>
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Email..."
                required
              />
              <p className="text-sm text-gray-500 mt-1">Masukkan alamat email Anda.</p>
            </div>
            <div className="relative">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Password..."
                required
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <p className="text-sm text-gray-500 mt-1">Masukkan password Anda.</p>
            </div>
            <div className="flex flex-col items-center">
              <button type="submit" className="w-full md:w-3/4 lg:w-1/2 px-4 py-2 mb-2 text-base font-bold text-center shadow-md bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:ring-4 focus:ring-blue-300">
                Login
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Masuk;
