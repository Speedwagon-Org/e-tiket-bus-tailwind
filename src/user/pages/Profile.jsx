import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import { Button } from 'flowbite-react'
export default function Profile() {
  const userData = {
    PersonalBiodata:{
      Nama : "Gareng Susilo",
      TanggalLahir : Date("24","September","1999"),
      JenisKelamin : 0,
    },
    PersonalKontak : {
      Email:"garengselaihsusilo@gmail.com".toLowerCase(),
      NomorHp : "08128737238"
    },
    PersonalKupon : {
      KuponList : ["KODJKL1", "KODJKL1"]
    },
    BuyingHistory: {
      WaitingForPayment : ["Trans-AW-M-121222"],
      FinishedTransaction : ["Trans-AW-L-101222"]
    },
    BuzzPoint : 1999
  }
  return (
    <>
      <section>
        {/* Hero */}
        <div className="bg-halamanprofile bg-center bg-no-repeat h-60 w-screen bg-cover place-items-center grid mb-96">
          <div className='bg-white shadow-md rounded-lg flex flex-row mt-20'>
            {/* LEFT SIDE */}
            <div className='bg-blue-500 rounded-l-lg p-5 flex flex-col items-center'>
              <div className='text-white'>
                <CgProfile size={100}/>
              </div>
              <div className='bg-white rounded-lg p-5 m-5'>
                <div className='font-bold'>{userData.PersonalBiodata.Nama}</div>
              </div>
              <div className='flex flex-col gap-1 size'>
                <Button className='text-white bg-white'>Bantuan</Button>
                <Button>Keluar</Button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className='p-5'>
              {/* NAV BAR */}
              <div className='flex flex-row gap-10 m-10 text-xl'>
                <Link to={"biodata"}>Biodata</Link>
                <Link to={"kupon"}>Kupon</Link>
                <Link to={"histori-pembelian"}>Histori Pembelian</Link>
              </div>
              {/* CONTENT */}
              <Outlet/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
