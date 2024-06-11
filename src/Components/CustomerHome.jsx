import { Link } from 'react-router-dom';

export const CustomerHome = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative" data-aos="fade-up">
        <img src="/src/assets/bghome.png" alt="Hero" className="w-full h-screen object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex  items-center justify-center">
          <div className="text-buttom text-white px-4">
            <h2 className="text-4xl font-bold">Sajian Lezat, Kenangan Tak Terlupakan</h2>
            <p className="mt-4 text-xl text-left ">
              Tersedia cita rasa lezat di Rumah Makan Miharasa! tempat di mana
              <p />
              setiap suapan menghadirkan kelezatan yang tiada tara. Nikmati pengalaman
              <p />
              kuliner yang menggugah selera dengan menu-menu istimewa kami.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-400 text-white hover:bg-gray-600 font-bold rounded-xl">Lihat Menu</button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-yellow-100" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Fasilitas</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0" data-aos="fade-right">
              <img src="/src/assets/ruang.png" alt="Facility" className="w-120  object-cover mb-4" />
            </div>
            <div className="w-full md:w-1/2 items-center text-center flex justify-center px-4 r" data-aos="fade-left">
              <h2 className="text-3xl font-semibold  mb-8">
                Selain itu, rumah makan ini juga dilengkapi dengan dapur yang bersih dan terbuka sehingga pengunjung dapat melihat langsung proses pembuatan makanan.
                <p />
                Rumah makan Miharasa juga menyediakan layanan pemesanan untuk acara spesial seperti ulang tahun atau acara keluarga lainnya.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Special Menu Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Menu Spesial</h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-8 border-b-4 border-black">Menu best seller Rumah makan maharasa</h2>
              <p>
                Teksturnya yang renyah dan bumbunya yang meresap dengan baik menjadikan kangkung ini salah satu menu favorit pengunjung. Kesegarannya juga terjaga karena bahan-bahannya dipilih dengan baik dan dimasak dengan teknik yang
                tepat. Secara keseluruhan, hidangan kangkung di sini memberikan pengalaman rasa yang memuaskan dan autentik.
              </p>
            </div>
            <div className="w-full items-center justify-center md:w-1/2 px-4" data-aos="fade-left">
              <img src="/src/assets/bgmangkok.jpg"></img>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/reservasi">
              <button className="px-6 py-3 bg-blue-700 text-white font-bold rounded-md mr-4 hover:bg-blue-800">Reservasi</button>
            </Link>
            <Link to="/menu">
              <button className="px-6 py-3 bg-blue-700 text-white font-bold rounded-md mr-4 hover:bg-blue-800">List Menu lengkap</button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-yellow-100" data-aos="fade-up">
        <div className="container mx-auto bg-cover h-screen px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tentang Rumah Makan Maharasa</h2>
          <div className="text-center font-poppins">
            <img src="/src/assets/bghome.png" alt="About" className=" w-full shadow-md h-120 object-cover rounded-xl" />
            <p>
              Rumah Makan Maharasa, terletak di Garut, adalah destinasi kuliner yang menawarkan pengalaman gastronomi yang tak terlupakan. Dengan komitmen untuk menyajikan cita rasa autentik dan berkualitas, kami menggunakan bahan-bahan
              segar dan bumbu-bumbu tradisional yang dipilih dengan teliti. Setiap hidangan kami disajikan dengan penuh kehagatan dan keahlian, menciptakan kenangan yang memikat bagi setiap pengunjung. Dari masakan khas Sunda hingga
              hidangan modern dengan sentuhan lokal, Rumah Makan Maharasa menyediakan pilihan menu yang memuaskan selera setiap tamu. Kami bangga menjadi bagian dari komunitas kuliner Garut dan berkomitmen untuk terus memberikan pengalaman
              makan yang istimewa bagi semua pelanggan kami.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
