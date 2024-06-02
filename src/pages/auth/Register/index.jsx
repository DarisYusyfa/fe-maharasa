import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="flex items-center bg-cover justify-center h-screen w-full from-teal-400" 
        style={{ backgroundImage: `url('src/assets/bglogin.png')` }}
      >
        <div className="bg-white p-6 rounded-xl shadow-xl w-full md:w-2/3 lg:w-1/3 border border-gray-300">
          <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
          <p className="text-center">
            Sign up ? 
            <Link to="/login" className="text-blue-500">Login</Link>
          </p>
          <form className="mt-8 space-y-6" action="#">
            <div>
              <input 
                type="text" 
                name="nama" 
                id="nama" 
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" 
                placeholder="Nama..." 
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
                required 
              />
            </div>
            <div>
              <input 
                type="password" 
                name="password" 
                id="password" 
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" 
                placeholder="Password..." 
                required 
              />
            </div>
            <div>
              <input 
                type="password" 
                name="confirmPassword" 
                id="confirmPassword" 
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" 
                placeholder="Confirm Password..." 
                required 
              />
            </div>
            <div className="flex justify-center">
              <button 
                className="w-full md:w-52 px-3 py-2 text-base font-bold shadow-md bg-primary hover:bg-secondary text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
