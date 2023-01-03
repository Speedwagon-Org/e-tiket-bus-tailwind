import React, { Component } from "react";
import { Link } from "react-router-dom";

/* import icon */
import {
  BarsArrowDownIcon,
  ArrowLongRightIcon,
  GiftIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

/* import components */
import AdvanceSearch from "../../components/AdvanceSearch";
import SidebarFilter from "../../components/SidebarFilter";

/* import data */
import { listkeberangkatan } from "../../data/listkeberangkatan";

/* import assets */
import ac from "../../assets/images/fasilitas-bus/ac.png";
import makan from "../../assets/images/fasilitas-bus/makan.png";
import tv from "../../assets/images/fasilitas-bus/tv.png";

class PesanTiket extends Component {
  render() {
    return (
      <>
        <section>
          <div className="bg-halamantiket h-60 w-screen bg-center"></div>
          <AdvanceSearch />
          <div className="grid grid-cols-1 lg:grid-cols-3 p-6 lg:px-48 py-10">
            <div className="">
              <SidebarFilter />
            </div>
            <div className="col-span-2">
              <div className="flex justify-between items-center">
                <p>Temukan tiket anda untuk pergi ke Pulau Samosir</p>
                <div className=" bg-sky-800 p-2 rounded-lg">
                  <BarsArrowDownIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="grid lg:grid-cols-1 grid-cols-2 gap-4">
                {listkeberangkatan.map((item) => (
                  <div className="border rounded-lg my-4">
                    <div className="flex flex-col lg:flex-row">
                      <img
                        className="object-cover h-full lg:rounded-l-lg basis-1/4"
                        src={item.imgsrc}
                        alt=""
                      />
                      <div className="p-4 lg:p-6 basis-3/4">
                        <h5 className="text-lg lg:text-2xl font-bold">
                          {item.namabus}
                        </h5>
                        <div className="flex gap-1 mt-1">
                          <StarIcon className="h-6 w-6 fill-orange-400" />
                          <StarIcon className="h-6 w-6 fill-orange-400" />
                          <StarIcon className="h-6 w-6 fill-orange-400" />
                          <StarIcon className="h-6 w-6 fill-orange-400" />
                        </div>
                        <div>
                          <div className="flex items-center mt-2">
                            <div>
                              <h4 className="text-lg lg:text-2xl font-bold">
                                {item.jamberangkat}
                              </h4>
                              <p className="text-sm lg:text-base">
                                {item.lokasiawal}
                              </p>
                            </div>
                            <div>
                              <ArrowLongRightIcon className="lg:h-8 lg:w-8 lg:mx-4 h-6 w-6 mx-2" />
                            </div>
                            <div>
                              <h4 className="text-lg lg:text-2xl font-bold">
                                {item.jamsampai}
                              </h4>
                              <p className="text-sm lg:text-base">
                                {item.tujuan}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="lg:flex justify-between">
                          <div className="mt-4">
                            <div className="flex gap-3 mt-1 items-center">
                              <img
                                src={makan}
                                className="lg:h-6 lg:w-6 h-4 w-4"
                                alt="icon makan"
                              />
                              <img
                                src={ac}
                                className="lg:h-6 lg:w-6 h-4 w-4"
                                alt="icon ac"
                              />
                              <img
                                src={tv}
                                className="lg:h-6 lg:w-6 h-4 w-4"
                                alt="icon tv"
                              />
                            </div>
                          </div>
                          <div className="float-right">
                            <h5 className="text-lg lg:text-2xl font-bold mt-4 lg:-mt-7">
                              IDR {item.hargatiket}
                              <span className="text-xs font-normal">
                                /tiket
                              </span>
                            </h5>
                            <div className="flex items-center justify-end">
                              <GiftIcon className="h-4 w-4 mr-2" />
                              <p>
                                {item.bonuspoint}{" "}
                                <span className="text-xs font-normal">
                                  point
                                </span>
                              </p>
                            </div>
                            <div className="mt-4 lg:mt-6 float-right">
                              <Link
                                to="/about"
                                className="btn bg-sky-800 px-4 py-2 text-white rounded-md"
                              >
                                pesan tiket
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PesanTiket;
