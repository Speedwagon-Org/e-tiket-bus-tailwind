import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import LogoLoginRegis from '..\\src\\assets\\images\\login-image.png'
export default function LoginRegis() {
  const checkLoaction = (location) =>{
      if (location === 'login') {
        return <div className='text-black text-xl font-medium grid grid-cols-3 grid-rows-2 place-items-center gap-y-0' >
          <Link to={'login'}>Login</Link> 
          <div>|</div> 
          <Link to={'register'}>Register</Link>
        </div>
      } return <div className='text-black text-xl font-medium grid grid-cols-3 grid-rows-2 place-items-center gap-y-0' >
        <Link to={'login'}>Login</Link> | <Link to={'register'}>Register</Link>
        </div>
  }
  return (
    <>
      <section>
        {/* Hero */}
        <div className="bg-halamanlogin bg-no-repeat h-60 w-screen bg-cover place-items-center grid mb-96">
          <div className="shadow-md rounded-lg box-border text-white bg-white p-10 grid place-items-center grid-cols-2 gap-2 text-black mt-20 mx-20">
            <img src={LogoLoginRegis} alt='LogoLoginRegis' className='h-72'></img>
            <div className='grid place-items-center w-full h-full px-10'>
              {checkLoaction(useLocation().pathname.split('/').at(-1))}
              <div className='w-full'>
                <Outlet/>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

