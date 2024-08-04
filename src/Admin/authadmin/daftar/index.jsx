import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';

export const Daftar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}auth/signup`, {
        name,
        email,
        phone_number: phoneNumber,
        password,
      });
      if (response.data.error) {
        if (response.data.message.includes('already registered')) {
          alert('This account is already registered.');
        } else {
          alert(response.data.message);
        }
      } else {
        alert('Signup successful! Please login.');
        navigate('/login');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const signUpWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const { name, email, sub: googleId } = userInfoResponse.data;

        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}auth/google-signup`, {
          name,
          email,
          googleId,
        });

        if (response.data.error) {
          alert(response.data.message);
        } else {
          alert('Signup successful! Please login.');
          navigate('/login');
        }
      } catch (error) {
        console.log('Error:', error);
        alert('An error occurred. Please try again.');
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      <motion.div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-4 border border-gray-200" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl mb-4 font-bold text-center text-gray-800">Daftar Admin</h2>
        <p className="text-center mb-6 text-gray-600">
          <Link to="/Masuk" className="text-blue-500 hover:underline"></Link>
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Phone Number..."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Confirm Password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button type="submit" className="w-full px-4 py-2 text-base font-semibold shadow-md bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:ring-4 focus:ring-blue-300">
              Register
            </button>
            <button
              type="button"
              className="flex items-center mt-4 w-full px-4 py-2 text-base font-semibold shadow-md bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 rounded-lg focus:ring-4 focus:ring-blue-300"
              onClick={() => signUpWithGoogle()}
            >
              <FcGoogle className="w-6 h-6 mr-2" />
              Signup with Google
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
