import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegClock, FaUser, FaClipboardList } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Order = () => {
  const [policyChecked, setPolicyChecked] = useState(true);
  const [offersChecked, setOffersChecked] = useState(true);
  const [eventDetails, setEventDetails] = useState({
    date: '',
    time: '',
    attendees: '',
    specialEvent: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in ms
      once: true, // Whether animation should happen only once
    });

    const fetchEventDetails = async () => {
      const data = {
        date: '19 Desember 2024',
        time: '19.00',
        attendees: '2 Orang',
        specialEvent: 'Acara Khusus',
      };
      setEventDetails(data);
    };

    fetchEventDetails();
  }, []);

  return (
    <div className="min-h-screen mx-auto p-6 bg-teal-200 shadow-md rounded-lg justify-center items-center">
      <h1 className="text-xl font-bold mb-4 text-center bg-gray-300 p-3 rounded-md" data-aos="fade-down">
        Registrasi Form
      </h1>
      <form>
        <div className="mb-6 p-4 bg-gray-100 rounded-lg" data-aos="fade-right">
          <h2 className="text-lg font-semibold mb-4 text-center">Informasi Pelanggan</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Nama
            </label>
            <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md shadow-sm" defaultValue="Kirwan Herdiansyah" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md shadow-sm" defaultValue="KirwanHerdiansyah@gmail.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              No Telpn
            </label>
            <div className="flex items-center">
              <span className="mr-2">+62</span>
              <input type="tel" id="phone" name="phone" className="w-full border-gray-300 rounded-md shadow-sm" defaultValue="8967452241" />
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-gray-100 rounded-lg" data-aos="fade-left">
          <h2 className="text-lg font-semibold mb-4 text-center">Detail Acara</h2>
          <div className="mb-4">
            <div className="flex items-center mb-2" data-aos="fade-up" data-aos-delay="100">
              <FaRegCalendarAlt className="mr-2" />
              <span className="text-gray-700">{eventDetails.date}</span>
            </div>
            <div className="flex items-center mb-2 border-t-2" data-aos="fade-up" data-aos-delay="200">
              <FaRegClock className="mr-2" />
              <span className="text-gray-700">{eventDetails.time}</span>
            </div>
            <div className="flex items-center mb-2 border-t-2" data-aos="fade-up" data-aos-delay="300">
              <FaUser className="mr-2" />
              <span className="text-gray-700">{eventDetails.attendees}</span>
            </div>
            <div className="flex items-center mb-2 border-t-2 border-b-2" data-aos="fade-up" data-aos-delay="400">
              <FaClipboardList className="mr-2" />
              <span className="text-gray-700">{eventDetails.specialEvent}</span>
              <Link to="/event" className="ml-auto bg-gray-300 p-1 rounded-sm mt-1 mb-1 text-sm">
                Add +
              </Link>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-start" data-aos="fade-up" data-aos-delay="500">
              <input type="checkbox" id="policy" name="policy" className="mt-1" checked={policyChecked} onChange={() => setPolicyChecked(!policyChecked)} />
              <label className="ml-2 text-gray-700" htmlFor="policy">
                Acara I agree to the required policy
                <BsInfoCircle className="inline ml-1" />
              </label>
            </div>
            <div className="flex items-start mt-2" data-aos="fade-up" data-aos-delay="600">
              <input type="checkbox" id="offers" name="offers" className="mt-1" checked={offersChecked} onChange={() => setOffersChecked(!offersChecked)} />
              <label className="ml-2 text-gray-700" htmlFor="offers">
                Receive news and offers for this venue
                <BsInfoCircle className="inline ml-1" />
              </label>
            </div>
          </div>
        </div>
        <Link to="/table">
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" data-aos="fade-up" data-aos-delay="700">
            Konfirmasi
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Order;
