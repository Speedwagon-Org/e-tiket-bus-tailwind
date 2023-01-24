import React from 'react'
import { Outlet } from 'react-router-dom'
// , useLocation
export default function LoginRegis() {
  //let location = useLocation()
  return (
    <>
      <section>
        {/* Hero */}
        <div className="bg-halamanlogin bg-no-repeat h-60 w-screen bg-cover place-items-center grid">
          <div className="rounded-lg box-border w-750 text-white bg-slate-500 p-5 grid place-items-center">
            <Outlet/>
          </div>
        </div>
      </section>
    </>
  )
}

