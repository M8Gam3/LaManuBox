// import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'


export default function Template() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
