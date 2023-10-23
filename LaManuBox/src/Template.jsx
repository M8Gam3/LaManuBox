
// import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import './Styles/main.scss'

export default function Template() {
    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
