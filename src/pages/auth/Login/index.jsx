import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

export const Login = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="flex items-center h-screen justify-center w-full md:w-5/12 p-4 bg-gradient-to-r from-teal-400">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full md:w-2/3 border border-gray-300 transform md:translate-x-0 md:translate-y-0 z-40">
            <h2 className="text-2xl mb-4 font-bold text-center md:text-left">Login</h2>
            <p className="text-center md:text-left">
              Sign up ?
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
            <form className="mt-8 space-y-6" action="#">
              <div>
                <input type="text" name="nama" id="nama" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Nama..." required />
              </div>
              <div>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Email..." required />
              </div>
              <div>
                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Password..." required />
              </div>
              <div className="flex justify-center flex-col items-center">
                <Link to="/service">
                  <button className="w-full md:w-52 px-3 py-2 mb-1 text-base font-bold text-center shadow-md bg-primary hover:bg-secondary text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-300 mx-auto">Login</button>
                </Link>
                <button type="button" className="flex items-start w-full md:w-52 px-3 py-2 mt-4 text-base font-bold shadow-md bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 rounded-lg focus:ring-4 focus:ring-blue-300">
                  <FcGoogle className="w-6 h-6 mr-2" />
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block bg-cover h-screen bg-center w-7/12 relative" style={{ backgroundImage: `url('src/assets/bglogin.png')` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
    </>
  );
};
