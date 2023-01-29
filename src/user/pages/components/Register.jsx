import React from 'react'
import {Label, TextInput, Checkbox, Button} from 'flowbite-react'
import {Link} from 'react-router-dom'
export default function register() {
  return (
    <section>
      <form className='text-black flex flex-col gap-4'>
      {/* Email */}
        <Label>
          Nama :
          <TextInput type={'email'} placeholder='Gilbert Cahaya'/>
        </Label>
        {/* Email */}
        <Label>
          Email :
          <TextInput type={'email'} placeholder='GilbertCahaya@syukur.com'/>
        </Label>
        

        {/* Password */}
        <Label>
          Password :
          <TextInput type={'password'} placeholder='********'/> 
        </Label>

        <Label>
          Konfirmasi Password :
          <TextInput type={'password'} placeholder='********'/> 
        </Label>
        <div>
          <Checkbox/>  <Label>Saya menyetujui seluruh <Link className='text-blue-400'>S&K</Link> yang telah berlaku</Label>
        </div>
        <div className='flex flex-col items-end'>
        <Link to={'/profile/biodata'}><Button className='w-max items-end'> Masuk</Button> </Link>
        </div>
      </form>
    </section>
  )
}
