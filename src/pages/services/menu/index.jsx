import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Menu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center">
      <div className="relative container p-4 bg-amber-50 bg-opacity-90 rounded-lg shadow-lg" data-aos="fade-up">
        <img src="/src/assets/shape.png" className="absolute top-0 right-0 w-20 h-20" alt="Top Right Shape" data-aos="zoom-in" />
        <img src="/src/assets/shape2.png" className="absolute bottom-0 right-0 w-40 h-40" alt="Bottom Left Shape" data-aos="zoom-in" />
        <img src="/src/assets/shape4.png" className="absolute bottom-0 left-0 w-40 h-40" alt="Bottom Right Shape" data-aos="zoom-in" />

        <button onClick={handleBackClick} className="bg-blue-800 text-white px-4 py-2 mb-4 rounded-md" data-aos="fade-right">
          Kembali
        </button>

        <div className="text-center mb-10 mt-12" data-aos="fade-down">
          <h1 className="text-4xl font-bold">MENU</h1>
          <h2 className="text-2xl italic">Rumah Makan Maharasa</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div data-aos="fade-up">
            <h3 className="text-lg font-semibold border-b-2 border-black">Per-Pepesan</h3>
            <ul>
              <li className="flex justify-between"><span>Pepes Tahu</span><span>5000</span></li>
              <li className="flex justify-between"><span>Pepes Ayam</span><span>10000</span></li>
              <li className="flex justify-between"><span>Pepes Ikan</span><span>15000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black mt-1">Per-Teloran</h3>
            <ul>
              <li className="flex justify-between"><span>Telor Dadar</span><span>13000</span></li>
              <li className="flex justify-between"><span>Telor Mata Sapi</span><span>13000</span></li>
              <li className="flex justify-between"><span>Telor Ceplok</span><span>13000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black mt-1">Per-Asinan</h3>
            <ul>
              <li className="flex justify-between"><span>Sepat</span><span>7000</span></li>
              <li className="flex justify-between"><span>Peda Merah</span><span>8000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black mt-1">Per-Ayaman</h3>
            <ul>
              <li className="flex justify-between"><span>Ayam Kota</span><span>20000</span></li>
              <li className="flex justify-between"><span>Ayam Keraton</span><span>24000</span></li>
              <li className="flex justify-between"><span>Ayam Pejantan</span><span>25000</span></li>
              <li className="flex justify-between"><span>Ayam Kampung</span><span>25000</span></li>
              <li className="flex justify-between"><span>Bebek</span><span>30000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black">Per-Satean</h3>
            <ul>
              <li className="flex justify-between"><span>Sate Ayam</span><span>29000</span></li>
              <li className="flex justify-between"><span>Sate Kambing</span><span>39000</span></li>
              <li className="flex justify-between"><span>Sate Sapi</span><span>39000</span></li>
              <li className="flex justify-between"><span>Oseng Ayam</span><span>29000</span></li>
              <li className="flex justify-between"><span>Oseng Kambing</span><span>39000</span></li>
              <li className="flex justify-between"><span>Oseng Sapi</span><span>39000</span></li>
            </ul>
            <div data-aos="fade-up">
            <h3 className="text-lg font-semibold text-center mt-10 ">Paket-Liwet</h3>
            <ul>
              <li className="flex justify-between"><span>Ayam Kota</span><span>180k/273k/365k</span></li>
              <li className="flex justify-between"><span>Ayam Keraton</span><span>185k/278k/370k</span></li>
              <li className="flex justify-between"><span>Ayam Pejantan</span><span>190k/283k/375k</span></li>
              <li className="flex justify-between"><span>Ayam Kampung</span><span>205k/308k/410k</span></li>
              <li className="flex justify-between"><span>Bebek</span><span>232k/350k/470k</span></li>
              <li className="flex justify-between"><span>Ikan Nila</span><span>283k/427k/570k</span></li>
              <li className="flex justify-between"><span>Ikan Gurame</span><span>320k/445k/570k</span></li>
            </ul>
            <h3 className="text-lg font-semibold mt-10 text-center">Termasuk:</h3>
            <ul>
              <li>Nasi Liwet</li>
              <li>Menu Pilihan</li>
              <li>Tahu</li>
              <li>Tempe</li>
              <li>Asin Sepat</li>
              <li>Jengkol</li>
              <li>Tumis Kangkung</li>
              <li>Sambel</li>
              <li>Lalap</li>
            </ul>
            </div>
            <h3 className="text-lg font-semibold border-b-2 border-black mt-20">Per-Jusan</h3>
            <ul>
              <li className="flex justify-between"><span>Jus Jeruk</span><span>13000</span></li>
              <li className="flex justify-between"><span>Jus Tomat</span><span>14000</span></li>
              <li className="flex justify-between"><span>Jus Mangga</span><span>15000</span></li>
              <li className="flex justify-between"><span>Jus Kaweni</span><span>15000</span></li>
              <li className="flex justify-between"><span>Jus Melon</span><span>15000</span></li>
              <li className="flex justify-between"><span>Jus Sirsak</span><span>15000</span></li>
              <li className="flex justify-between"><span>Jus Strawberry</span><span>15000</span></li>
              <li className="flex justify-between"><span>Jus Mangga</span><span>15000</span></li>
              <li className="flex justify-between"><span>Jus Alpukat</span><span>15000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black">Dahaga</h3>
            <ul>
              <li className="flex justify-between"><span>Teh Manis Panas</span><span>6000</span></li>
              <li className="flex justify-between"><span>Es Teh Manis</span><span>7000</span></li>
              <li className="flex justify-between"><span>Lemon Tea Panas</span><span>10000</span></li>
              <li className="flex justify-between"><span>Es Lemon Tea</span><span>10000</span></li>
              <li className="flex justify-between"><span>Jeruk Panas</span><span>10000</span></li>
              <li className="flex justify-between"><span>Es Jeruk</span><span>10000</span></li>
              <li className="flex justify-between"><span>Pisang Ijo</span><span>15000</span></li>
              <li className="flex justify-between"><span>Sop Buah</span><span>20000</span></li>
              <li className="flex justify-between"><span>Es Kelapa Muda</span><span>12000</span></li>
              <li className="flex justify-between"><span>Kelapa Muda</span><span>13000</span></li>
              <li className="flex justify-between"><span>Kelapa Jeruk</span><span>15000</span></li>
              <li className="flex justify-between"><span>Kelapa Gula Aren</span><span>15000</span></li>
            </ul>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-lg font-semibold border-b-2 border-black">Per-Nasgoran</h3>
            <ul>
              <li className="flex justify-between"><span>Nasi Goreng Biassa</span><span>15000</span></li>
              <li className="flex justify-between"><span>Nasi Goreng Spesial</span><span>13000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black mt-10">Per-Sambelan</h3>
            <ul>
              <li className="flex justify-between"><span>Sambel Goang</span><span>5000</span></li>
              <li className="flex justify-between"><span>Sambel Terasi</span><span>6000</span></li>
              <li className="flex justify-between"><span>Sambel Dadakan</span><span>6000</span></li>
              <li className="flex justify-between"><span>Sambel Bangor</span><span>6000</span></li>
              <li className="flex justify-between"><span>Pencok</span><span>10000</span></li>
              <li className="flex justify-between"><span>Karedok Lotek</span><span>10000</span></li>
              <li className="flex justify-between"><span>Karedok Leunca</span><span>10000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black">Per-Ikanan</h3>
            <ul>
              <li className="flex justify-between"><span>Ikan Mas</span><span>25000</span></li>
              <li className="flex justify-between"><span>Pindang</span><span>20000</span></li>
              <li className="flex justify-between"><span>Ikan Nila</span><span>35000</span></li>
              <li className="flex justify-between"><span>Ikan Gurame</span><span>130000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black mt-1">Per-Kuahan</h3>
            <ul>
              <li className="flex justify-between"><span>Sayur Asem</span><span>10000</span></li>
              <li className="flex justify-between"><span>Sayur Lodeh</span><span>10000</span></li>
              <li className="flex justify-between"><span>Sop Iga</span><span>30000</span></li>
              <li className="flex justify-between"><span>Gulai</span><span>30000</span></li>
              <li className="flex justify-between"><span>Iga Bakar</span><span>30000</span></li>
            </ul>
            <div data-aos="">
            <h3 className="text-lg font-semibold border-b-2 border-black mt-10">Per-Paketan</h3>
            <ul>
              <li className="flex justify-between"><span>Ayam Kota</span><span>25000</span></li>
              <li className="flex justify-between"><span>Ayam Keraton</span><span>25000</span></li>
              <li className="flex justify-between"><span>Ayam Pejantan</span><span>30000</span></li>
              <li className="flex justify-between"><span>Ayam Kampung</span><span>40000</span></li>
              <li className="flex justify-between"><span>Bebek</span><span>50000</span></li>
              <li className="flex justify-between"><span>Ikan Nila</span><span>42000</span></li>
              <li className="flex justify-between"><span>Sop Iga</span><span>35000</span></li>
              <li className="flex justify-between"><span>Ikan Gurame</span><span>35000</span></li>
            </ul>
            </div>
            <h3 className="text-lg font-semibold border-b-2 border-black mt-10">Perlengkapan</h3>
            <ul>
              <li className="flex justify-between"><span>Nasi</span><span>5000</span></li>
              <li className="flex justify-between"><span>Tahu</span><span>2000</span></li>
              <li className="flex justify-between"><span>Tempe</span><span>3000</span></li>
              <li className="flex justify-between"><span>Ati</span><span>3000</span></li>
              <li className="flex justify-between"><span>Ampela</span><span>3000</span></li>
              <li className="flex justify-between"><span>Kepala Ayam</span><span>4000</span></li>
              <li className="flex justify-between"><span>Usus</span><span>5000</span></li>
              <li className="flex justify-between"><span>Kol Goreng</span><span>5000</span></li>
              <li className="flex justify-between"><span>Kepala Bebek</span><span>5000</span></li>
              <li className="flex justify-between"><span>Jengkol Goreng</span><span>10000</span></li>
              <li className="flex justify-between"><span>Petai Goreng</span><span>10000</span></li>
              <li className="flex justify-between"><span>Semur Jengkol</span><span>10000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black mt-1">Perkoffe</h3>
            <ul>
              <li className="flex justify-between"><span>Good Day</span><span>5000</span></li>
              <li className="flex justify-between"><span>ABC Susu</span><span>5000</span></li>
              <li className="flex justify-between"><span>Luwak White Coffee</span><span>5000</span></li>
              <li className="flex justify-between"><span>Creamy Latte</span><span>5000</span></li>
              <li className="flex justify-between"><span>Cappuccino</span><span>7000</span></li>
              <li className="flex justify-between"><span>Mochaccino</span><span>7000</span></li>
            </ul>
            <h3 className="text-lg font-semibold border-b-2 border-black mt-1">Manual Brew</h3>
            <ul>
              <li className="flex justify-between"><span>Espresso</span><span>8000</span></li>
              <li className="flex justify-between"><span>Tubruk</span><span>7000</span></li>
              <li className="flex justify-between"><span>Americano</span><span>13000</span></li>
              <li className="flex justify-between"><span>V60</span><span>15000</span></li>
              <li className="flex justify-between"><span>Vietnam Drip</span><span>15000</span></li>
              <li className="flex justify-between"><span>Ice Coffee Gebid</span><span>15000</span></li>
              <li className="flex justify-between"><span>Ice Coffee Maha</span><span>15000</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
