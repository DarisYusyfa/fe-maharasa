import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaUser,
  FaClipboardList,
  FaChair,
} from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export const Order = () => {
  const [policyChecked, setPolicyChecked] = useState(true);
  const [offersChecked, setOffersChecked] = useState(true);
  const [eventDetails, setEventDetails] = useState({
    date: "",
    time: "",
    attendees: "",
    specialEvent: "",
    table: "",
    tableName: "",
  });

  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const storedEvent = localStorage.getItem("selectedEvent");

    const queryParams = new URLSearchParams(location.search);
    setEventDetails({
      date: queryParams.get("date") || "",
      time: queryParams.get("time") || "",
      attendees: queryParams.get("attendees") || "",
      specialEvent: storedEvent || "Acara Khusus",
      table: queryParams.get("table") || "",
      tableName: queryParams.get("tabbleName") || "",
    });
  }, [location.search]);

  const handleConfirm = async (e) => {
    e.preventDefault();

    if (
      !customerDetails.name ||
      !customerDetails.email ||
      !customerDetails.phone ||
      !eventDetails.date ||
      !eventDetails.time ||
      !eventDetails.attendees
    ) {
      alert("Harap isi semua kolom yang diperlukan");
      return;
    }

    const reservationData = {
      name: customerDetails.name,
      email: customerDetails.email,
      phone_number: customerDetails.phone,
      reservation_date: eventDetails.date,
      reservation_time: eventDetails.time,
      number_of_people: parseInt(eventDetails.attendees),
      desc: eventDetails.specialEvent,
      desk_id: parseInt(eventDetails.table), // Ubah deskId menjadi eventDetails.table
    };

    console.log(reservationData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}reservation/reservation`,
        reservationData
      );
      console.log(response); // Log respons untuk melihat kode status dan data

      if (response.status === 200 || response.status === 201) {
        navigate("/Confirmation"); // Arahkan ke komponen Confirmation
      } else if (response.data && response.data.message) {
        alert(response.data.message);
      } else {
        alert("Reservasi gagal");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat melakukan reservasi", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Reservasi gagal");
      }
    }
  };

  return (
    <div className="min-h-screen mx-auto p-6 bg-teal-200 shadow-md rounded-lg justify-center items-center">
      <h1
        className="text-xl font-bold mb-4 text-center bg-gray-300 p-3 rounded-md"
        data-aos="fade-down"
      >
        Registrasi Form
      </h1>
      <form onSubmit={handleConfirm}>
        <div className="mb-6 p-4 bg-gray-100 rounded-lg" data-aos="fade-right">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Informasi Pelanggan
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-gray-300 rounded-md shadow-sm"
              value={customerDetails.name}
              onChange={(e) =>
                setCustomerDetails({ ...customerDetails, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-300 rounded-md shadow-sm"
              value={customerDetails.email}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              No Telpn
            </label>
            <div className="flex items-center">
              <span className="mr-2">+62</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border-gray-300 rounded-md shadow-sm"
                value={customerDetails.phone}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    phone: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-gray-100 rounded-lg" data-aos="fade-left">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Detail Acara
          </h2>
          <div className="mb-4">
            <div
              className="flex items-center mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaRegCalendarAlt className="mr-2" />
              <span className="text-gray-700">{eventDetails.date}</span>
            </div>
            <div
              className="flex items-center mb-2 border-t-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaRegClock className="mr-2" />
              <span className="text-gray-700">{eventDetails.time}</span>
            </div>
            <div
              className="flex items-center mb-2 border-t-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaUser className="mr-2" />
              <span className="text-gray-700">{eventDetails.attendees}</span>
            </div>
            <div
              className="flex items-center mb-2 border-t-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaChair className="mr-2" />
              <span className="text-gray-700">{eventDetails.tableName}</span>
            </div>
            <div
              className="flex items-center mb-2 border-t-2 border-b-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <FaClipboardList className="mr-2" />
              <span className="text-gray-700">{eventDetails.specialEvent}</span>
              <Link
                to="/event"
                className="ml-auto bg-gray-300 p-1 rounded-sm mt-1 mb-1 text-sm"
              >
                Add +
              </Link>
            </div>
          </div>
          <div className="mb-4">
            <div
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <input
                type="checkbox"
                id="policy"
                name="policy"
                className="mt-1"
                checked={policyChecked}
                onChange={() => setPolicyChecked(!policyChecked)}
              />
              <label className="ml-2 text-gray-700" htmlFor="policy">
                I agree to the required policy
                <BsInfoCircle className="inline ml-1" />
              </label>
            </div>
            <div
              className="flex items-start mt-2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <input
                type="checkbox"
                id="offers"
                name="offers"
                className="mt-1"
                checked={offersChecked}
                onChange={() => setOffersChecked(!offersChecked)}
              />
              <label className="ml-2 text-gray-700" htmlFor="offers">
                Receive news and offers for this venue
                <BsInfoCircle className="inline ml-1" />
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Konfirmasi
        </button>
      </form>
    </div>
  );
};

export default Order;
