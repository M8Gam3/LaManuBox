
// import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar  from './components/Nav/NavBar'
import { Outlet } from 'react-router-dom'
import './Styles/main.scss'

export default function Template() {
    return (
        <>
           <Header></Header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
