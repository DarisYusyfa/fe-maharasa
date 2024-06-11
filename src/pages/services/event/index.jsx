import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const navigate = useNavigate();

  const events = ['Acara Keluarga', 'Bisnis Meeting', 'Spesial Event', 'Acara Perpisahan', 'Acara Pernikahan', 'Buka Bersama', 'Acara Kelulusan', 'Ulang Tahun', 'Acara Anak'];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleEventChange = (event) => {
    setSelectedEvent(event);
  };

  const handleBackClick = () => {
    navigate(-1); // This will navigate back in history
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <div className="bg-black w-full p-4 flex justify-between items-center">
        <button onClick={handleBackClick} className="text-white bg-transparent border border-white py-2 px-4 rounded">
          Keluar
        </button>
        <button className="text-white bg-transparent border border-white py-2 px-4 rounded">Simpan</button>
      </div>
      <div className="bg-gray-300 p-6 rounded-lg mt-4">
        <div className="grid grid-cols-3 gap-4">
          {events.map((event, index) => (
            <label key={event} data-aos="fade-up" data-aos-delay={index * 100} className={`flex items-center justify-between p-2 bg-black text-white rounded-md cursor-pointer ${selectedEvent === event ? 'bg-gray-700' : ''}`}>
              <span>{event}</span>
              <input type="radio" name="event" value={event} checked={selectedEvent === event} onChange={() => handleEventChange(event)} className="ml-2" />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
