import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiFilter, FiMenu, FiX } from 'react-icons/fi';
import { AiFillEdit, AiFillDelete, AiOutlineLogout, AiOutlineExport, AiOutlineShareAlt } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { saveAs } from 'file-saver';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dataType, setDataType] = useState('dashboard');
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
    setIsNavOpen(false);
  };

  const handleExport = () => {
    const blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'dashboard_data.txt');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Dashboard Data',
          text: 'Check out this data from the dashboard',
          url: window.location.href,
        })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch((err) => {
          console.error('Error sharing:', err);
        });
    } else {
      console.log('Share not supported on this browser, do it the old way.');
      // Add fallback for browsers that don't support Web Share API
    }
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [300, 500, 400, 700, 600, 800],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  const doughnutData = {
    labels: ['Pemesanan', 'Penjualan', 'Reservasi', 'Pelanggan'],
    datasets: [
      {
        data: [25, 50, 15, 10],
        backgroundColor: ['#8c9eff', '#8c009f', '#ffc0cb', '#80e27e'],
        hoverBackgroundColor: ['#536dfe', '#6a0080', '#ff9eaa', '#56c28c'],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    maintainAspectRatio: false,
  };

  const productList = [
    { id: 1, title: 'Product A' },
    { id: 2, title: 'Product B' },
    { id: 3, title: 'Product C' },
    { id: 4, title: 'Product D' },
    { id: 5, title: 'Product E' },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-100 p-4 transition-transform transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center mb-8">
          <img src="/src/assets/logoadmin.png" alt="Logo" className="h-13 w-13 mr-1" />
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <button onClick={() => handleMenuClick('dashboard')} className="flex items-center text-gray-700 hover:text-black">
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

        {dataType === 'dashboard' && (
          <div>
            <h1 className="text-2xl font-semibold pb-2 mb-4">Dashboard</h1>

            <div className="flex justify-end space-x-4 mb-4">
              <button onClick={handleExport} className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                <AiOutlineExport className="mr-2" /> Export
              </button>
              <button onClick={handleShare} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
                <AiOutlineShareAlt className="mr-2" /> Share
              </button>
            </div>

            {/* Feature Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
              <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center">
                <span className="text-2xl mr-4">💲</span>
                <div>
                  <h3 className="text-lg font-semibold">Penjualan</h3>
                  <p>RP.40.000.000</p>
                </div>
              </div>
              <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center">
                <span className="text-2xl mr-4">🛒</span>
                <div>
                  <h3 className="text-lg font-semibold">Pemesanan</h3>
                  <p>100 pesanan</p>
                </div>
              </div>
              <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center">
                <span className="text-2xl mr-4">📅</span>
                <div>
                  <h3 className="text-lg font-semibold">Reservasi</h3>
                  <p>20 orang</p>
                </div>
              </div>
              <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center">
                <span className="text-2xl mr-4">👥</span>
                <div>
                  <h3 className="text-lg font-semibold">Pelanggan</h3>
                  <p>30 Pengguna</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold mb-2">Total Data Keseluruhan</h2>
                <div className="chart-container" style={{ height: '300px' }}>
                  <Bar data={barData} options={barOptions} />
                </div>
              </div>
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold mb-2">Total Data Keseluruhan</h2>
                <div className="chart-container" style={{ height: '300px' }}>
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Top Products</h2>
              <ul>
                {productList.map((product) => (
                  <li key={product.id} className="flex justify-between py-2 border-b last:border-0">
                    <span>{product.title}</span>
                    <span>10 sold</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {dataType === 'pemesanan' && (
          <div>
            <h1 className="text-2xl font-semibold pb-2 mb-4">Pemesanan</h1>
            <div className="mb-4">
              <input type="text" placeholder="Cari Pemesanan" className="px-4 py-2 border rounded-lg w-full lg:w-auto" />
            </div>
            <div className="lg:flex lg:space-x-4">
              <div className="overflow-x-auto w-full lg:w-2/3">
                <table className="w-full border-collapse lg:table">
                  <thead>
                    <tr className="bg-pink-50 hidden lg:table-row shadow-md">
                      <th className="border-b p-4 text-left">No Meja</th>
                      <th className="border-b p-4 text-left">Costumer</th>
                      <th className="border-b p-4 text-left">Jumlah Pesanan</th>
                      <th className="border-b p-4 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex flex-col lg:table-row mb-2">
                      <td className="lg:border-b p-4">1</td>
                      <td className="lg:border-b p-4">John Doe</td>
                      <td className="lg:border-b p-4">3</td>
                      <td className="lg:border-b p-4">
                        <button className="text-blue-500 hover:underline mr-2">
                          <AiFillEdit />
                        </button>
                        <button className="text-red-500 hover:underline">
                          <AiFillDelete />
                        </button>
                      </td>
                    </tr>
                    <tr className="flex flex-col lg:table-row mb-2">
                      <td className="lg:border-b p-4">2</td>
                      <td className="lg:border-b p-4">Jane Smith</td>
                      <td className="lg:border-b p-4">5</td>
                      <td className="lg:border-b p-4">
                        <button className="text-blue-500 hover:underline mr-2">
                          <AiFillEdit />
                        </button>
                        <button className="text-red-500 hover:underline">
                          <AiFillDelete />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 lg:mt-0 w-full lg:w-1/3">
                <div className="p-4 border rounded-lg shadow-md">
                  <h1 className="text-xl font-semibold mb-4">Produk terjual</h1>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-4">
                      <span className="font-semibold cursor-pointer">Kategori</span>
                      <span className="font-semibold cursor-pointer">Produk</span>
                    </div>
                    <button className="text-xl">
                      <FiFilter />
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse bg-white">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700">
                          <th className="py-2 px-4 border-b">No</th>
                          <th className="py-2 px-4 border-b">Nama Produk</th>
                          <th className="py-2 px-4 border-b">Terjual</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-gray-50">
                          <td className="py-2 px-4 border-b"></td>
                          <td className="py-2 px-4 border-b"></td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                          <td className="py-2 px-4 border-b"></td>
                          <td className="py-2 px-4 border-b"></td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                          <td className="py-2 px-4 border-b"></td>
                          <td className="py-2 px-4 border-b"></td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
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
              <table className="w-full border-collapse lg:table">
                <thead>
                  <tr className="bg-pink-50 hidden lg:table-row shadow-md">
                    <th className="border-b p-4 text-left">Costumer id</th>
                    <th className="border-b p-4 text-left">Costumer</th>
                    <th className="border-b p-4 text-left">Email</th>
                    <th className="border-b p-4 text-left">Product</th>
                    <th className="border-b p-4 text-left">Status</th>
                    <th className="border-b p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex flex-col lg:table-row mb-2">
                    <td className="lg:border-b p-4">1</td>
                    <td className="lg:border-b p-4">John Doe</td>
                    <td className="lg:border-b p-4">john.doe@example.com</td>
                    <td className="lg:border-b p-4">Product A</td>
                    <td className="lg:border-b p-4">Pending</td>
                    <td className="lg:border-b p-4">
                      <button className="text-blue-500 hover:underline mr-2">
                        <AiFillEdit />
                      </button>
                      <button className="text-red-500 hover:underline">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                  <tr className="flex flex-col lg:table-row mb-2">
                    <td className="lg:border-b p-4">2</td>
                    <td className="lg:border-b p-4">Jane Smith</td>
                    <td className="lg:border-b p-4">jane.smith@example.com</td>
                    <td className="lg:border-b p-4">Product B</td>
                    <td className="lg:border-b p-4">Completed</td>
                    <td className="lg:border-b p-4">
                      <button className="text-blue-500 hover:underline mr-2">
                        <AiFillEdit />
                      </button>
                      <button className="text-red-500 hover:underline">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
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
              <table className="w-full border-collapse lg:table">
                <thead>
                  <tr className="bg-pink-50 hidden lg:table-row shadow-md">
                    <th className="border-b p-4 text-left">Costumer id</th>
                    <th className="border-b p-4 text-left">Costumer</th>
                    <th className="border-b p-4 text-left">Email</th>
                    <th className="border-b p-4 text-left">Product</th>
                    <th className="border-b p-4 text-left">Status</th>
                    <th className="border-b p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex flex-col lg:table-row mb-2">
                    <td className="lg:border-b p-4">1</td>
                    <td className="lg:border-b p-4">John Doe</td>
                    <td className="lg:border-b p-4">john.doe@example.com</td>
                    <td className="lg:border-b p-4">Product A</td>
                    <td className="lg:border-b p-4">Pending</td>
                    <td className="lg:border-b p-4">
                      <button className="text-blue-500 hover:underline mr-2">
                        <AiFillEdit />
                      </button>
                      <button className="text-red-500 hover:underline">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                  <tr className="flex flex-col lg:table-row mb-2">
                    <td className="lg:border-b p-4">2</td>
                    <td className="lg:border-b p-4">Jane Smith</td>
                    <td className="lg:border-b p-4">jane.smith@example.com</td>
                    <td className="lg:border-b p-4">Product B</td>
                    <td className="lg:border-b p-4">Completed</td>
                    <td className="lg:border-b p-4">
                      <button className="text-blue-500 hover:underline mr-2">
                        <AiFillEdit />
                      </button>
                      <button className="text-red-500 hover:underline">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
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
              <table className="w-full border-collapse lg:table">
                <thead>
                  <tr className="bg-pink-50 hidden lg:table-row shadow-md">
                    <th className="border-b p-4 text-left">Customer id</th>
                    <th className="border-b p-4 text-left">Customer</th>
                    <th className="border-b p-4 text-left">Email</th>
                    <th className="border-b p-4 text-left">Product</th>
                    <th className="border-b p-4 text-left">Status</th>
                    <th className="border-b p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex flex-col lg:table-row mb-2">
                    <td className="lg:border-b p-4">1</td>
                    <td className="lg:border-b p-4">John Doe</td>
                    <td className="lg:border-b p-4">john.doe@example.com</td>
                    <td className="lg:border-b p-4">Product A</td>
                    <td className="lg:border-b p-4">Pending</td>
                    <td className="lg:border-b p-4">
                      <button className="text-blue-500 hover:underline mr-2">
                        <AiFillEdit />
                      </button>
                      <button className="text-red-500 hover:underline">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                  <tr className="flex flex-col lg:table-row mb-2">
                    <td className="lg:border-b p-4">2</td>
                    <td className="lg:border-b p-4">Jane Smith</td>
                    <td className="lg:border-b p-4">jane.smith@example.com</td>
                    <td className="lg:border-b p-4">Product B</td>
                    <td className="lg:border-b p-4">Completed</td>
                    <td className="lg:border-b p-4">
                      <button className="text-blue-500 hover:underline mr-2">
                        <AiFillEdit />
                      </button>
                      <button className="text-red-500 hover:underline">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
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
