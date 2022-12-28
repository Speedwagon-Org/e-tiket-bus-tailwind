import React, { Component } from "react";
import { Link } from "react-router-dom";

/* import assets */
import img_404 from "../../assets/images/img_404.svg";

export default class PageNotFound extends Component {
  render() {
    return (
      <>
        <section className="lg:mx-40 m-6 lg:my-10">
          <div className="grid justify-items-center gap-6">
            <img
              src={img_404}
              className="w-3/4 lg:w-3/6 place-self-center"
              alt="img faq"
            />
            <h4 className="text-center font-semibold text-xl">
              Maaf, halaman yang anda cari tidak ditemukan.
            </h4>
            <div>
              <Link
                to="/about"
                className="btn bg-sky-800 px-4 py-2 text-white rounded-md mt-4"
              >
                home
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}
