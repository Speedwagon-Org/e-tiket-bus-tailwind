import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import React from 'react'


export default function login() {
  return (
    <section>
      <form className='text-black flex flex-col gap-4'>
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
        
        
        <div>
         <Checkbox/>  <Label>Ingat saya</Label>
        </div>
        <div className='flex flex-col items-end'>
        <Link to={'/profile/biodata'}><Button className='w-max items-end'> Masuk</Button> </Link>
        </div>
      </form>
    </section>
  )
}
