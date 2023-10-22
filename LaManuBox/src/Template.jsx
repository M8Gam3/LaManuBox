import { Outlet } from 'react-router-dom'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
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
