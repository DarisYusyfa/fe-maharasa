import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CustomerHome } from '../../Components/CustomerHome';
import { Footer } from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <Navbar />
    <div className="">
      <CustomerHome />
    </div>
    <Footer/>
    </>
  );
};