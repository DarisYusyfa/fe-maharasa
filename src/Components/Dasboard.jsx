import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { AiFillEdit, AiFillDelete, AiOutlineLogout } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dataType, setDataType] = useState('pemesanan');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleMenuClick = (type) => {
    setDataType(type);
    setIsNavOpen(false); // Tutup sidebar setelah item menu diklik
  };

  return (
    <div className="flex min-h-screen">
      <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-100 p-4 transition-transform transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center mb-8">
          <img src="/src/assets/logoadmin.png" alt="Logo" className="h-13 w-13 mr-1" />
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <button onClick={() => handleMenuClick('pemesanan')} className="flex items-center text-gray-700 hover:text-black">
                <span className="mr-2">🏠</span>Dashboard
              </button>
            </li>
            <li className="mb-4">
              <button onClick={() => handleMenuClick('pemesanan')} className="flex items-center text-gray-700 hover:text-black">
                <span className="mr-2">📋</span>Pemesanan
              </button>
            </li>
            <li className="mb-4">
              <button onClick={() => handleMenuClick('penjualan')} className="flex items-center text-gray-700 hover:text-black">
                <span className="mr-2">💲</span>Penjualan
              </button>
            </li>
            <li className="mb-4">
              <button onClick={() => handleMenuClick('reservasi')} className="flex items-center text-gray-700 hover:text-black">
                <span className="mr-2">📅</span>Reservasi
              </button>
            </li>
            <li className="mb-4">
              <button onClick={() => handleMenuClick('pemberitahuan')} className="flex items-center text-gray-700 hover:text-black">
                <span className="mr-2">🔔</span>Pemberitahuan
              </button>
            </li>
            <li className="mb-4">
              <button onClick={() => handleMenuClick('pelanggan')} className="flex items-center text-gray-700 hover:text-black">
                <span className="mr-2">👤</span>Pelanggan
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={`flex-1 p-4 bg-white transition-all duration-300 ${isNavOpen ? 'ml-64' : 'ml-0 lg:ml-64'}`}>
        <header className="flex justify-between items-center mb-8 border-b-2 pb-4">
          <div className="lg:hidden">{isNavOpen ? <FiX className="text-2xl cursor-pointer" onClick={() => setIsNavOpen(false)} /> : <FiMenu className="text-2xl cursor-pointer" onClick={() => setIsNavOpen(true)} />}</div>
          <div className="lg:hidden flex items-center"></div>
          <div className="hidden lg:flex items-center relative lg:w-auto">
            <input type="text" placeholder={`Cari ${dataType === 'pemesanan' ? 'Pemesanan' : dataType === 'penjualan' ? 'Penjualan' : 'Reservasi'}`} className="px-4 py-2 border rounded-lg lg:w-auto" />
            <FiSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
          <div className="flex items-center text-sm relative">
            <FaUserCircle className="text-xl text-gray-700 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
            <span className="ml-2 text-md lg:text-xl cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Admin
            </span>
            {isDropdownOpen && (
              <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <a href="/masuk" className="flex items-center p-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                  <AiOutlineLogout className="mr-2" /> Logout
                </a>
              </div>
            )}
          </div>
        </header>

        {dataType === 'pemesanan' && (
          <div>
            <h1 className="text-2xl font-semibold pb-2 mb-4">Pemesanan</h1>
            <div className="mb-4">
              <input type="text" placeholder="Cari Pemesanan" className="px-4 py-2 border rounded-lg w-full lg:w-auto" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse lg:table ">
                <thead>
                  <tr className="bg-pink-50 hidden lg:table-row shadow-md">
                    <th className="border-b p-4 text-left">Costumer id</th>
                    <th className="border-b p-4 text-left">Costumer</th>
                    <th className="border-b p-4 text-left">Email</th>
                    <th className="border-b p-4 text-left">Tanggal Pemesanan</th>
                    <th className="border-b p-4 text-left">Jumlah orang</th>
                    <th className="border-b p-4 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((id) => (
                    <tr key={id} className="block lg:table-row border-b lg:border-none shadow-smd">
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Costumer id</div>
                        ID {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Costumer</div>
                        Customer {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Email</div>
                        customer{id}@mail.com
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Tanggal Pemesanan</div>
                        2024-06-11
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Jumlah orang</div>5
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Aksi</div>
                        <div className="flex space-x-2">
                          <AiFillEdit className="text-blue-500 cursor-pointer mr-4" />
                          <AiFillDelete className="text-red-500 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {dataType === 'penjualan' && (
          <div>
            <h1 className="text-2xl font-semibold pb-2 mb-4">Penjualan</h1>

            <div className="mb-4">
              <input type="text" placeholder="Cari Penjualan" className="px-4 py-2 border rounded-lg w-full lg:w-auto" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse lg:table ">
                <thead>
                  <tr className="bg-pink-50 hidden lg:table-row shadow-md">
                    <th className="border-b p-4 text-left">Order ID</th>
                    <th className="border-b p-4 text-left">Customer</th>
                    <th className="border-b p-4 text-left">Total</th>
                    <th className="border-b p-4 text-left">Status</th>
                    <th className="border-b p-4 text-left">Tanggal</th>
                    <th className="border-b p-4 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((id) => (
                    <tr key={id} className="block lg:table-row border-b lg:border-none shadow-smd">
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Order ID</div>
                        ID {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Customer</div>
                        Customer {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Total</div>
                        Rp{100000 * id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Status</div>
                        Selesai
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Tanggal</div>
                        2024-06-11
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Aksi</div>
                        <div className="flex space-x-2">
                          <AiFillEdit className="text-blue-500 cursor-pointer mr-4" />
                          <AiFillDelete className="text-red-500 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {dataType === 'reservasi' && (
          <div>
            <h1 className="text-2xl font-semibold pb-2 mb-4">Reservasi</h1>

            <div className="mb-4">
              <input type="text" placeholder="Cari Reservasi" className="px-4 py-2 border rounded-lg w-full lg:w-auto" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse lg:table ">
                <thead>
                  <tr className="bg-pink-50 hidden lg:table-row shadow-md">
                    <th className="border-b p-4 text-left">Reservation ID</th>
                    <th className="border-b p-4 text-left">Customer</th>
                    <th className="border-b p-4 text-left">Email</th>
                    <th className="border-b p-4 text-left">Tanggal Reservasi</th>
                    <th className="border-b p-4 text-left">Jumlah orang</th>
                    <th className="border-b p-4 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((id) => (
                    <tr key={id} className="block lg:table-row border-b lg:border-none shadow-smd">
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Reservation ID</div>
                        ID {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Customer</div>
                        Customer {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Email</div>
                        customer{id}@mail.com
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Tanggal Reservasi</div>
                        2024-06-11
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Jumlah orang</div>5
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Aksi</div>
                        <div className="flex space-x-2">
                          <AiFillEdit className="text-blue-500 cursor-pointer mr-4" />
                          <AiFillDelete className="text-red-500 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {dataType === 'pemberitahuan' && (
          <div>
            <h1 className="text-2xl font-semibold pb-2 mb-4">Pemberitahuan</h1>

            <div className="mb-4">
              <input type="text" placeholder="Cari Pemberitahuan" className="px-4 py-2 border rounded-lg w-full lg:w-auto" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse lg:table ">
                <thead>
                  <tr className="bg-pink-50 hidden lg:table-row shadow-md">
                    <th className="border-b p-4 text-left">Notification ID</th>
                    <th className="border-b p-4 text-left">Message</th>
                    <th className="border-b p-4 text-left">Tanggal</th>
                    <th className="border-b p-4 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((id) => (
                    <tr key={id} className="block lg:table-row border-b lg:border-none shadow-smd">
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Notification ID</div>
                        ID {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Message</div>
                        Pemberitahuan {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Tanggal</div>
                        2024-06-11
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Aksi</div>
                        <div className="flex space-x-2">
                          <AiFillEdit className="text-blue-500 cursor-pointer mr-4" />
                          <AiFillDelete className="text-red-500 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {dataType === 'pelanggan' && (
          <div>
            <h1 className="text-2xl font-semibold pb-2 mb-4">Pelanggan</h1>

            <div className="mb-4">
              <input type="text" placeholder="Cari Pelanggan" className="px-4 py-2 border rounded-lg w-full lg:w-auto" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse lg:table ">
                <thead>
                  <tr className="bg-pink-50 hidden lg:table-row shadow-md">
                    <th className="border-b p-4 text-left">Customer ID</th>
                    <th className="border-b p-4 text-left">Name</th>
                    <th className="border-b p-4 text-left">Email</th>
                    <th className="border-b p-4 text-left">Tanggal Daftar</th>
                    <th className="border-b p-4 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((id) => (
                    <tr key={id} className="block lg:table-row border-b lg:border-none shadow-smd">
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Customer ID</div>
                        ID {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Name</div>
                        Customer {id}
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Email</div>
                        customer{id}@mail.com
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Tanggal Daftar</div>
                        2024-06-11
                      </td>
                      <td className="p-4 block lg:table-cell lg:border lg:border-gray-200 lg:p-2 lg:rounded">
                        <div className="lg:hidden font-bold">Aksi</div>
                        <div className="flex space-x-2">
                          <AiFillEdit className="text-blue-500 cursor-pointer mr-4" />
                          <AiFillDelete className="text-red-500 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
