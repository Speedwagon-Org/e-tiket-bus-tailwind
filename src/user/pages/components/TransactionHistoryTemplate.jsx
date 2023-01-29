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
      },
      status = false
    }
  ) {
  return (
    <div className='bg-slate-100 px-5 py-3 rounded-xl border-slate-200 border mb-3'>
      <div className='grid grid-cols-2'>
        {/* Nama Bus */}
        <div className='grid justify-self-start text-xl font-bold'>
          <div>{namaBus}</div>
        </div>

        {/* Harga Tiket */}
        <div className='grid justify-self-end text-xl'>
          {Intl.NumberFormat('id-ID', {
            style:'currency',
            currency:'IDR'
          }).format(hargaTiket)} x {banyakTiket}
        </div>
        
        {/* Tanggal keberangkatan */}
        <div className='grid justify-self-start text-md'>
          <div>{tanggalKeberangkatan.toISOString().slice(0,10).replace(/-/g," ")}</div>
        </div>

         {/* Data Penumpang */}
         <div className='grid justify-self-end text-sm mb-5'>
          {dataPenumpang.nama} <br/>
          {dataPenumpang.noHp} <br/>
          {dataPenumpang.lokasi}
        </div>

        {/* Status Transaksi */}
        <div className='grid justify-self-start font-bold'>
          <div>
            {status ? <></> : <>Selesaikan transaksi sebelum <br/> pukul {jamBatasTransaksi}, {tanggalBatasTransaksi.toISOString().slice(0,10).replace(/-/g," ")}  </>}
          </div>
        </div>

        {/* Tombol */}
        <div className='grid justify-self-end text-lg'>
          <div>{status ? <></> : <Button>Bayar!</Button>}</div>
        </div>
      </div>
    </div>
  )
}
