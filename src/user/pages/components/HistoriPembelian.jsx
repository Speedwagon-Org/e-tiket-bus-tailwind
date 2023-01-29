import React from 'react'
import TransactionHistoryTemplate from './TransactionHistoryTemplate'

export default function HistoriPembelian() {
  const mDataPenumpang = {
    nama : 'Gareng Susilo',
    noHp : '081212341234',
    lokasi : 'Medan'
  }
  const listTransaksi = [
    {
      namaBus : 'Si Kilat', 
      hargaTiket : 500000,
      banyakTiket : 1,
      dataPenumpang : mDataPenumpang,
      status : false
    },
    {
      namaBus : 'Janji Doi', 
      hargaTiket : 800000,
      banyakTiket : 1,
      dataPenumpang : mDataPenumpang,
      status : true
    }
    ,
    {
      namaBus : 'Cyberbuzz', 
      hargaTiket : 400000,
      banyakTiket : 2,
      dataPenumpang : mDataPenumpang,
      status : true
    }
  ]

  const waitingForPayment = () => {
    if (listTransaksi.length <= 0){
      return <></>
    } 
    let listWaitingForPayment = [
      <div className='font-medium text-xl mb-5'>
          Menunggu Pembayaran
      </div>
    ]
    for (let i = 0; i < listTransaksi.length; i+= 1){
      if (listTransaksi[i].status === false){
        listWaitingForPayment.push(
        <TransactionHistoryTemplate 
          namaBus = {listTransaksi[i].namaBus}
          hargaTiket = {listTransaksi[i].hargaTiket}
          banyakTiket = {listTransaksi[i].banyakTiket}
          dataPenumpang = {listTransaksi[i].dataPenumpang}
          status = {listTransaksi[i].status}
        />)
      }
    }
    return listWaitingForPayment
  }

  const finishedTransaction = () => {
    if (listTransaksi.length <= 0){
      return <></>
    } 
    let listFinishedTransaction = []
    for (let i = 0; i < listTransaksi.length; i+= 1){
      if (listTransaksi[i].status === true){
        listFinishedTransaction.push(
        <TransactionHistoryTemplate 
          namaBus = {listTransaksi[i].namaBus}
          hargaTiket = {listTransaksi[i].hargaTiket}
          banyakTiket = {listTransaksi[i].banyakTiket}
          dataPenumpang = {listTransaksi[i].dataPenumpang}
          status = {listTransaksi[i].status}
        />)
      }
    }
    return listFinishedTransaction
  }


  return (
    <div className='flex flex-col px-10 py-5 gap-10 overflow-auto'>
      {/* Waiting for Payment */}
      <div className='flex flex-col'>
        {waitingForPayment()}
      </div>

      <div className='flex flex-col '>
        {/* Header */}
        <div className='font-medium text-xl  mb-5'>
          Transaksi Selesai
        </div>
        {finishedTransaction()}
      </div>
      
    </div>
  )
}
