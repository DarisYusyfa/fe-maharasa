import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedTime, setSelectedTime] = useState('');

  const times = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

  const handleConfirmReservation = () => {
    // Logika untuk mengonfirmasi reservasi
    console.log('Reservation confirmed!');
  };

  return (
    <div className="relative shadow-2xl bg-slate-400 rounded-lg px-10 pt-8 pb-8 ">
      <h2 className="text-lg font-semibold mb-4">RUMAH MAKAN MAHARASA</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Pilih Tanggal Kedatangan:</label>
        <div className="calendar-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="block p-2 border border-gray-300 rounded-md"
            inline // Menampilkan kalender secara permanen di halaman
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Pilih Jumlah Tamu:</label>
        <input type="number" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md" />
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

      {selectedDate && <p className="mt-4">Selected Date: {selectedDate.toLocaleDateString()}</p>}
      <p className="mt-2">Jumlah Tamu: {numberOfPeople}</p>
      {selectedTime && <p className="mt-2">Jam Kedatangan: {selectedTime}</p>}
      <div className="flex justify-end pt-6">
        <button onClick={handleConfirmReservation} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Konfirmasi
        </button>
      </div>
      </div>
      );
};