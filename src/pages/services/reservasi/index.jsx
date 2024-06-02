import Navbar from '../../../Components/Navbar';

import { Footer } from '../../../Components/Footer';
import { Calender } from '../../../Components/Calender';

export const Reservasi = () => {
  return (
    <>
      <Navbar />
      <div className="relative max-h-screen justify-center pt-12">
        <Calender />
        <Footer />
      </div>
      </>
      );
    };