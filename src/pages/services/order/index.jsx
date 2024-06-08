import { useState } from 'react';
import { SlCalender } from "react-icons/sl";
import { MdOutlineTimer } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiNotepadLight } from "react-icons/pi";
import { Footer } from '../../../Components/Footer';

export const Order = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <div className='flex flex-col justify-center h-screen scroll-smoth'>
      <div className="bg-cover items-center justify-center py-10 h-screen w-full from-teal-400 bg-cyan-200">
          <div className="relative top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/1 bg-white p-6 rounded-xl shadow-xl w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 border border-gray-300">
              <h2 className="text-2xl mb-4 font-bold text-center">Informasi Pelanggan</h2>
              <form className="mt-8 space-y-6 w-full" onSubmit={handleSubmit}>
                  <div>
                    <h1>Nama</h1>
                      <input 
                          type="text" 
                          name="nama" 
                          id="nama" 
                          className="input-field bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-1.5 shadow-md" 
                          placeholder="Masukan Nama..." 
                          required 
                      />
                  </div>
                  <div>
                    <h1>Email</h1>
                      <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          className="input-field bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-1.5 shadow-md" 
                          placeholder="Masukan Email..." 
                          required 
                      />
                  </div>
                  <div>
                      <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
                      <h1>Telepon</h1>
                      <input 
                          type="text" 
                          id="phone-input" 
                          aria-describedby="helper-text-explanation" 
                          className="input-field bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-1.5 shadow-md" 
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                          placeholder="123-456-7890" 
                          required 
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                      />
                  </div>
                  <div className="flex items-center mt-8"></div>
              </form>
          </div>
      </div>
      </div>
      <div className='realative justify-center h-screen overflow-auto'>
      <div className="bg-cover items-center justify-center py-10 h-screen w-full from-teal-400 bg-cyan-200">
          <div className="flex flex-col items-center justify-center absolute bottom-1/12 left-1/2 transform -translate-x-1/2 -translate-y-1/1 bg-white p-6 rounded-xl shadow-xl w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 border border-gray-300">
              <h2 className="text-2xl mb-4 font-bold text-center">Informasi Pelanggan</h2>
              <form className="mt-8 space-y-6 w-full" onSubmit={handleSubmit}>
                  <div className="relative flex items-center mb-4 border-b-2 border-grey-300">
                      <SlCalender className="mr-2" />
                      <span>Calendar Info</span>
                  </div>
                  <div className="relative flex items-center mb-4 border-b-2 border-grey-300">
                      <MdOutlineTimer className="mr-2" />
                      <span>Timer Info</span>
                  </div>
                  <div className="relative flex items-center mb-4 border-b-2 border-grey-300">
                      <IoMdPerson className="mr-2" />
                      <span>Person Info</span>
                  </div>
                  <div className="relative flex items-center mb-4 border-b-2 border-grey-300">
                      <PiNotepadLight className="mr-2" />
                      <span>Notepad Info</span>
                      <button className="absolute right-4 font-bold text-xs md:text-sm text-black-700 pt-2 px-6 border">
                          add+
                      </button>
                  </div>
                  <div className="flex items-center mt-4">
                      <input id="link-checkbox" type="checkbox" className="checkbox-field"/>
                      <label htmlFor="link-checkbox" className="ml-2 text-sm font-small text-gray-900 dark:text-gray-300">
                      Acara I agree to the venues required policy *
                      </label>
                  </div>
                  <div className="flex items-center mt-4">
                      <input id="link-checkbox" type="checkbox" className="checkbox-field"/>
                      <label htmlFor="link-checkbox" className="ml-2 text-sm font-small text-gray-900 dark:text-gray-300">
                      Receive news and offers for this venue
                      </label>
                  </div>
                  <div className="flex items-center mt-4">
                  <div className="absolute right-4 font-bold text-xs md:text-sm text-black-700 pt-2 px-6 border font-bold text-xs md:text-sm bg-blue-700 text-white-700 py-2 px-2 border border-blue rounded">
                       konfirmasi
                      </div>
                  </div>
              </form>
          </div>
      </div>
      </div>
      <Footer />
      </>
  );
};