import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';

const menuItems = [
  { id: 1, name: 'Sate Ayam', price: 29000, image: '/src/assets/nasgor.png' },
  { id: 2, name: 'Sate Kambing', price: 39000, image: '/src/assets/nasgorrr.jpg' },
  { id: 3, name: 'Sate Sapi', price: 39000, image: '/src/assets/nasgorrr.jpg' },
  { id: 4, name: 'Oseng Ayam', price: 29000, image: '/src/assets/nasgorrr.jpg' },
  { id: 5, name: 'Oseng Sapi', price: 39000, image: '/src/assets/nasgorrr.jpg' },
  { id: 6, name: 'Oseng Kambing', price: 39000, image: '/src/assets/nasgorrr.jpg' },
];

const MenuCard = ({ item, count, increment, decrement }) => (
  <div className="bg-white p-4 rounded-lg shadow-xl shadow-gray-600" data-aos="fade-up">
    <div className="overflow-hidden rounded-lg">
      <img src={item.image} alt={item.name} className="object-cover w-full h-48 transform hover:scale-110 transition duration-300" />
    </div>
    <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
    <p className="text-gray-500">0 Terjual</p>
    <p className="text-xl font-bold">Rp.{item.price.toLocaleString('id-ID')}</p>
    <div className="flex items-center justify-between mt-4">
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
        onClick={() => decrement(item.id)}
      >
        -
      </button>
      <span className="text-xl font-semibold">{count[item.id] || 0}</span>
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
        onClick={() => increment(item.id)}
      >
        +
      </button>
    </div>
  </div>
);

MenuCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  count: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export const User = () => {
  const [count, setCount] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const increment = (id) => {
    setCount((prevCount) => ({
      ...prevCount,
      [id]: (prevCount[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setCount((prevCount) => ({
      ...prevCount,
      [id]: Math.max((prevCount[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <Link to="/" className="mb-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md">
          Kembali
        </Link>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} count={count} increment={increment} decrement={decrement} />
          ))}
        </div>
      </div>
    </div>
  );
};
