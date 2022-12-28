import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const AdvanceSearch = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="lg:mx-20 m-6 grid place-items-center -mt-52 lg:-mt-40">
      <div className="bg-white p-6 rounded-lg shadow-lg border-1">
        <h2 className="font-semibold text-lg lg:text-left text-center">
          Temukan tiket bus murah hanya di Buzz!
        </h2>
        {/* Form */}
        <div className="flex flex-wrap lg:flex-shrink-0 gap-0 lg:gap-4">
          <div className="relative w-full lg:w-56 mt-4">
            <input
              type="text"
              id="kota_asal"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
              placeholder=" "
            />
            <label
              for="kota_asal"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Kota Asal
            </label>
          </div>
          <div className="relative w-full lg:w-56 mt-4">
            <input
              type="text"
              id="kota_tujuan"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
              placeholder=" "
            />
            <label
              for="kota_tujuan"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Kota Tujuan
            </label>
          </div>
          <div className="relative w-full lg:w-56 mt-4">
            <input
              type="text"
              id="jumlah_tiket"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
              placeholder=" "
            />
            <label
              for="jumlah_tiket"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Jumlah Tiket
            </label>
          </div>
          <div className="relative w-full lg:w-56 mt-4">
            <Datepicker
              useRange={false}
              asSingle={true}
              value={value}
              onChange={handleValueChange}
              containerClassName="p-datepicker"
            />
            <label
              for="tanggal_keberangkatan"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-sky-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Tanggal Keberangkatan
            </label>
          </div>
        </div>
        <button className="btn bg-sky-800 px-4 py-2 text-white rounded-md mt-4 float-right">
          cari tiket
        </button>
      </div>
    </div>
  );
};

export default AdvanceSearch;
