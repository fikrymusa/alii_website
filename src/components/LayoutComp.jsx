import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const LayoutComp = () => {
  return (
          <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <Navbar />
      <main>
            <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LayoutComp