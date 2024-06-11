import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confirmation from './Confirmation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TableBooking = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedTable, setSelectedTable] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const navigate = useNavigate();

  const tables = [
    { id: 1, label: 'Meja 1', location: 'Samping Kolam Ikan', description: 'Deskripsi Meja 1' },
    { id: 2, label: 'Meja 1', location: 'Halaman depan', description: 'Deskripsi Meja 2' },
    { id: 3, label: 'Meja 2', location: 'halaman depan bagian kiri',description: 'Deskripsi Meja 3' },
    { id: 4, label: 'Meja 2', location: 'halaman depan bagian kanan',description: 'Deskripsi Meja 4' },
    { id: 5, label: 'Meja 3', location: 'halaman tengah bagian kanan',description: 'Deskripsi Meja 5' },
    { id: 6, label: 'Meja 3', location: 'halaman tengah bagian kiri',description: 'Deskripsi Meja 6' },
    { id: 7, label: 'Meja 4', location: 'halaman belakang bagian kanan ',description: 'Deskripsi Meja 7' },
    { id: 8, label: 'Meja 4', location: 'halaman belakang bagian kiri',description: 'Deskripsi Meja 8' },
    { id: 9, label: 'Meja 5', location: 'halaman samping kanan bagian kiri',description: 'Deskripsi Meja 9' },
    { id: 10, label: 'Meja 5', location: 'halaman samping kanan bagian kanan',description: 'Deskripsi Meja 10' },
    { id: 11, label: 'Meja 6', location: 'halaman samping kiri bagian kiri',description: 'Deskripsi Meja 11' },
    { id: 12, label: 'Meja 6', location: 'halaman belakang samping kamar mandi',description: 'Deskripsi Meja 12' },
  ];

  const handleTableClick = (tableId) => {
    setSelectedTable(selectedTable === tableId ? null : tableId);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <>
      {isConfirmed ? (
        <Confirmation />
      ) : (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 font-poppins">
          <div className="w-full max-w-screen-lg p-6 bg-white border border-gray-300 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="flex justify-between bg-gray-300 mb-4 rounded-md">
              <button onClick={handleBackClick} className="text-gray-700 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <div className="text-center">
                <h1 className="text-xl font-bold">12 DESEMBER 2024</h1>
                <p className="text-gray-500">19.00</p>
              </div>
              <div className="w-6 h-6"></div>
            </div>
            <h2 className="text-center mb-4">
              PESANAN SUDAH DI BOOKING
              <br />
              SILAHKAN PILIH MEJA YANG SUDAH TERSEDIA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {tables.map((table) => (
                <div key={table.id} className="relative" data-aos="fade-up">
                  <button onClick={() => handleTableClick(table.id)} className={`p-4 w-full bg-gray-200 rounded text-center border border-gray-400 hover:bg-gray-300 ${selectedTable === table.id ? 'bg-gray-300' : ''}`}>
                    <span>{table.label}</span>
                    {table.location && <p className="text-sm text-gray-600">{table.location}</p>}
                  </button>
                  {selectedTable === table.id && (
                    <div className="mt-2 p-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10" data-aos="fade-in">
                      <h3 className="text-lg font-bold mb-2">{table.label}</h3>
                      {table.location && <p className="text-sm text-gray-600 mb-2">{table.location}</p>}
                      <p className="text-gray-600">{table.description}</p>
                      <button className="mt-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Select</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="border-t border-gray-300 pt-4 flex justify-end">
              <button onClick={handleConfirm} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableBooking;
