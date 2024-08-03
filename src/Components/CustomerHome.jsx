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

  return (
    <div className="font-sans bg-gray-300">
      {/* Hero Section */}
      <section className="relative" data-aos="fade-up">
      <div className="  bg-white  bg-opacity-50 flex items-center h-screen">
          <div className=" h-full flex flex-col justify-center items-stretch">
            <h1 className="text-[56px] font-Poppins font-semibold  ml-[2rem] text-black"> Sajian Lezat, Kenangan Tak Terlupakan</h1>
            <p className="mt-4 text-lg text-left text-black font-bold max-w-md ml-[2rem] ">
              Tersedia cita rasa lezat di Rumah Makan Maharasa! Tempat di mana setiap suapan menghadirkan kelezatan yang tiada tara. Nikmati pengalaman kuliner yang menggugah selera dengan menu-menu istimewa kami"
            </p>
              <Link to="/menu">
              <button className="ml-[2rem] px-[25px] hover:bg-blue-900 rounded-[8px] py-1 mt-[40px]  bg-purple-950 text-white font-semibold ">Lihat Menu</button>
               </Link>
          </div>
         <div className=' mt-[2rem]'>
          <figure>
            <img src="/src/assets/design.png" alt="food" srcset="" />
          </figure>
         </div>
        </div>
        {/* Scroll Instruction and Button */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${fadeOut ? 'fade-out scroll-out' : 'fade-out'}`}>
          <p className="text-black  text-lg mb-2">Scroll Untuk Reservasi</p>
          <div className="animate-bounce w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white  bg-opacity-50" data-aos="fade-up">
        <div className="container  mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Fasilitas</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0" data-aos="fade-right">
              <img src="/src/assets/ruang.png" alt="Facility" className="w-120 object-cover mb-4" />
            </div>
            <div className="w-full md:w-1/2 items-center text-center flex justify-center px-4" data-aos="fade-left">
              <h2 className="text-3xl font-semibold mb-8">
                Selain itu, rumah makan ini juga dilengkapi dengan dapur yang bersih dan terbuka sehingga pengunjung dapat melihat langsung proses pembuatan makanan.
                <br />
                Rumah makan Miharasa juga menyediakan layanan pemesanan untuk acara spesial seperti ulang tahun atau acara keluarga lainnya.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Special Menu Section */}
      <section className="py-16 bg-white  bg-opacity-50" data-aos="fade-up">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-[4rem] font-Lusitana">Menu Spesial</h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0" data-aos="fade-right">
              <h2 className="text-3xl text-left font-bold mb-8 ml-[9rem] max-w-[90rem]  ">Menu Best Seller Rumah Makan Maharasa</h2>
              <p className='max-w-[29rem] text-left ml-[7rem] text-[20px]'>
                Teksturnya yang renyah dan bumbunya yang meresap dengan baik menjadikan kangkung ini salah satu menu favorit pengunjung. Kesegarannya juga terjaga karena bahan-bahannya dipilih dengan baik dan dimasak dengan teknik yang
                tepat. Secara keseluruhan, hidangan kangkung di sini memberikan pengalaman rasa yang memuaskan dan autentik.
              </p>
            </div>
            <div className="mt-[1rem] items-center justify-end md:w-1/2 px-4" data-aos="fade-left">
              <img src="/src/assets/bgmangkok.png" className='ml-[6rem] w-[25rem] h-[25rem]' alt="Special Menu" />
            </div>
          </div>

          <div className="mt-5 mr-[41rem] ">
            <Link to="/reservasi">
              <button className="px-6 py-1 bg-blue-700 text-white font-bold rounded-md mr-4 hover:bg-blue-800">Reservasi</button>
            </Link>
            <Link to="/menu">
              <button className="px-6 py-1 bg-blue-700 text-white font-bold rounded-md mr-4 hover:bg-blue-800">List Menu lengkap</button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="min-h-screen bg-center bg-cover flex items-center bg-white bg-opacity-50">
           <div className='w-[40%] px-6'>
              <figure>
                <img src="/src/assets/desain1.png" alt="" />
              </figure>
            </div>
            <div className=" backdrop-filter backdrop-blur-lg p-6 md:p-20 rounded-lg max-w-6xl mx-auto  text-black text-center  text-lg md:text-2xl">
              <h2 className=" font-Lusitana w-screen text-3xl max-w-[20rem] ml-[7rem]  font-bold  p-2 text-gray-800 ">
               Tentang Rumah Makan Maharasa
              </h2>
              <p className='text-left max-w-[40rem] text-[1rem]'>
                Rumah Makan Maharasa, terletak di Garut, adalah destinasi kuliner yang menawarkan pengalaman gastronomi yang tak terlupakan. Dengan komitmen untuk menyajikan cita rasa autentik dan berkualitas, kami menggunakan bahan-bahan
                segar dan bumbu-bumbu tradisional yang dipilih dengan teliti. Setiap hidangan kami disajikan dengan penuh kehangatan dan keahlian, menciptakan kenangan yang memikat bagi setiap pengunjung. Dari masakan khas Sunda hingga
                hidangan modern dengan sentuhan lokal, Rumah Makan Maharasa menyediakan pilihan menu yang memuaskan selera setiap tamu. Kami bangga menjadi bagian dari komunitas kuliner Garut dan berkomitmen untuk terus memberikan
                pengalaman makan yang istimewa bagi semua pelanggan kami.
              </p>
            </div>
        </div>
    </div>
  );
};
