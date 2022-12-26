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
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Home from "./user/pages/Home";
import PesanTiket from "./user/pages/PesanTiket";
import Bantuan from "./user/pages/Bantuan";
import Login from "./user/pages/LoginRegis";
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
  { name: "Login", to: "/login" },
];

function App() {
  return (
    <>
      <Router>
        <div className="sticky top-0 z-50 min-h-full">
          <Disclosure as="nav" className="bg-white">
            {({ open }) => (
              <>
                <div className="px-4 sm:px-6 lg:px-20">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <NavLink to="/">
                          <img
                            className="h-9"
                            src={require("./assets/images/logo.png")}
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
                <Disclosure.Panel className="md:hidden">
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
                  <div className="border-t border-sky-700 pt-4 pb-3">
                    <div className="flex items-center px-5">
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-sky-800 p-1 text-sky-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-800 hover:text-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
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

      <footer class="grid grid-cols-4 p-4 shadow bg-sky-700 md:flex md:items-center md:justify-between">
        <div>123</div>
      </footer>
    </>
  );
}
export default App;
