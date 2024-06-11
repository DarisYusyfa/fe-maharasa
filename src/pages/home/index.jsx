import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-300 mx-1">
        <header className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url('/src/assets/bghome.png')` }}>
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center" data-aos="fade-up">
            <h1 className="text-5xl font-bold justify-center text-center">Sajian Lezat, Kenangan Tak Terlupakan</h1>
            <p className="mt-4 text-lg text-center max-w-xl">
              Tersedia cita rasa lezat di Rumah Makan Maharasa! Tempat di mana setiap suapan menghadirkan kelezatan yang tiada tara. Nikmati pengalaman kuliner yang menggugah selera dengan menu-menu istimewa kami.
            </p>
            <Link to="/menu">
              <button className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold rounded">Lihat Menu</button>
            </Link>
          </div>
        </header>

        <section className="py-12 text-center bg-lime-200" data-aos="fade-up">
          <h2 className="text-3xl font-bold font-Poppins">Now Open</h2>
          <p className="mt-4 text-3xl font-bold font-Poppins">Rumah Makan Maharasa</p>
          <p className="text-xl font-semibold font-Poppins mt-2">Alamat: Tarogong, South Tarogong, Garut Regency, West Java</p>
          <p className="text-xl font-semibold font-Poppins">Hours: Closed · Opens 9.00 am</p>
          <p className="text-xl font-semibold font-Poppins">Telepon: 0853-1422-7944</p>
        </section>

        <section className="py-12 bg-lime-200" data-aos="fade-up">
          <div className="max-w-6xl mx-auto p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-t-2xl shadow-xl overflow-hidden" data-aos="fade-up">
              <img src="/src/assets/ruang.png" alt="VIP Room" className="w-full h-48 object-cover p-2 rounded-2xl shadow-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Ruang VIP</h3>
                <p className="mt-2">Ruang VIP di Rumah Makan Maharasa menawarkan privasi dan kenyamanan ekstra.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded shadow-lg overflow-hidden rounded-t-2xl" data-aos="fade-up">
              <img src="/src/assets/ruang2.png" alt="Dining Area" className="w-full h-48 object-cover p-2 rounded-2xl shadow-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Ruang Besar</h3>
                <p className="mt-2">Ruangan ini luas dan dilengkapi dengan meja besar serta kursi empuk, ideal untuk menjamu keluarga besar.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded shadow-lg overflow-hidden rounded-t-2xl" data-aos="fade-up">
              <img src="/src/assets/ruang3.png" alt="Traditional Decoration" className="w-full h-48 object-cover p-2 rounded-2xl shadow-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Dekorasi Tradisional</h3>
                <p className="mt-2">Dengan dekorasi tradisional yang khas, meja-meja yang teratur rapi, dan kursi-kursi nyaman.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded shadow-lg overflow-hidden rounded-t-2xl" data-aos="fade-up">
              <img src="/src/assets/ruang4.png" alt="Outdoor Area" className="w-full h-48 object-cover p-2 rounded-2xl shadow-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Area Outdoor</h3>
                <p className="mt-2">Dengan dekorasi tradisional yang khas, meja-meja yang teratur rapi dan kursi-kursi nyaman tersusun dengan indah.</p>
              </div>
            </div>
          </div>
        </section>

        <h2 className="text-3xl font-bold text-center p-6 text-gray-800 bg-yellow-400 shadow-xl mb-1" data-aos="fade-up">
          Menu yang Tersedia
        </h2>

        <section className="py-12 bg-lime-200">
          <div className="max-6xl mx-auto">
            <Slider {...settings}>
              <div className="px-2">
                <div className="bg-white rounded shadow-lg overflow-hidden" data-aos="fade-up">
                  <img src="/src/assets/eskopi.png" alt="Menu 1" className="w-full h-64 sm:h-34 lg:h-64 xl:h-64 object-cover p-2 rounded-xl" />
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white rounded shadow-lg overflow-hidden" data-aos="fade-up">
                  <img src="/src/assets/jusjeruk.png" alt="Menu 2" className="w-full h-64 sm:h-34 lg:h-64 xl:h-64 object-cover p-2 rounded-xl" />
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white rounded shadow-lg overflow-hidden" data-aos="fade-up">
                  <img src="/src/assets/jusnaga.png" alt="Menu 3" className="w-full h-64 sm:h-34 lg:h-64 xl:h-64 object-cover p-2 rounded-xl" />
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white rounded shadow-lg overflow-hidden" data-aos="fade-up">
                  <img src="/src/assets/kopi.png" alt="Menu 4" className="w-full h-64 sm:h-34 lg:h-64 xl:h-64 object-cover p-2 rounded-xl" />
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white rounded shadow-lg overflow-hidden" data-aos="fade-up">
                  <img src="/src/assets/ayambakar.png" alt="Menu 4" className="w-full h-64 sm:h-34 lg:h-64 xl:h-64 object-cover p-2 rounded-xl" />
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <h2 className="text-3xl font-bold text-center p-2 text-gray-800 bg-yellow-400 shadow-xl mb-1" data-aos="fade-up">
          Tentang
          <br /> Rumah Makan Maharasa
        </h2>
        <div className="min-h-screen bg-center bg-cover p-2" style={{ backgroundImage: `url('/src/assets/bgtentang.png')` }}>
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 md:p-20 rounded-lg max-w-6xl mx-auto text-black text-center shadow-lg text-lg md:text-2xl" data-aos="fade-left">
              <p>
                Rumah Makan Maharasa, terletak di Garut, adalah destinasi kuliner yang menawarkan pengalaman gastronomi yang tak terlupakan. Dengan komitmen untuk menyajikan cita rasa autentik dan berkualitas, kami menggunakan bahan-bahan
                segar dan bumbu-bumbu tradisional yang dipilih dengan teliti. Setiap hidangan kami disajikan dengan penuh kehangatan dan keahlian, menciptakan kenangan yang memikat bagi setiap pengunjung. Dari masakan khas Sunda hingga
                hidangan modern dengan sentuhan lokal, Rumah Makan Maharasa menyediakan pilihan menu yang memuaskan selera setiap tamu. Kami bangga menjadi bagian dari komunitas kuliner Garut dan berkomitmen untuk terus memberikan
                pengalaman makan yang istimewa bagi semua pelanggan kami.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
