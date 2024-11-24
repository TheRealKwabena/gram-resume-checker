import React from 'react'
import NavBar from '../components/Navbar'
import {Outlet} from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
        <div>
            <NavBar/>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout
