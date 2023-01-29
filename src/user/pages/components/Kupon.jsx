import { TextInput, Button } from 'flowbite-react'
import React from 'react'
import Coupon from './CouponTemplate'

export default function Kupon() {
  // <Coupon couponCode='AFB331' couponDiscount={50} dayLeft={50}></Coupon>
  let existingCoupon = [
    {
     coupon :<Coupon couponCode='A00001' couponDiscount={50} dayLeft={50}/>,
     owned : false
    },
    {
      coupon :<Coupon couponCode='A00002' couponDiscount={50} dayLeft={3}/>,
      owned : true
     },
     {
      coupon :<Coupon couponCode='A00003' couponDiscount={50} dayLeft={2}/>,
      owned : true
     },
     {
      coupon :<Coupon couponCode='A00004' couponDiscount={50} dayLeft={10}/>,
      owned : true
     },
     {
      coupon :<Coupon couponCode='A00004' couponDiscount={50} dayLeft={10}/>,
      owned : true
     },
     {
      coupon :<Coupon couponCode='A00004' couponDiscount={50} dayLeft={10}/>,
      owned : true
     }
  ]
  
  const availableCoupon = () => {
    if (existingCoupon.length <= 0){
      return <div className='text-slate-300'>Tidak ada kupon yang tersedia</div>
    } 
    let listAvailableCoupon = []
    for (let i = 0; i < existingCoupon.length; i+= 1){
      if (existingCoupon[i].owned === false){
        listAvailableCoupon.push(existingCoupon[i].coupon)
      }
    }
    return listAvailableCoupon
  }

  const ownedCOupon = () => {
    if (existingCoupon.length <= 0){
      return <div  className='text-slate-300'>Tidak ada kupon yang tersedia</div>
    }
    let listOwnedCoupon = []
    for (let i = 0; i < existingCoupon.length; i+= 1){
      if (existingCoupon[i].owned === true){
        listOwnedCoupon.push(existingCoupon[i].coupon)
      }
    }
    return listOwnedCoupon
  }
  return (
    <div className='flex flex-col px-10 py-5 gap-10 overflow-auto'>
      {/* Input Coupon */}
      <div className='grid grid-cols-2 gap-2'>
        {/* Header */}
        <div className='font-medium text-xl col-span-2'>
          Tukarkan Kupon : 
        </div>
        <div className='col-span-2'>
          <TextInput/>
        </div>
        <div className='grid col-start-2 justify-items-end'>
          <Button>Tukar</Button>
        </div>
      </div>

      {/* Available coupon */}
      <div className='grid grid-cols-2'>
        {/* Header */}
        <div className='font-medium text-xl col-span-2'>
          Ayo tukarkan 750zz dengan kupon 
        </div>
        {/* Coupon */}
        {availableCoupon()}
      </div>

      <div className='grid grid-cols-2'>
        {/* Header */}
        <div className='font-medium text-xl col-span-2'>
          Kupon yang dapat digunakan
        </div>
        {/* Coupon */}
        {ownedCOupon()}
      </div>
      
    </div>
  )
}
