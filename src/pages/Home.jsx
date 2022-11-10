import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

/* import img */
import Img01 from "../assets/images/01.jpg";
import Img02 from "../assets/images/02.jpg";
import Img03 from "../assets/images/03.jpg";

import { listbus } from "../data/listbus";
import { listfaq } from "../data/listfaq";

export default function Home() {
  return (
    <>
      <section>
        <div className="relative mt-2 bg-white p-4 lg:p-8">
          {/* Hero */}
          <div className="grid content-between justify-items-center lg:grid-cols-2 lg:gap-6">
            <div className="relative">
              <img
                src={Img01}
                alt=""
                className="w-100 rounded-lg object-none object-center brightness-50"
              />
              <div class="absolute bottom-0 left-0 max-w-sm p-5 lg:max-w-lg lg:p-10">
                <h2 className="text-shadow-lg text-2xl font-bold text-white lg:text-4xl">
                  Daftar Dan Nikmati Semua Fasilitasnya!
                </h2>
                <Link
                  type="button"
                  className="focus:shadow-outline mt-2 select-none rounded-md border bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition duration-300 focus:outline-none hover:border-white hover:bg-pink-500 hover:text-white lg:mt-5 lg:text-base"
                  to="/login"
                >
                  Daftar Sekarang!
                </Link>
              </div>
            </div>
            <div className="grid lg:content-between">
              <div className="relative">
                <img
                  src={Img02}
                  alt=""
                  className="mt-5 rounded-lg object-none object-center brightness-50 lg:mt-0"
                />
                <div class="absolute-center mt-3 px-0 text-center lg:mt-0 lg:px-10 ">
                  <Link
                    to="/event"
                    className="text-xl font-semibold text-white transition duration-150 hover:underline hover:decoration-pink-500 lg:text-2xl"
                  >
                    Kunjungi Tempat Wisata Favorit Kalian!
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={Img03}
                  alt=""
                  className="mt-5 rounded-lg object-none object-center brightness-50 lg:mt-0"
                />
                <div class="absolute-center mt-3 px-0 text-center lg:mt-0 lg:px-10 ">
                  <Link
                    to="/event"
                    className="text-xl font-semibold text-white transition duration-150 hover:underline hover:decoration-pink-500 lg:text-2xl"
                  >
                    Gunakan Voucher Diskon Bulan Ini.
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Event Terdekat */}
          <div className="mt-10 grid">
            <div>
              <p className="text-sm text-gray-500">LOKET BUS</p>
              <h1 className="text-2xl font-bold">Loket Bus Terdekat</h1>
            </div>
            <div class="flex gap-4 overflow-x-auto pb-2">
              {listbus.map((item) => (
                <div className="relative mt-5 flex flex-shrink-0">
                  <div class="max-h-fit lg:max-w-xs max-w-custom rounded-lg bg-gray-800 shadow-md">
                    <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-green-700 px-4 py-2">
                      <div className="flex text-sm font-bold tracking-wide text-white">
                        <MapPinIcon width="16" />
                        <p className="ml-1">{item.maps}</p>
                      </div>
                    </div>
                    <img className="rounded-t-lg" src={item.imgsrc} alt="123" />
                    <div class="p-5">
                      <h5 class="tracking-tigh mb-2 text-lg font-bold tracking-wide text-white">
                        {item.name}
                      </h5>
                      <p class="font-normal text-gray-300">
                        {item.datelocation}
                      </p>
                      <p class="mb-10 font-normal text-gray-300">{item.fee}</p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 mb-5 pl-5">
                      <Link
                        to="/about"
                        className="text-white underline decoration-pink-500"
                      >
                        Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* FAQ */}
          <div className="mt-10 flex flex-col items-center">
            <div>
              <p className="text-center text-sm text-gray-500">FAQ</p>
              <h1 className="text-center text-2xl font-bold">
                Pertanyaan Umum
              </h1>
            </div>
            <div className="lg:px-faq mt-5 w-screen px-4">
              {listfaq.map((item) => (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="mb-4 flex h-10 w-full justify-between rounded-lg bg-pink-100 px-4 py-2 text-left text-sm font-medium text-pink-900 hover:bg-pink-200">
                        <span>{item.question}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-pink-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-6 text-sm text-gray-800">
                        {item.answare}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
