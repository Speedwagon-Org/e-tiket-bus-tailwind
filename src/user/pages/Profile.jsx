import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import Coupon from './components/CouponTemplate'
export default function Profile() {
  const buttonStyle = 'bg-white text-black p-2 rounded-lg text-center w-full hover:bg-gray-200'
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
        <div className="bg-halamanprofile bg-center bg-no-repeat h-60 w-screen bg-cover"/>
        <div className='place-items-center grid mb-5'>
          <div className='bg-white shadow-md rounded-lg flex flex-row'>
            {/* LEFT SIDE */}
            <div className='bg-blue-500 rounded-l-lg p-5 flex flex-col items-center'>
               <div className='text-white'>
                 <CgProfile size={100}/>
               </div>
               <div className='bg-white rounded-lg p-5 m-5 w-full flex flex-col gap-5'>
                 {/* NAME CONTAINER */}
                 <div className='font-semibold text-center pb-2 border-b-2 border-black text-3xl'>
                   {userData.PersonalBiodata.Nama}
                 </div>
                 {/* POINT CONTAINER */}
                 <div className='flex justify-between '>
                   <div>
                     <img src="../../assets/images/logo-header.png" alt='logo'/>points
                   </div>
                   <div className='font-bold text-lg'>
                     {userData.BuzzPoint}zz
                   </div>
                 </div>

                 {/* NOTE CONTAIENR */}
                 <div>
                   <div className='text-red-600'>*point akan kadaluwarsa setelah 31 desember</div>
                   <div className='text-green-600'>*transaksi minimal 500rb untuk +150zz</div>
                   <div className='text-green-600'>*transaksi minimal 1jt untuk +400zz</div>
                 </div>
                 {/* COUNPON CONTAINER */}
                 <div className='text-md'>
                   Ayo tukarkan 750zz dengan kupon!
                   <br/>
                   <Coupon couponCode='AFB331' couponDiscount={50} dayLeft={50}></Coupon>
                 </div>
               </div>
              <div className='flex flex-col gap-1 w-full'>
                 <Link className={buttonStyle} to={'/bantuan'}>BANTUAN</Link>
               <Link className={buttonStyle} to={'/account/login'}>KELUAR</Link>
              </div>
           </div>
           {/* RIGHT SIDE */}
           <div className='p-5 border-black w-max '>
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
