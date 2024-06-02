import { useState } from 'react';
import { SlCalender } from "react-icons/sl";
import { MdOutlineTimer } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiNotepadLight } from "react-icons/pi";

export const Order = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan logika pengiriman verifikasi SMS di sini
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute items-center bg-cover justify-center h-screen w-full from-teal-400" 
        style={{ backgroundImage: `url('src/assets/bglogin.png')` }}
      >
        <div className="bg-white p-6 rounded-xl shadow-xl w-full md:w-2/3 lg:w-1/3 border border-gray-300">
          <h2 className="text-2xl mb-4 font-bold text-center">Informasi Pelanggan</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
              <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
              <input 
                type="text" 
                id="phone-input" 
                aria-describedby="helper-text-explanation" 
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5 shadow-md" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                placeholder="123-456-7890" 
                required 
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
             </div>
             <div className="flex justify-center">
              </div>
            </form>
          </div>
      </div>

      {/* Kolom informasi pelanggan yang dipindahkan ke bawah */}
      <div className='relative max-h-screen justify-center pt-12'>
        <div className="bg-white p-6 rounded-xl w-full md:w-2/3 lg:w-1/3 border-bottom">
          <h2 className="text-2xl mb-4 font-bold text-center">Informasi Pelanggan</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <div className="flex items-center">
                <SlCalender />
              </div>
            </div>
            <div>
              <MdOutlineTimer />
            </div>
            <div>
              <IoMdPerson />
            </div>
            <div>
              <PiNotepadLight />
            </div>
            <div className="flex justify-center">
            </div>
          </form>
        </div>
      </div>
      {/* Akhir kolom informasi pelanggan yang dipindahkan */}
    </div>
  );
};
