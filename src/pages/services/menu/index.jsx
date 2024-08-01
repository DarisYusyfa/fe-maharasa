import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate(1);
  };

  const tabs = [
    {
      title: 'Minuman',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2">
              {[
                { name: 'Jus Jeruk', price: '13000' },
                { name: 'Jus Tomat', price: '14000' },
                { name: 'Jus Mangga', price: '15000' },
                { name: 'Jus Kaweni', price: '15000' },
                { name: 'Jus Melon', price: '15000' },
                { name: 'Jus Sirsak', price: '15000' },
                { name: 'Jus Strawberry', price: '15000' },
                { name: 'Jus Buah Naga', price: '15000' },
                { name: 'Jus Alpukat', price: '15000' },
                { name: 'Teh Manis Panas', price: '6000' },
                { name: 'Es Teh Manis', price: '7000' },
                { name: 'Lemon Tea Panas', price: '10000' },
                { name: 'Es Lemon tea', price: '10000' },
                { name: 'Jeruk Panas', price: '10000' },
                { name: 'Es Jeruk', price: '10000' },
                { name: 'Pisang Ijo', price: '15000' },
                { name: 'Sop Buah', price: '20000' },
              ].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="flex-1 border-b border-dotted mx-2"></span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {[
                { name: 'Good Day', price: '5000' },
                { name: 'Abc Susu', price: '5000' },
                { name: 'Luwak White Coffe', price: '5000' },
                { name: 'Creamy Latte', price: '5000' },
                { name: 'Cappucino', price: '7000' },
                { name: 'Mochacino', price: '7000' },
                { name: 'Espresso', price: '8000' },
                { name: 'Tubruk', price: '7000' },
                { name: 'Americano', price: '13000' },
                { name: 'V60', price: '15000' },
                { name: 'Vietnam Drip', price: '15000' },
                { name: 'Ice Coffe gebid', price: '15000' },
                { name: 'Ice Coffe Maha', price: '15000' },
                { name: 'Es Kelapa Muda', price: '12000' },
                { name: 'Kelapa Muda', price: '13000' },
                { name: 'kelapa Jeruk', price: '15000' },
                { name: 'Kelapa Gula Aren', price: '15000' },
              ].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="flex-1 border-b border-dotted mx-2"></span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Paketan',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2">
              {[
                { name: 'Ayam Kota', price: '20000' },
                { name: 'Ayam Keraton', price: '24000' },
                { name: 'Ayam Pejantan', price: '25000' },
                { name: 'Bebek', price: '30000' },
              ].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="flex-1 border-b border-dotted mx-2"></span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {[
                { name: 'Ikan Nila', price: '35000' },
                { name: 'Ikan Gurame', price: '130000' },
                { name: 'Ayam Kampung', price: '25000' },
              ].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="flex-1 border-b border-dotted mx-2"></span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Paketan Keluarga',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2">
              {[
                { name: 'Ayam Kota', price: '180k/273k/365k' },
                { name: 'Ayam Keraton', price: '185k/278k/370k' },
                { name: 'Ayam Pejantan', price: '190k/283k/375k' },
                { name: 'Ayam Kampung', price: '205k/308k/410k' },
                { name: 'Bebek', price: '232k/350k/470k' },
                { name: 'Ikan Nila', price: '283k/427k/570k' },
                { name: 'Ikan Gurame', price: '320k/445k/570k' },
              ].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="flex-1 border-b border-dotted mx-2"></span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {[
                { name: 'Nasi', price: '5000' },
                { name: 'Tahu', price: '2000' },
                { name: 'Tempe', price: '3000' },
                { name: 'Ati', price: '3000' },
                { name: 'Ampela', price: '3000' },
                { name: 'Kepala Ayam', price: '4000' },
                { name: 'Usus', price: '5000' },
                { name: 'Kol Goreng', price: '5000' },
                { name: 'kepala Bebek', price: '5000' },
                { name: 'Jengkol Goreng', price: '10000' },
                { name: 'Petai goreng', price: '10000' },
                { name: 'Semur Jengkol', price: '10000' },
              ].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="flex-1 border-b border-dotted mx-2"></span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Makanan Lauk',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2">
              {[
                { name: 'Pepes Tahu', price: '5000' },
                { name: 'Pepes Ayam', price: '10000' },
                { name: 'Pepes Ikan', price: '15000' },
                { name: 'Sepot', price: '7000' },
                { name: 'Peda Marah', price: '8000' },
                { name: 'Ayam Kota', price: '20000' },
                { name: 'Ayam Keraton', price: '24000' },
                { name: 'Ayam Pejantan', price: '25000' },
                { name: 'Ayam Kampung', price: '25000' },
                { name: 'Bebek', price: '30000' },
                { name: 'Sayur Asem', price: '10000' },
                { name: 'Sayur Lodeh', price: '10000' },
                { name: 'Sate Ayam', price: '29000' },
                { name: 'Sate Kambing', price: '39000' },
                { name: 'Sate Sapi', price: '39000' },
                { name: 'Nasi Goreng Biassa', price: '15000' },
              ].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="flex-1 border-b border-dotted mx-2"></span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {[
                { name: 'Telor Dadar', price: '13000' },
                { name: 'Telor Mata Sapi', price: '13000' },
                { name: 'Telor Ceplok', price: '13000' },
                { name: 'Ikan Mas', price: '25000' },
                { name: 'Pindang', price: '20000' },
                { name: 'Ikan Nila', price: '35000' },
                { name: 'Ikan Gurame', price: '130000' },
                { name: 'Pencok', price: '10000' },
                { name: 'Karedok Lotek', price: '10000' },
                { name: 'Karedok Leunca', price: '10000' },
                { name: 'Sop Iga', price: '30000' },
                { name: 'Iga Bakar', price: '30000' },
                { name: 'Oseng Ayam', price: '29000' },
                { name: 'Oseng Kambing', price: '39000' },
                { name: 'Oseng Sapi', price: '39000' },
                { name: 'Nasi Goreng Spesial', price: '13000' },
              ].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="flex-1 border-b border-dotted mx-2"></span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Sambel',
      content: (
        <div>
          <ul className="space-y-2">
            {[
              { name: 'Sambel Goang', price: '5000' },
              { name: 'Sambel Terasi', price: '6000' },
              { name: 'Sambel Dadakan', price: '6000' },
              { name: 'Sambel Bangor', price: '6000' },
            ].map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span className="flex-1 border-b border-dotted mx-2"></span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-marck-script">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between mb-4">
          <button onClick={handleBack} className="bg-blue-600 text-white py-2 px-4 rounded">
            Kembali
          </button>
          <button onClick={handleNext} className="bg-blue-600 text-white py-2 px-4 rounded">
            Selanjutnya
          </button>
        </div>
        <h1 className="text-4xl text-center mb-6">Menu Rumah Makan Maharasa</h1>
        <div className="tabs-container flex justify-center overflow-x-auto whitespace-nowrap py-2">
          {tabs.map((tab, index) => (
            <button key={index} onClick={() => setActiveTab(index)} className={`px-4 py-2 ${activeTab === index ? 'bg-blue-600 active' : 'bg-gray-700'} text-white rounded-lg mx-2`}>
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};
