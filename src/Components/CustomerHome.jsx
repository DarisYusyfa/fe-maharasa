/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export const CustomerHome = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeThreshold = 200;
      setFadeOut(scrollPosition > fadeThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="font-sans bg-gray-300">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center" data-aos="fade-up" style={{ backgroundImage: `url('/assets/hero-bg.png')` }}>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen p-6 md:p-12">
          <div className="text-center md:text-left max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Sajian Lezat, Kenangan Tak Terlupakan</h1>
            <p className="text-base md:text-lg mb-6">
              Tersedia cita rasa lezat di Rumah Makan Maharasa! Tempat di mana setiap suapan menghadirkan kelezatan yang tiada tara. Nikmati pengalaman kuliner yang menggugah selera dengan menu-menu istimewa kami.
            </p>
            <Link to="/menu">
              <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300">Lihat Menu</button>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:ml-10 px-4 hidden md:block">
            <img src="/assets/design.png" alt="food" className="w-full max-w-sm md:max-w-md" />
          </div>
        </div>

        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${fadeOut ? 'fade-out scroll-out' : 'fade-out'}`}>
          <p className="text-black text-lg mb-2">Scroll Untuk Reservasi</p>
          <div className="animate-bounce w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className="py-16 bg-white bg-opacity-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Fasilitas</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 px-4">
              <img src="/assets/ruang.png" alt="Facility" className="w-full object-cover mb-4" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
                Selain itu, rumah makan ini juga dilengkapi dengan dapur yang bersih dan terbuka sehingga pengunjung dapat melihat langsung proses pembuatan makanan.
                <br />
                Rumah makan Miharasa juga menyediakan layanan pemesanan untuk acara spesial seperti ulang tahun atau acara keluarga lainnya.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Spesial Section */}
      <section className="py-16 bg-white bg-opacity-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-Lusitana">Menu Spesial</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Menu Best Seller Rumah Makan Maharasa</h2>
              <p className="text-base md:text-lg text-center md:text-left">
                Teksturnya yang renyah dan bumbunya yang meresap dengan baik menjadikan kangkung ini salah satu menu favorit pengunjung. Kesegarannya juga terjaga karena bahan-bahannya dipilih dengan baik dan dimasak dengan teknik yang
                tepat. Secara keseluruhan, hidangan kangkung di sini memberikan pengalaman rasa yang memuaskan dan autentik.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4 flex justify-center">
              <img src="/assets/bgmangkok.png" className="w-full md:w-3/4 h-auto" alt="Special Menu" />
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <Link to="/reservasi">
              <button className="px-6 py-2 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800">Reservasi</button>
            </Link>
            <Link to="/menu">
              <button className="px-6 py-2 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800">List Menu Lengkap</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <div id="About" className="min-h-screen bg-center bg-cover bg-gray-300 bg-opacity-50 flex items-center justify-center py-12 px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8">
          {/* Gambar */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <figure className="w-full max-w-lg">
              <img src="/assets/desain1.png" alt="Desain" className="w-full h-auto object-cover" />
            </figure>
          </div>

          {/* Deskripsi */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4">
            <h2 className="font-Lusitana text-2xl md:text-3xl font-bold mb-4 text-gray-800">Tentang Rumah Makan Maharasa</h2>
            <p className={`text-base md:text-lg overflow-hidden ${isExpanded ? 'max-h-none' : 'max-h-40'}`}>
              Rumah Makan Maharasa, terletak di Garut, adalah destinasi kuliner yang menawarkan pengalaman gastronomi yang tak terlupakan. Dengan komitmen untuk menyajikan cita rasa autentik dan berkualitas, kami menggunakan bahan-bahan
              segar dan bumbu-bumbu tradisional yang dipilih dengan teliti. Setiap hidangan kami disajikan dengan penuh kehangatan dan keahlian, menciptakan kenangan yang memikat bagi setiap pengunjung. Dari masakan khas Sunda hingga
              hidangan modern dengan sentuhan lokal, Rumah Makan Maharasa menyediakan pilihan menu yang memuaskan selera setiap tamu. Kami bangga menjadi bagian dari komunitas kuliner Garut dan berkomitmen untuk terus memberikan pengalaman
              makan yang istimewa bagi semua pelanggan kami.
            </p>
            <button onClick={() => setIsExpanded(!isExpanded)} className="mt-4 px-4 py-2 text-blue-600 hover:text-blue-800 focus:outline-none">
              {isExpanded ? 'Tutup' : 'Lihat Selengkapnya'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
