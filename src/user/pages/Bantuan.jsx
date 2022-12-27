import React, { Component } from "react";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

export default class Bantuan extends Component {
  render() {
    return (
      <>
        <section>
          <div className="bg-halamantiket h-60 w-screen bg-center" />
          <div className="p-6 lg:px-40 lg:py-10 flex flex-col lg:flex-row lg:items-center">
            <div className="lg:basis-1/3">
              <h2 className="text-xl lg:text-2xl font-bold max-w-sm whitespace-pre-line">
                Butuh bantuan?
              </h2>
              <p>
                Temukan kami dengan cara klik maps di samping ini, atau kalian
                bisa hubungi kami melalui copntact di bawah:
              </p>
              <div className="pt-4">
                <p className="flex my-2">
                  <PhoneIcon className="h-6 w-6 " aria-hidden="true" />
                  <span className="ml-4">+6282167565321</span>
                </p>
                <p className="flex my-2">
                  <EnvelopeIcon className="h-6 w-6 " aria-hidden="true" />
                  <span className="ml-4">buzz@business.com</span>
                </p>
                <p className="flex my-2">
                  <MapPinIcon className="h-6 w-6 " aria-hidden="true" />
                  <span className="ml-4">Jl. ABC komplek 901 no. 3 Medan</span>
                </p>
              </div>
            </div>
            <div className="basis-2/3 mt-5 lg:ml-20">
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.999810730559!2d98.68855175029826!3d3.587517297376543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131b05672220d%3A0xba277a5eddb19abe!2sUniversitas%20Mikroskil%2C%20Kampus%20B!5e0!3m2!1sid!2sid!4v1672162220939!5m2!1sid!2sid"
                height="350"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                className="float-right border-2 rounded-lg w-full"
              />
            </div>
          </div>
          <div className="p-6 lg:px-40 lg:py-5 lg:pb-10">
            <h2 className="text-center text-xl lg:text-2xl font-bold">
              Hubungi kami secara langsung
            </h2>
            <p className="text-center">
              Hubungi kami untuk menyelesaikan masalah dengan lebih cepat
            </p>
            <div className="grid justify-items-center">
              <div className="w-full lg:w-2/4">
                <div className="relative w-full mt-4">
                  <input
                    type="text"
                    id="nama"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                    placeholder=" "
                  />
                  <label
                    for="nama"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Nama Kamu
                  </label>
                </div>
                <div className="relative w-full mt-4">
                  <input
                    type="text"
                    id="nomor_whatsapp"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                    placeholder=" "
                  />
                  <label
                    for="nomor_whatsapp"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Nomor Whatsapp
                  </label>
                </div>
                <div className="relative w-full mt-4">
                  <input
                    type="text"
                    id="subject_permasalahan"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                    placeholder=" "
                  />
                  <label
                    for="subject_permasalahan"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Subject Permasalahan
                  </label>
                </div>
                <div className="relative w-full mt-4">
                  <textarea
                    type="text"
                    id="deskripsi_permasalahan"
                    rows="4"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                    placeholder=" "
                  />
                  <label
                    for="deskripsi_permasalahan"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Deskripsi Permasalahan
                  </label>
                </div>
                <div className="float-right mt-5">
                  <Link
                    to="/about"
                    className="btn bg-sky-800 px-4 py-2 text-white rounded-md"
                  >
                    kirim pesan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
