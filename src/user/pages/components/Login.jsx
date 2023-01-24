import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function login() {
  return (
    <section>
      <form className='text-black'>
        {/* Email */}
        <Label>
        Email :
        </Label>
        <TextInput type={'email'}/>

        {/* Password */}
        <Label>
        Password :
        </Label>
        <TextInput type={'password'}/>
        <Button>Log In</Button>
      </form>
      
      Belum memiliki akun? <Link className='text-blue-700' to={'../register'}>aa</Link> sekarang
    </section>
  )
}
