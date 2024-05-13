import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
 import { Outlet } from 'react-router-dom'  // react router se nesting karte to main.jsx mai nesting hai

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <footer/>


    </>
  )
}

export default Layout