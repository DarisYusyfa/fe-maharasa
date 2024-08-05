import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds) of slide changes
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true, // Make the slider vertical on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true, // Make the slider vertical on very small screens
        },
      },
    ],
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Navbar />
      <div id="home" className="bg-gray-300 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen p-6 md:p-12 bg-gray-300 overflow-hidden">
          {/* Deskripsi */}
          <div className="text-center md:text-left max-w-3xl px-4 md:px-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Sajian Lezat, Kenangan Tak Terlupakan</h1>
            <p className="text-base md:text-lg lg:text-xl mb-6">
              Tersedia cita rasa lezat di Rumah Makan Maharasa! Tempat di mana setiap suapan menghadirkan kelezatan yang tiada tara. Nikmati pengalaman kuliner yang menggugah selera dengan menu-menu istimewa kami.
            </p>
            <Link to="/menu">
              <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300">Lihat Menu</button>
            </Link>
          </div>

          {/* Gambar */}
          <div className="mt-8 md:mt-0 md:ml-10 flex justify-center">
            <img src="/assets/design.png" alt="food" className="w-full max-w-xs md:max-w-md lg:max-w-lg hidden md:block" />
          </div>
        </div>

        <section className="py-12 text-center bg-white bg-opacity-50 px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold font-Poppins">Now Open</h2>
          <p className="mt-4 text-3xl font-bold font-Poppins">Rumah Makan Maharasa</p>
          <p className="text-xl font-semibold font-Poppins mt-2">Alamat: Tarogong, South Tarogong, Garut Regency, West Java</p>
          <p className="text-xl font-semibold font-Poppins">Hours: Closed · Opens 9.00 am</p>
          <p className="text-xl font-semibold font-Poppins">Telepon: 0853-1422-7944</p>
        </section>

        <section id="Fasilitas" className="py-12 bg-white bg-opacity-50" data-aos="fade-up">
          <div className="max-w-6xl mx-auto p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-t-2xl shadow-xl overflow-hidden" data-aos="fade-up">
              <img src="/assets/ruang.png" alt="VIP Room" className="w-full h-48 object-cover p-2 rounded-2xl shadow-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Ruang VIP</h3>
                <p className="mt-2">Ruang VIP di Rumah Makan Maharasa menawarkan privasi dan kenyamanan ekstra.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded shadow-lg overflow-hidden rounded-t-2xl">
              <img src="/assets/ruang2.png" alt="Dining Area" className="w-full h-48 object-cover p-2 rounded-2xl shadow-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Ruang Besar</h3>
                <p className="mt-2">Ruangan ini luas dan dilengkapi dengan meja besar serta kursi empuk, ideal untuk menjamu keluarga besar.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded shadow-lg overflow-hidden rounded-t-2xl">
              <img src="/assets/ruang3.png" alt="Traditional Decoration" className="w-full h-48 object-cover p-2 rounded-2xl shadow-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Dekorasi Tradisional</h3>
                <p className="mt-2">Dengan dekorasi tradisional yang khas, meja-meja yang teratur rapi, dan kursi-kursi nyaman.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded shadow-lg overflow-hidden rounded-t-2xl">
              <img src="/assets/ruang4.png" alt="Outdoor Area" className="w-full h-48 object-cover p-2 rounded-2xl shadow-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Area Outdoor</h3>
                <p className="mt-2">Dengan dekorasi tradisional yang khas, meja-meja yang teratur rapi dan kursi-kursi nyaman tersusun dengan indah.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="px-6 bg-gray-200 relative flex flex-col items-center py-12 lg:flex-row lg:justify-end lg:items-start" style={{ fontFamily: 'Times New Roman' }}>
          <div className="lg:w-1/2 text-center lg:text-left max-w-xl mb-8 lg:mb-0 mt-8">
            {' '}
            {/* Added margin-top */}
            <h1 className="text-3xl font-bold mb-6">
              MENU <br />
              YANG TERSEDIA
            </h1>
            <p className="text-lg">
              Menu tersedia hari ini menawarkan berbagai <br /> hidangan lezat yang dapat memuaskan selera <br /> Anda. Kami memiliki pilihan hidangan <br />
              pembuka, seperti sup ayam dan salad segar, yang <br />
              sempurna untuk memulai santapan Anda. <br />
              Untuk hidangan utama, kami menyajikan <br /> beragam pilihan, mulai dari Makan paket <br /> Keluarga, ikan bakar dengan bumbu khas,
              <br /> hingga nasi liwet dengan perpaduan lauk yang <br /> menggugah selera.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-8">
            <div className="w-full max-w-md">
              <Slider {...settings}>
                <div>
                  <img src="/assets/nagaajus.png" alt="Iced Coffee" className="w-full h-64 object-cover mx-auto" />
                </div>
                <div>
                  <img src="/assets/kopies.png" alt="Coffee" className="w-full h-64 object-cover mx-auto" />
                </div>
              </Slider>
            </div>
          </div>
          <img src="/assets/shapex.png" alt="Decorative Shape" className="absolute top-0 left-0 w-32 h-32" />
          <img src="/assets/shapey.png" alt="Decorative Shape" className="absolute bottom-0 right-0 w-32 h-32" />
        </section>

        {/* About Section */}
        <div id="About" className="min-h-screen bg-center bg-cover bg-gray-300 bg-opacity-50 flex items-center justify-center py-12 px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
            {/* Gambar */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <figure className="w-full max-w-lg">
                <img src="/assets/desain1.png" alt="Desain" className="w-full h-auto object-cover" />
              </figure>
            </div>

            {/* Deskripsi */}
            <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
              <h2 className="font-Lusitana text-3xl md:text-4xl font-bold mb-4 text-gray-800">Tentang Rumah Makan Maharasa</h2>
              <p className={`text-base md:text-lg overflow-hidden ${isExpanded ? 'max-h-none' : 'max-h-40'}`}>
                Rumah Makan Maharasa, terletak di Garut, adalah destinasi kuliner yang menawarkan pengalaman gastronomi yang tak terlupakan. Dengan komitmen untuk menyajikan cita rasa autentik dan berkualitas, kami menggunakan bahan-bahan
                segar dan bumbu-bumbu tradisional yang dipilih dengan teliti. Setiap hidangan kami disajikan dengan penuh kehangatan dan keahlian, menciptakan kenangan yang memikat bagi setiap pengunjung. Dari masakan khas Sunda hingga
                hidangan modern dengan sentuhan lokal, Rumah Makan Maharasa menyediakan pilihan menu yang memuaskan selera setiap tamu. Kami bangga menjadi bagian dari komunitas kuliner Garut dan berkomitmen untuk terus memberikan
                pengalaman makan yang istimewa bagi semua pelanggan kami.
              </p>
              <button onClick={() => setIsExpanded(!isExpanded)} className="mt-4 px-4 py-2 text-blue-600 hover:text-blue-800 focus:outline-none">
                {isExpanded ? 'Tutup' : 'Lihat Selengkapnya'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
