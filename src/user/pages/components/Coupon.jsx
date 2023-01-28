import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineContentCopy} from 'react-icons/md'
import {TbDiscount2} from 'react-icons/tb'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Coupon({couponDiscount = 0, couponCode = '######'}) {
  const notifyTextCopied = () => {
    toast("Kupon telah disalin!")
  };
  return (
    <div className='bg-white border-2 border-slate-500 rounded-lg border-black p-2 w-fit m-4'>
      <div>
      <div className='flex flex-row text-xl font-medium'>
        <div className='mr-20'>Potongan {couponDiscount}% </div> 
        <div><TbDiscount2 size={30}/></div>
      </div>
        <Link to={'/blog'}>s&k berlaku</Link>
      </div>
      
      <div onClick={notifyTextCopied} className='text-2xl font-bold mt-5 flex flex-ro hover:cursor-pointer'>{couponCode} <MdOutlineContentCopy className='ml-2'/></div>
      <ToastContainer/>
    </div>
  )
}
