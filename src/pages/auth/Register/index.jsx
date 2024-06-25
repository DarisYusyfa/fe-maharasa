import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

export const Register = () => {
  return (
    <div className="relative h-screen">
      <div className="flex items-center bg-cover justify-center h-screen w-full from-teal-400" style={{ backgroundImage: `url('src/assets/bglogin.png')` }}>
        <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md mx-4 border border-gray-300">
          <h2 className="text-2xl mb-4 font-bold text-center">Register</h2>
          <p className="text-center mb-4">
            Do you have an account?
            <Link to="/login" className="text-blue-500">
              {' '}
              Login
            </Link>
          </p>
          <form className="space-y-6" action="#">
            <div>
              <input type="text" name="nama" id="nama" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Nama..." required />
            </div>
            <div>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Email..." required />
            </div>
            <div>
              <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Password..." required />
            </div>
            <div>
              <input type="password" name="confirmPassword" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" placeholder="Confirm Password..." required />
            </div>
            <div className="flex justify-center">
              <button className="w-full md:w-52 px-3 py-2 text-base font-bold shadow-md bg-primary hover:bg-secondary text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-300">Register</button>
            </div>
            <div className="flex justify-start mt-4">
              <button type="button" className="flex items-start w-full md:w-52 px-3 py-2 text-base font-bold shadow-md bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 rounded-lg focus:ring-4 focus:ring-blue-300">
                <FcGoogle className="w-6 h-6 mr-2" />
                Signup with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
