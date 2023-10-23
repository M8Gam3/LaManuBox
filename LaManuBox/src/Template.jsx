
// import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import './Styles/main.scss'

export default function Template() {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
