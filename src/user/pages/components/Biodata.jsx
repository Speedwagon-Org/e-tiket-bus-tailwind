import { Button } from 'flowbite-react'
import React from 'react'

export default function Biodata({Nama = 'n/a', TanggalLahir = 'n/a', JenisKelamin = 0, Email='n/a', NomorHP = 'n/a'}) {
  return (
    <div className='border-black border-2 px-7 py-9 flex flex-col gap-8'>
      {/* BIODATA */}
      <div className='flex flex-col gap-1'>
        <span className='font-medium text-xl'>BIODATA</span>
        <div className='grid grid-cols-2'>
          <div>
            Nama 
          </div>

          <div>
            {Nama} 
          </div>

          <div>
            Tanggal Lahir 
          </div>

          <div>
            {TanggalLahir}
          </div>
          
          <div>
            Jenis Kelamin 
          </div>
          
          <div>
            {JenisKelamin ? "Wanita" : "Pria"}
          </div>
        </div>
      </div>

      {/* KONTAK */}
      <div className='flex flex-col gap-1'>
        <span className='font-medium text-xl'>Kontak</span>
        <div className='grid grid-cols-2'>
          <div>
            Email 
          </div>

          <div>
            {Email} 
          </div>

          <div>
            Nomor HP
          </div>

          <div>
            {NomorHP}
          </div>
          
          <div>
            Password 
          </div>
          
          <div>
            ******
          </div>
        </div>
      </div>

      <Button className='w-fit inactive' disabled>Update Data</Button>
    </div>
  )
}
