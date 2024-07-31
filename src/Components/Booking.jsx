import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import '../index.css';

export const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTable, setSelectedTable] = useState(null);
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const times = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const tables = [
    { id: 1, label: 'Meja 1', location: 'Samping Kolam Ikan', description: 'Deskripsi Meja 1' },
    { id: 2, label: 'Meja 2', location: 'Halaman depan', description: 'Deskripsi Meja 2' },
    { id: 3, label: 'Meja 3', location: 'halaman depan bagian kiri', description: 'Deskripsi Meja 3' },
    { id: 4, label: 'Meja 4', location: 'halaman depan bagian kanan', description: 'Deskripsi Meja 4' },
    { id: 5, label: 'Meja 5', location: 'halaman tengah bagian kanan', description: 'Deskripsi Meja 5' },
    { id: 6, label: 'Meja 6', location: 'halaman tengah bagian kiri', description: 'Deskripsi Meja 6' },
    { id: 7, label: 'Meja 7', location: 'halaman belakang bagian kanan ', description: 'Deskripsi Meja 7' },
    { id: 8, label: 'Meja 8', location: 'halaman belakang bagian kiri', description: 'Deskripsi Meja 8' },
    { id: 9, label: 'Meja 9', location: 'halaman samping kanan bagian kiri', description: 'Deskripsi Meja 9' },
    { id: 10, label: 'Meja 10', location: 'halaman samping kanan bagian kanan', description: 'Deskripsi Meja 10' },
    { id: 11, label: 'Meja 11', location: 'halaman samping kiri bagian kiri', description: 'Deskripsi Meja 11' },
    { id: 12, label: 'Meja 12', location: 'hal belakang samping kamar mandi', description: 'Deskripsi Meja 12' },
  ];

  const handleConfirm = () => {
    if (selectedDate && selectedTime && selectedTable) {
      const formattedDate = formatDate(selectedDate);
      const formattedTime = selectedTime.replace(':', '.');

      navigate(`/order?date=${encodeURIComponent(formattedDate)}&time=${encodeURIComponent(formattedTime)}&attendees=${encodeURIComponent(numberOfPeople)}&specialEvent=Acara%20Khusus&table=${encodeURIComponent(selectedTable)}`);
    } else {
      alert('Please complete all fields');
    }
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleTableClick = (tableId) => {
    setSelectedTable(selectedTable === tableId ? null : tableId);
  };

  const handleSelect = async (table) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}master/table`, {
        name: table.label,
        desc: table.location,
        detail: table.description,
      });

      if (response.status === 200 || response.status === 201) {
        setSelectedTable(table.id);
        setNotification(`Meja ${table.label.split(' ')[1]} telah terpilih`);
      } else {
        console.error('Error posting table data:', response.status, response.statusText, response.data);
      }
    } catch (error) {
      console.error('Error posting table data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-4 mt-4 font-Lusitana text-center">FORM PENGISIAN RESERVASI</h2>
      <div className="flex flex-col lg:flex-row w-full max-w-6xl">
        <div className="relative shadow-2xl bg-white rounded-lg px-10 pt-8 pb-8 w-full lg:w-1/2 lg:mr-4 mb-8 lg:mb-0">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Pilih Tanggal Kedatangan:</label>
            <div className="calendar-container flex justify-center">
              <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} className="block p-2 border border-gray-300 rounded-md" inline />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Pilih Jumlah Tamu:</label>
            <input type="number" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md custom-number-input" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tentukan Jam Kedatangan:</label>
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md">
              <option value="">Jam</option>
              {times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          {selectedDate && <p className="mt-4">Selected Date: {formatDate(selectedDate)}</p>}
          <p className="mt-2">Jumlah Tamu: {numberOfPeople}</p>
          {selectedTime && <p className="mt-2">Jam Kedatangan: {selectedTime}</p>}
        </div>

        <div className="relative shadow-2xl bg-white rounded-lg px-10 pt-8 pb-8 w-full lg:w-1/2 lg:ml-4">
          {notification && <div className="mb-4 p-2 bg-green-200 text-green-800 border border-green-300 rounded">{notification}</div>}
          <h2 className="text-center mb-4">
            PESANAN SUDAH DI BOOKING
            <br />
            SILAHKAN PILIH MEJA YANG TERSEDIA
          </h2>
          <div className="flex justify-center mb-4">
            <div className="grid grid-cols-2 gap-4 w-full">
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
                      <button onClick={() => handleSelect(table)} className="mt-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                        Select
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4 flex justify-end">
            <button onClick={handleConfirm} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
