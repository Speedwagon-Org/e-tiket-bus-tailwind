import React, { Component } from "react";

import { StarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { TextInput, Button, Radio } from "flowbite-react";

export default class SidebarFilter extends Component {
  render() {
    return (
      <>
        <section className="mb-6 lg:mb-0 lg:mr-10">
          <div className="border-2 rounded-lg p-6 grid gap-6">
            <div>
              <h2 className="text-lg mb-2">Durasi perjalanan</h2>
              <div className="relative">
                <input
                  type="range"
                  className="
                    form-range
                    appearance-none
                    w-full
                    h-3
                    p-0
                  bg-gray-200
                    rounded-md
                    focus:outline-none focus:ring-0 focus:shadow-none"
                  id="range-filter"
                />
                <div className="flex justify-between">
                  <p>60 menit</p>
                  <p>190 menit</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg mb-2">Rating bus</h2>
              <div class="flex items-center align-middle">
                <input
                  id="list-filter-rating"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  className="grid gap-1 grid-flow-col ml-3"
                  for="filter-rating-bus-5"
                >
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                </label>
              </div>
              <div class="flex items-center my-2 align-middle">
                <input
                  id="list-filter-rating"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  className="grid gap-1 grid-flow-col ml-3"
                  for="filter-rating-bus-4"
                >
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                </label>
              </div>
              <div class="flex items-center my-2 align-middle">
                <input
                  id="list-filter-rating"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  className="grid gap-1 grid-flow-col ml-3"
                  for="filter-rating-bus-4"
                >
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                </label>
              </div>
              <div class="flex items-center my-2 align-middle">
                <input
                  id="list-filter-rating"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  className="grid gap-1 grid-flow-col ml-3"
                  for="filter-rating-bus-4"
                >
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                </label>
              </div>
              <div class="flex items-center my-2 align-middle">
                <input
                  id="list-filter-rating"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  className="grid gap-1 grid-flow-col ml-3"
                  for="filter-rating-bus-4"
                >
                  <StarIcon className="h-6 w-6 fill-amber-500" />
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-lg mb-2">Range harga</h2>
              <div className="flex justify-between">
                <form className="flex items-center align-middle">
                  <TextInput
                    id="range-awal"
                    type="text"
                    placeholder="200.000"
                    className="w-24"
                  />
                  <p className="mx-2 lg:mx-4 text-2xl font-semibold">-</p>
                  <TextInput
                    id="range-akhir"
                    type="text"
                    placeholder="350.000"
                    className="w-24"
                  />
                </form>
                <Button className="fill-sky-200 w-10">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h2 className="text-lg mb-2">Jenis bus</h2>
              <div className="flex gap-4">
                <div className="flex">
                  <Radio
                    id="bus-biasa"
                    name="jenis-bus"
                    value="bus-biasa"
                    className="hidden peer"
                  />
                  <label
                    className="w-auto px-4 py-2 bg-white border-2 rounded-lg cursor-pointer peer-checked:border-sky-600 peer-checked:text-sky-600 border-stone-300"
                    for="bus-biasa"
                  >
                    <p className="block">biasa</p>
                  </label>
                </div>
                <div className="flex">
                  <Radio
                    id="bus-vip"
                    name="jenis-bus"
                    value="bus-vip"
                    className="hidden peer"
                  />
                  <label
                    className="w-auto px-4 py-2 bg-white border-2 rounded-lg cursor-pointer peer-checked:border-sky-600 peer-checked:text-sky-600 border-stone-300"
                    for="bus-vip"
                  >
                    <p className="block">vip</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
