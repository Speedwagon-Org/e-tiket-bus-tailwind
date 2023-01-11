import "./App.css";
import "./index.css";
import "./assets/files/custom.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import Home from "./user/pages/Home";
import PesanTiket from "./user/pages/PesanTiket";
import Bantuan from "./user/pages/Bantuan";
import Login from "./user/pages/LoginRegis";
import Blog from "./user/pages/Blog";
import PageNotFound from "./user/pages/PageNotFound";
import Dashboard from "./admin/pages/Dashboard";
import Bus from "./admin/pages/Bus";
import Laporan from "./admin/pages/Laporan";
import RiwayatTiket from "./admin/pages/RiwayatTiket";
import User from "./admin/pages/User";
const navigation = [
  { name: "Home", to: "/" },
  { name: "Pesan Tiket", to: "/pesan-tiket" },
  { name: "Bantuan", to: "/bantuan" },
  { name: "Blog", to: "/blog" },
  { name: "Login", to: "/login" },
];

function App() {
  return (
    <>
      <Router>
        <div className="sticky top-0 z-50 min-h-full shadow-lg">
          <Disclosure as="nav" className="bg-white">
            {({ open }) => (
              <>
                <div className="px-4 sm:px-6 lg:px-20">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <NavLink to="/">
                          <img
                            className="h-10"
                            src={require("./assets/images/logo-header.png")}
                            alt="Buzz"
                          />
                        </NavLink>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-6">
                            {navigation.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.to}
                                className={({ isActive }) =>
                                  isActive ? "menu-active" : "menu-inactive"
                                }
                                end
                              >
                                {item.name}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-sky-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-800 hover:bg-sky-700 hover:text-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
                <Disclosure.Panel className="md:hidden pb-4">
                  <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    {navigation.map((item) => (
                      <NavLink
                        x-data={false}
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          isActive ? "menu-m-active" : "menu-m-inactive"
                        }
                        end
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-sky-900 text-3xl font-bold tracking-tight">
              Dashboard
            </h1>
          </div>
        </header> */}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesan-tiket" element={<PesanTiket />} />
          <Route path="/bantuan" element={<Bantuan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="admin">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bus" element={<Bus />} />
            <Route path="user" element={<User />} />
            <Route path="riwayat-tiket" element={<RiwayatTiket />} />
            <Route path="laporan" element={<Laporan />} />
          </Route>
        </Routes>
      </Router>

      <Router>
        <footer className="lg:py-10 shadow bg-sky-800 lg:px-20 p-6">
          <div className="lg:grid lg:grid-cols-4">
            <div className="col-span-2">
              <NavLink to="/">
                <img
                  className="h-16"
                  src={require("./assets/images/logo-footer.png")}
                  alt="Buzz"
                />
              </NavLink>
              <p className="pt-4 text-white lg:max-w-lg">
                Layanan pemesanan tiket bus online yang memberikan pengalaman
                pemesanan efisien bagi masyarakat Indonesia.
              </p>
              <div className="pt-4">
                <p className="flex text-white my-2">
                  <PhoneIcon className="h-6 w-6 " aria-hidden="true" />
                  <span className="ml-4">+6282167565321</span>
                </p>
                <p className="flex text-white my-2">
                  <EnvelopeIcon className="h-6 w-6 " aria-hidden="true" />
                  <span className="ml-4">buzz@business.com</span>
                </p>
                <p className="flex text-white my-2">
                  <MapPinIcon className="h-6 w-6 " aria-hidden="true" />
                  <span className="ml-4">Jl. ABC komplek 901 no. 3 Medan</span>
                </p>
              </div>
            </div>
            <div className="pt-3 lg:px-4 lg:pt-0">
              <h2 className="text-white text-xl lg:text-2xl font-bold">
                Jalan-jalan yuk
              </h2>
              <ul className="list-disc mx-4 text-white text-justify">
                <li className="my-2">Istana Maimun, Kota Medan</li>
                <li className="my-2">Air Terjun Sipiso Piso</li>
                <li className="my-2">Taman Nasional Gunung Leuser</li>
              </ul>
            </div>
            <div className="pt-3 lg:px-4 lg:pt-0">
              <h2 className="text-white text-xl lg:text-2xl font-bold">
                Blog terbaru
              </h2>
              <ul className="list-disc mx-4 text-white text-justify">
                <li className="my-2">
                  Tempat Wisata Terbaik Di Sumatara Utara
                </li>
                <li className="my-2">Melihat Keindahan Pulau Samosir</li>
                <li className="my-2">
                  10 Taman dan Object Wisata Alam Terbaik Di Medan
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:px-20 p-6 grid place-items-center lg:pt-0 pt-3">
            <div className="bg-white p-6 rounded-lg lg:flex items-center">
              <p className="text-xl font-bold ">Yuk gabung jadi mitra kami!</p>
              <button className="btn lg:ml-40 bg-sky-800 px-6 py-3 rounded-md text-white lg:mt-0 mt-3 w-full lg:w-auto">
                gabung sekarang!
              </button>
            </div>
          </div>
          <p className="text-center text-white text-sm">
            copyright © 2022 all rights reserved
          </p>
        </footer>
      </Router>
    </>
  );
}
export default App;
