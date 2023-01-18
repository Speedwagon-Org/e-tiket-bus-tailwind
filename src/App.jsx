import "./App.css";
import "./index.css";
import "./assets/files/custom.css";

import { BrowserRouter as Router, NavLink } from "react-router-dom";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
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
