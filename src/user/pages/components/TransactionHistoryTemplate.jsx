import { Button } from 'flowbite-react'
import React from 'react'

export default function TransactionHistoryTemplate(
    {
      namaBus = 'n/a', 
      hargaTiket = 0,
      banyakTiket = 0,
      tanggalKeberangkatan = new Date("1-1-1991"),
      jamBatasTransaksi = "0", 
      tanggalBatasTransaksi = new Date("1-1-1991"), 
      dataPenumpang = {
        nama : 'n/a',
        noHp : 'n/a',
        lokasi : 'n/a',
      }
    }
  ) {
  return (
    <div className='bg-slate-100 p-2 rounded-xl grid grid-cols-2'>
        {/* Nama Bus */}
        <div className='grid justify-self-start text-lg font-bold'>
          <div>{namaBus}</div>
        </div>

        {/* Harga Tiket */}
        <div className='grid justify-self-end text-lg'>
          {Intl.NumberFormat('id-ID', {
            style:'currency',
            currency:'IDR'
          }).format(hargaTiket)} x {banyakTiket}
        </div>
        
        {/* Tanggal keberangkatan */}
        <div className='grid justify-self-start text-lg'>
          <div>{tanggalKeberangkatan.toISOString().slice(0,10).replace(/-/g," ")}</div>
        </div>

         {/* Data Penumpang */}
         <div className='grid justify-self-end'>
          {dataPenumpang.nama} <br/>
          {dataPenumpang.noHp} <br/>
          {dataPenumpang.lokasi}
        </div>

        {/* Status Transaksi */}
        <div className='grid justify-self-start font-bold'>
          <div>
          <>Selesaikan transaksi sebelum <br/> pukul {jamBatasTransaksi}, {tanggalBatasTransaksi.toISOString().slice(0,10).replace(/-/g," ")}  </>
          </div>
        </div>

        {/* Tombol */}
        <div className='grid justify-self-end text-lg'>
          <div><Button>Bayar!</Button></div>
        </div>
    </div>
  )
}
