import Navbar from '../../Components/Navbar';
import { Menuitem } from '../../Components/Menuitem';
import { Footer } from '../../Components/Footer';
export const Home = () => {

  return (
    <>
      <Navbar />
      <div className="relative h-screen">
        <img
          src="/src/assets/bghome.png"
          className="w-full h-full object-cover"
          alt="Slide"
        />
        <div className="absolute top-1/4 md:top-32 left-0 bg-opacity-50 text-white p-4 w-full text-4xl md:text-6xl text-center md:text-left">
          Sajian Lezat, kenangan Tak Terlupakan
        </div>
        <div className="absolute top-2/3 md:top-80 left-0 bg-opacity-50 text-white p-4 w-full text-lg md:text-xl text-center md:text-left">
          Tersedia cita Rasa Lezat Di rumah makan Maharasa! Tempat dimana Setiap
          <p>Suapan menghadirkan Kelezatan yang tiada tara. Nikmati pengalaman</p>
          <p>kuliner yang menggungah selera dengan menu-menu istemewa kami.</p>
        </div>
        <figcaption className="absolute left-0 bottom-0 mb-4 ml-4 text-lg text-white">
          <button className="font-bold text-xs md:text-sm bg-black text-black-700 hover:text-white py-2 px-4 border border-black rounded">
            Lihat Menu
          </button>
        </figcaption>
         </div>

         <div className="relative bg-cover" style={{ backgroundImage: `url('src/assets/bggreen.png')` }}>
        <div className="mx-auto px-4 md:px-0 flex flex-col items-center justify-center h-screen text-center">
          <div className="font-Poppins text-3xl font-bold text-black">
            NOW OPEN
          </div>
          <div className="mt-4 font-Poppins text-3xl font-bold text-black">
            RUMAH MAKAN MAHARASA
          </div>
          <div className="mt-4 font-Poppins text-xl text-black">
            Alamat: Tarogong, South Tarogong, Garut Regency, West Java
          </div>
          <div className="mt-4 font-Poppins text-xl text-black">
            Hours: Closed - Opens 9.00 am
          </div>
          <div className="mt-4 font-Poppins text-xl text-black">
            Telephone: 0853-1422-7944
          </div>
          <div className="mt-8 w-full">
            <h1 className="font-bold text-3xl px-4">PILIHAN MENU</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto max-w-screen-lg overflow-x-scroll no-scrollbar py-6">
              <Menuitem />
              <Menuitem />
              <Menuitem />
              <Menuitem />
              <Menuitem />
            </div>
            <div className="relative w-full bg-yellow-500 shadow-md">
            <div className="container mx-auto px-4 py-2">
            <div className="lg:flex lg:items-center lg:justify-center lg:h-20">
            <div className="flex items-center justify-center h-20 lg:h-full">
            <h1 className="text-black font-bold text-xl lg:text-3xl">MENU YANG TERSEDIA</h1>
            </div>
            </div>
            </div>
            </div>
          </div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto max-w-screen-lg overflow-x-scroll no-scrollbar py-6">
              <Menuitem />
              <Menuitem />
              <Menuitem />
              <Menuitem />
              <Menuitem />
            </div>
          <div className="relative w-full bg-yellow-500 shadow-md">
          <div className="container mx-auto px-4 py-2">
          <div className="lg:flex lg:items-center lg:justify-center lg:h-20">
          <div className="flex flex-col items-center justify-center h-20 lg:h-full">
          <h1 className="text-black font-bold text-xl lg:text-3xl">Tentang</h1>
          <p className="text-center">Rumah Makan Maharasa</p>
         </div>
        </div>
        </div>
         </div>
         <div className="relative h-screen">
        <img
          src="/src/assets/bghome.png"
          className="w-full h-full object-cover"
          alt="Slide"
        />
     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 text-white p-4 w-full text-center">
     <div className="mt-4 font-Poppins text-base md:text-2xl lg:text-3xl font-bold text-white backdrop-blur-sm bg-white/30 rounded-md p-6">
    <p>Rumah Makan Maharasa, terletak di Garut, adalah destinasi kuliner yang menawarkan pengalaman gastronomi yang tak terlupakan.</p>
    <p>Dengan komitmen untuk menyajikan cita rasa autentik dan berkualitas, kami menggunakan bahan-bahan segar dan bumbu-bumbu tradisional yang dipilih dengan teliti.</p>
    <p>Setiap hidangan kami disajikan dengan penuh kehangatan dan keahlian, menciptakan kenangan yang memikat bagi setiap pengunjung.</p>
    <p>Dari masakan khas Sunda hingga hidangan modern dengan sentuhan lokal, Rumah Makan Maharasa menyediakan pilihan menu yang memuaskan selera setiap tamu.</p>
    <p>Kami bangga menjadi bagian dari komunitas kuliner Garut dan berkomitmen untuk terus memberikan pengalaman makan yang istimewa bagi semua pelanggan kami.</p>
    </div>
    </div>
    </div>
    </div>

        <Footer />
    </>
  );
};

