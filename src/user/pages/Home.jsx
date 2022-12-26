import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

/* import data */
import { listbus } from "../../data/listbus";
import { listvoucher } from "../../data/listvoucher";

export default function Home() {
  return (
    <>
      <section>
        {/* Hero */}
        <div className="bg-hero bg-cover h-hero">
          <div className="text-center pt-40">
            <span className="text-3xl font-semibold text-white">Hei, </span>
            <span className="text-3xl font-bold text-white">
              mau ke mana hari ini?
            </span>
            <h1>form search</h1>
          </div>
        </div>
        {/* Loket bus terdekat */}
        <div className="p-6 lg:px-20 lg:py-10 grid">
          <h1 className="text-xl lg:text-2xl font-bold">
            Loket bus terdekat dengan kamu!
          </h1>
          <p className="text-sm text-gray-500">Temukan loket bus terdekat.</p>
          <div class="flex gap-4 overflow-x-auto pb-2">
            {listbus.map((item) => (
              <div className="relative mt-5 flex flex-shrink-0">
                <div class="max-h-fit lg:max-w-xs max-w-mobile rounded-lg bg-gray-800 shadow-md">
                  <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-green-700 px-4 py-2">
                    <div className="flex lg:text-sm text-xs font-bold tracking-wide text-white">
                      <MapPinIcon width="14" />
                      <p className="ml-1">{item.maps}</p>
                    </div>
                  </div>
                  <img
                    className="rounded-t-lg"
                    src={item.imgsrc}
                    alt="loket bus"
                  />
                  <div class="p-5 mb-10">
                    <h5 class="tracking-tigh mb-2 lg:text-lg text-sm font-bold tracking-wide text-white truncate">
                      {item.name}
                    </h5>
                    <p class="font-normal text-gray-300 text-xs lg:text-base truncate">
                      {item.lokasiawal} - {item.lokasiakhir}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 mb-5 pl-5 ">
                    <Link
                      to="/about"
                      className="text-white underline decoration-sky-500 lg:text-base text-sm"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Info promo voucher */}
        <div className="p-6 lg:px-20 lg:py-10 flex flex-col lg:flex-row">
          <div className="lg:basis-1/3">
            <h1 className="text-xl lg:text-2xl font-bold max-w-sm">
              Untuk kamu doang nih, ada voucher diskon loh!
            </h1>
            <p className="text-sm text-gray-500">
              Buruan pakai sebelum kehabisan.
            </p>
          </div>
          <div className="basis-2/3 mt-5">
            <div className="flex flex-nowrap overflow-x-auto">
              {listvoucher.map((item) => (
                <div className="relative flex flex-shrink-0">
                  <div className="bg-slate-700 rounded-lg p-4 mb-2 mr-4">
                    <h1 className="text-white font-bold">{item.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="p-6 lg:px-20 lg:py-10 grid bg-slate-700">
          <div className="max-w-xs lg:max-w-sm justify-self-center text-center">
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              Dapatkan banyak promo yang menarik dari kami!
            </h1>
            <p className="text-sm text-gray-200">Yuk bergabung.</p>
            FORM
          </div>
        </div>
        <div className="p-6 lg:px-20 lg:py-10 grid">
          <div className="max-w-[60%] lg:max-w-sm justify-self-center text-center">
            <h1 className="text-xl lg:text-2xl font-bold">
              Keuntungan bergabung dengan kami!
            </h1>
            FORM
          </div>
        </div>
      </section>
    </>
  );
}
