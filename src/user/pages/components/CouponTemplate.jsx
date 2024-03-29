import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineContentCopy} from 'react-icons/md'
import {TbDiscount2} from 'react-icons/tb'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Coupon({couponDiscount = 0, couponCode = '######', dayLeft = 0} ) {

  const copyTextToClipboard = () => {
    try {
      navigator.clipboard.writeText(couponCode)
      toast("Kupon telah disalin!")
    } catch  {
      toast("Terjadi kesalahan!")
    }
  }
  const checkDay = () => {
    if (dayLeft < 3) {
      return <div className='text-red-600'>*berakhir {dayLeft} hari lagi</div>
    }
  }

  checkDay()
  return (
    <div className='bg-white border-2 border-slate-500 rounded-lg border-black p-2 w-fit m-2'>
      <div>
      <div className='flex flex-row text-xl font-medium'>
        <div className='mr-20'>Potongan {couponDiscount}% </div> 
        <div><TbDiscount2 size={30}/></div>
      </div>
        <Link to={'/blog'}>s&k berlaku</Link>
      </div>
      {checkDay()}
      
      <div onClick={copyTextToClipboard} className='text-2xl font-bold mt-5 flex hover:cursor-pointer'>#{couponCode} <MdOutlineContentCopy size={18} className='ml-2'/></div>
      <ToastContainer/>
    </div>
  )
}
