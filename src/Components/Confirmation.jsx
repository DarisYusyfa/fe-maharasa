import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Confirmation = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100" data-aos="fade-in">
      <div className="w-full max-w-2xl p-8 bg-green-100 border border-green-300 rounded-lg shadow-lg flex flex-col items-center justify-center" data-aos="zoom-in">
        <div className="flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4" data-aos="fade-down">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-green-800" data-aos="fade-up">
          Pesanan Berhasil!
        </h2>
        <p className="mt-2 text-green-700" data-aos="fade-up" data-aos-delay="100">
          Reservasi Anda telah berhasil dipesan.
        </p>
        <p className="mt-4 text-black-4 rounded text-lg font-bold text-center" data-aos="fade-up" data-aos-delay="200">
          KAMI TUNGGU KEDATANGANNYA DENGAN SENANG HATI
        </p>
        <div className="flex justify-center mt-6" data-aos="fade-up" data-aos-delay="300">
          <Link to="/" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
