import {
  MapPinIcon,
  ReceiptPercentIcon,
  ClipboardDocumentIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

/* import data */
import { listbus } from "../../data/listbus";
import { listvoucher } from "../../data/listvoucher";

/*import component*/
import AdvanceSearch from "../../components/AdvanceSearch";
import Faq from "../../components/Faq";

/* import assets */
import img_faq from "../../assets/images/img_faq.svg";

export default function Home() {
  return (
    <>
      <section>
        {/* Hero */}
        <div className="bg-hero bg-cover h-hero">
          <div className="text-center pt-40 lg:pt-52">
            <p className="text-3xl font-semibold text-white drop-shadow-xl">
              Hei, <span className="font-bold">mau ke mana hari ini?</span>
            </p>
          </div>
        </div>
        {/* Call components AdvanceSearch */}
        <AdvanceSearch />
        {/* Loket bus terdekat */}
        <div className="p-6 lg:px-20 lg:py-10 grid">
          <h2 className="text-xl lg:text-2xl font-bold">
            Loket bus terdekat dengan kamu!
          </h2>
          <p className="text-sm text-gray-500">temukan loket bus terdekat.</p>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {listbus.map((item) => (
              <div className="relative mt-5 flex flex-shrink-0 max-w-card">
                <div className="max-h-full rounded-lg shadow-md border-2">
                  <div className="absolute right-0 rounded-l-lg bg-sky-800 px-4 py-2 mt-6">
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
                  <div className="p-5 mb-10">
                    <h5 className="tracking-tigh mb-2 lg:text-lg text-sm font-bold tracking-wide text-gray-900 text-ellipsis overflow-hidden">
                      {item.name}
                    </h5>
                    <p className="font-normal text-xs lg:text-base text-ellipsis overflow-hidden text-gray-900">
                      harga tiket mulai dari
                    </p>
                    <p className="font-normal text-xs lg:text-base text-ellipsis overflow-hidden text-gray-900">
                      IDR 30.000
                    </p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 mb-5 pl-5 ">
                    <Link
                      to="/about"
                      className="btn bg-sky-800 px-4 py-2 text-white rounded-md mt-4"
                    >
                      lihat loket
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Info promo voucher */}
        <div className="p-6 lg:px-20 lg:py-10 flex flex-col lg:flex-row lg:items-center">
          <div className="lg:basis-1/3">
            <h2 className="text-xl lg:text-2xl font-bold max-w-sm whitespace-pre-line">
              Ada kupon promo nih, cuma untuk kamu loh!
            </h2>
            <p className="text-sm text-gray-500">
              buruan pakai sebelum kehabisan.
            </p>
          </div>
          <div className="basis-2/3 mt-5">
            <div className="flex flex-nowrap overflow-x-auto gap-4">
              {listvoucher.map((item) => (
                <div className="relative flex flex-shrink-0">
                  <div className="border-2 shadow-md rounded-lg p-4 mb-2">
                    <div className="relative flex flex-col">
                      <div className="relative flex flex-row">
                        <h2 className="font-bold mr-2">{item.name}</h2>
                        <ReceiptPercentIcon width="24" />
                      </div>
                      <h2 className="text-xl mt-2">{item.besarpotongan}</h2>
                      <p className="text-xs text-gray-500">sk berlaku</p>
                      <div className="relative flex flex-row">
                        <h2 className="font-bold text-xl mt-4">
                          {item.codevoucher}
                        </h2>
                        <ClipboardDocumentIcon
                          width="16"
                          className="mt-5 ml-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bagian */}
        <div className="bg-sky-800">
          {/* CTA */}
          <div className="p-6 lg:px-20 lg:py-10 grid">
            <div className="max-w-sm justify-self-center text-center">
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                Dapatkan banyak promo yang menarik dari kami!
              </h2>
              <p className="text-sm text-gray-200">yuk bergabung</p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="btn bg-white px-6 py-3 rounded-md lg:mt-8 mt-3 w-full lg:w-auto"
                >
                  gabung sekarang!
                </Link>
              </div>
            </div>
          </div>
          {/* Keunggulan */}
          <div className="p-6 lg:px-20 lg:py-10 grid">
            <div className="justify-self-center text-center">
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                Keuntungan bergabung dengan kami!
              </h2>
              <p className="text-sm text-gray-200">
                nikmati semua fasilitas yang tersedia
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-16 mt-8 justify-items-center">
                <div className="bg-white w-40 h-40 rounded-full grid justify-items-center">
                  <ShieldCheckIcon
                    width="48"
                    className="mt-8 fill-sky-800 items-center"
                  />
                  <h4 className="text-sky-800 font-semibold text-lg -mt-6">
                    Terpercaya
                  </h4>
                </div>
                <div className="bg-white w-40 h-40 rounded-full grid justify-items-center">
                  <RocketLaunchIcon
                    width="48"
                    className="mt-8 fill-sky-800 items-center"
                  />
                  <h4 className="text-sky-800 font-semibold text-lg -mt-6">
                    Tercepat
                  </h4>
                </div>
                <div className="bg-white w-40 h-40 rounded-full grid justify-items-center">
                  <ChatBubbleLeftRightIcon
                    width="48"
                    className="mt-8 fill-sky-800 items-center"
                  />
                  <h4 className="text-sky-800 font-semibold text-lg -mt-6">
                    Selalu ada
                  </h4>
                </div>
                <div className="bg-white w-40 h-40 rounded-full grid justify-items-center">
                  <CurrencyDollarIcon
                    width="48"
                    className="mt-8 fill-sky-800 items-center"
                  />
                  <h4 className="text-sky-800 font-semibold text-lg -mt-6">
                    Termurah
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Butuh bantuan - FAQ */}
        <div className="p-6 lg:px-40 lg:py-10 grid grid-cols-1 lg:grid-cols-2 place-content-center">
          <div className="grid">
            <img
              src={img_faq}
              className="w-3/4 place-self-center"
              alt="img faq"
            />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mt-5">
              Butuh bantuan?
            </h2>
            <p className="text-sm text-gray-500">
              beberapa jawaban yang mungkin dapat membantu kamu
            </p>
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
