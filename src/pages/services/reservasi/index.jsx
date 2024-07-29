import Navbar from '../../../Components/Navbar';

import { Footer } from '../../../Components/Footer';
import { Booking } from '../../../Components/Booking';

export const Reservasi = () => {
  return (
    <>
      <Navbar />
      <div className="relative max-h-screen justify-center pt-12">
        <Booking />
        <Footer />
      </div>
    </>
  );
};
