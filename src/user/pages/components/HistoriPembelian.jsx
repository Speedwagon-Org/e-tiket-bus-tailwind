import React from 'react'
import TransactionHistoryTemplate from './TransactionHistoryTemplate'

export default function HistoriPembelian() {

  return (
    <div className='flex flex-col px-10 py-5 gap-10 overflow-auto'>
      {/* Available coupon */}
      <div className='flex flex-row'>
        {/* Header */}
        <div className='font-medium text-xl'>
          Menunggu Pembayaran
        </div>
        
      </div>
      <TransactionHistoryTemplate/>

      <div className='flex flex-row'>
        {/* Header */}
        <div className='font-medium text-xl'>
          Transaksi Selesai
        </div>
      </div>
      
    </div>
  )
}
