import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';

export const Register = () => {
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
      console.log('Response:', response.data);
      if (response.data.error) {
        if (response.data.message.includes('already registered')) {
          alert('This account is already registered.');
        } else {
          alert(response.data.message);
        }
      } else {
        alert('Signup successful! Your data has been saved. Please login.');
        navigate('/login'); // Redirect to login page after successful signup
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

        // Simpan user info ke database
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}auth/google-signup`, {
          name,
          email,
          googleId,
        });

        console.log('Response:', response.data);
        if (response.data.error) {
          alert(response.data.message);
        } else {
          alert('Signup successful! Your data has been saved. Please login.');
          navigate('/login'); // Redirect to login page after successful signup
        }
      } catch (error) {
        console.log('Error:', error);
        alert('An error occurred. Please try again.');
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div className="relative h-screen">
      <div className="flex items-center bg-cover justify-center h-screen w-full from-teal-400" style={{ backgroundImage: `url('src/assets/bglogin.png')` }}>
        <motion.div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md mx-4 border border-gray-300" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl mb-4 font-bold text-center">Register</h2>
          <p className="text-center mb-4">
            Do you have an account?
            <Link to="/login" className="text-blue-500">
              {' '}
              Login
            </Link>
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md"
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
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md"
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
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md"
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
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md"
                placeholder="Confirm Password..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-full md:w-52 px-3 py-2 text-base font-bold shadow-md bg-primary hover:bg-secondary text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-300">
                Register
              </button>
            </div>
            <div className="flex justify-start mt-4">
              <button
                type="button"
                className="flex items-start w-full md:w-52 px-3 py-2 text-base font-bold shadow-md bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 rounded-lg focus:ring-4 focus:ring-blue-300"
                onClick={() => signUpWithGoogle()}
              >
                <FcGoogle className="w-6 h-6 mr-2" />
                Signup with Google
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
