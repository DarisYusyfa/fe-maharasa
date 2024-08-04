import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}auth/signin`,
        {
          email,
          password,
        }
      );
      console.log(response.data);
      if (!response.data.error) {
        localStorage.setItem("googleAuthToken", response.data.token); // Menyimpan token di localStorage
        navigate("/service");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      localStorage.setItem("googleAuthToken", tokenResponse.access_token);
      navigate("/service");
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div className="flex flex-item-center md:flex-row min-h-screen">
      <motion.div
        className="hidden md:block bg-cover  w-screen relative"
        style={{ backgroundImage: `url('/assets/Azul_3.png')` }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="flex  items-center lg:absolute md:relative sm:relative ml-[21rem] h-screen justify-center w-full md:w-5/12 p-4 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="bg-blue-300   p-6 rounded-xl shadow-xl w-full md:w-2/3 border-[0.3rem] border-white transform md:translate-x-0 md:translate-y-0 z-40"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl mb-4 font-bold text-center md:text-left">
            Login
          </h2>
          <p className="text-center md:text-left">
            Belum punya akun?{" "}
            <Link to="/register" className="text-blue-500">
              Daftar
            </Link>
          </p>
          <form className="mt-8 space-y-6" onSubmit={submit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md"
                placeholder="Email..."
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Masukkan alamat email Anda.
              </p>
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md"
                placeholder="Password..."
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <p className="text-sm text-gray-500 mt-1">
                Masukkan password Anda.
              </p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <button
                type="submit"
                className="w-full md:w-52 px-3 py-2 mb-1 text-base font-bold text-center shadow-md bg-primary hover:bg-secondary text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-300 mx-auto"
              >
                Login
              </button>
              <button
                type="button"
                className="flex items-start w-full md:w-52 px-3 py-2 mt-4 text-base font-bold shadow-md bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 rounded-lg focus:ring-4 focus:ring-blue-300"
                onClick={() => login()}
              >
                <FcGoogle className="w-6 h-6 mr-2" />
                Login With Google
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
