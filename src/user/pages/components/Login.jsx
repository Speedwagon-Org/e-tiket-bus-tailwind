import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React from 'react'


export default function login() {
  return (
    <section>
      <form className='text-black flex flex-col gap-4'>
        {/* Email */}
        <Label>
        Email :
        <TextInput type={'email'} placeholder='example@ex.com'/>
        </Label>
        

        {/* Password */}
        <div>
        <Label>
        Password :
        <TextInput type={'password'} placeholder='********'/> 
        </Label>
        
        </div>
        
        
        <div>
        <Checkbox/>  <Label>Ingat saya</Label>
        </div>
        <div className='flex flex-col items-end'>
          <Button className='w-max items-end'>Log In</Button>
        </div>
      </form>
    </section>
  )
}
