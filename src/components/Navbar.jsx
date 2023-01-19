import React, { Component } from "react";
import Home from "../user/pages/Home";
import PesanTiket from "../user/pages/PesanTiket";
import Bantuan from "../user/pages/Bantuan";
import LoginRegis from "../user/pages/LoginRegis";
import Blog from "../user/pages/Blog";
import PageNotFound from "../user/pages/PageNotFound";
import Dashboard from "../admin/pages/Dashboard";
import Bus from "../admin/pages/Bus";
import Laporan from "../admin/pages/Laporan";
import RiwayatTiket from "../admin/pages/RiwayatTiket";
import User from "../admin/pages/User";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Register from "../user/pages/components/Register";
import Login from "../user/pages/components/Login";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Pesan Tiket", to: "/pesan-tiket" },
  { name: "Bantuan", to: "/bantuan" },
  { name: "Blog", to: "/blog" },
  { name: "Login", to: "/account/login" },
];

class Navbar extends Component {
  render() {
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
                              src={require("../assets/images/logo.png")}
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
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pesan-tiket" element={<PesanTiket />} />
            <Route path="/bantuan" element={<Bantuan />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/account" element={<LoginRegis />}>
              <Route path={"register"} element = {<Register/>}/>
              <Route path={"login"} element = {<Login/>}/>
            </Route>
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
      </>
    );
  }
}

export default Navbar;
